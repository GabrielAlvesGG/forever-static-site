import { useEffect } from "react";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Countdown from "@/components/Countdown";
import GiftList from "@/components/GiftList";
import RSVP from "@/components/RSVP";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { weddingConfig } from "@/data/config";

const Index = () => {
  // Update page title and meta
  useEffect(() => {
    document.title = `${weddingConfig.groomName} & ${weddingConfig.brideName} | Casamento`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Site do casamento de ${weddingConfig.groomName} e ${weddingConfig.brideName}. Confirme sua presença e veja nossa lista de presentes.`
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <Countdown />
      <GiftList />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
};

export default Index;
