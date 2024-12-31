import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesMenu from "@/components/ServicesMenu";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import OffersCarousel from "@/components/OffersCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <ServicesMenu />
      <ExclusiveOffers />
      <OffersCarousel />
      <LocationMap />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;