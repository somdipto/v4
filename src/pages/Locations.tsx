import Navbar from "@/components/Navbar";
import LocationMap from "@/components/LocationMap";

const Locations = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with higher z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Main content with lower z-index */}
      <div className="relative z-10">
        <LocationMap />
      </div>
      
      {/* WhatsApp button is handled globally with highest z-index */}
    </div>
  );
};

export default Locations;