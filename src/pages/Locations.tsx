import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Trends Unisex Saloon",
    address: "184,3rd cross, Link Rd, Malleshwaram, Bengaluru, Karnataka 560003",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [12.995784605395825, 77.57368586724279],
  },
  {
    name: "Trends Unisex Saloon",
    address:
      "483, 1st Stage, 6th Phase, 60 Feet Road WOC Road, Rajajinagar, (opp to Reliance Fresh Mart), Bengaluru",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [12.987444307249396, 77.54460931117136],
  },
  {
    name: "Trends Unisex Saloon",
    address:
      "Near Atria Institute of Technology , R.T Nagar , Hebbala, Bengaluru , Karnataka 560024 ",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [13.033676840844054, 77.5890606914712],
  },
];

const Locations = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current).setView(
      [12.995784605395825, 77.57368586724279],
      12
    );

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers
    locations.forEach((location) => {
      L.marker(location.coordinates)
        .addTo(map)
        .bindPopup(
          `<h3 class="font-semibold">${location.name}</h3>
           <p>${location.address}</p>`
        );
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-gray-600">Find a Trends Salon near you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {locations.map((location) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p>{location.hours}</p>
                </div>
                <button className="mt-4 text-black hover:underline">
                  Get directions
                </button>
              </motion.div>
            ))}
          </div>

          <div ref={mapContainer} className="h-[600px] rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Locations;
