const onlyAscii = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "");

const normalizePixText = (value: string, maxLength?: number) => {
  let text = onlyAscii(value).trim().toUpperCase();

  if (maxLength) {
    text = text.slice(0, maxLength);
  }

  return text;
};

const formatField = (id: string, value: string) => {
  if (value.length > 99) {
    throw new Error(`Campo PIX ${id} excedeu 99 caracteres.`);
  }

  const size = value.length.toString().padStart(2, "0");

  return `${id}${size}${value}`;
};

const crc16 = (str: string) => {
  let crc = 0xffff;

  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;

    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }

      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
};

interface PixPayloadParams {
  pixKey: string;
  recipientName: string;
  city: string;
  amount?: number;
  description?: string;
  txid?: string;
}

export const buildPixPayload = ({
  pixKey,
  recipientName,
  city,
  amount,
  description,
  txid,
}: PixPayloadParams) => {
  const normalizedPixKey = pixKey.trim();

  const gui = formatField("00", "BR.GOV.BCB.PIX");
  const pixKeyField = formatField("01", normalizedPixKey);

  const baseMerchantInfo = `${gui}${pixKeyField}`;

  let descriptionField = "";

  if (description && description.trim()) {
    const maxMerchantInfoLength = 99;
    const maxDescriptionFieldLength =
      maxMerchantInfoLength - baseMerchantInfo.length;

    const maxDescriptionValueLength = Math.max(
      0,
      maxDescriptionFieldLength - 4,
    );

    if (maxDescriptionValueLength > 0) {
      descriptionField = formatField(
        "02",
        normalizePixText(description, maxDescriptionValueLength),
      );
    }
  }

  const merchantAccountInfo = formatField(
    "26",
    `${baseMerchantInfo}${descriptionField}`,
  );

  const payloadFormatIndicator = formatField("00", "01");

  const hasAmount = typeof amount === "number" && amount > 0;

  const pointOfInitiationMethod = formatField("01", hasAmount ? "12" : "11");

  const merchantCategoryCode = formatField("52", "0000");
  const transactionCurrency = formatField("53", "986");

  const transactionAmount = hasAmount
    ? formatField("54", amount.toFixed(2))
    : "";

  const countryCode = formatField("58", "BR");
  const merchantName = formatField("59", normalizePixText(recipientName, 25));
  const merchantCity = formatField("60", normalizePixText(city, 15));

  const normalizedTxid = normalizePixText(txid || "***", 25);

  const additionalDataFieldTemplate = formatField(
    "62",
    formatField("05", normalizedTxid),
  );

  const payloadWithoutCrc = [
    payloadFormatIndicator,
    pointOfInitiationMethod,
    merchantAccountInfo,
    merchantCategoryCode,
    transactionCurrency,
    transactionAmount,
    countryCode,
    merchantName,
    merchantCity,
    additionalDataFieldTemplate,
    "6304",
  ].join("");

  const finalCrc = crc16(payloadWithoutCrc);

  return `${payloadWithoutCrc}${finalCrc}`;
};