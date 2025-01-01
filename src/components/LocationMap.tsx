import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Trends Unisex Saloon",
    address: "184,3rd cross, Link Rd, Malleshwaram, Bengaluru, Karnataka 560003",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [12.995784605395825, 77.57368586724279] as [number, number],
  },
  {
    name: "Trends Unisex Saloon",
    address:
      "483, 1st Stage, 6th Phase, 60 Feet Road WOC Road, Rajajinagar, (opp to Reliance Fresh Mart), Bengaluru",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [12.987444307249396, 77.54460931117136] as [number, number],
  },
  {
    name: "Trends Unisex Saloon",
    address:
      "Near Atria Institute of Technology , R.T Nagar , Hebbala, Bengaluru , Karnataka 560024 ",
    phone: "+918923477324",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [13.033676840844054, 77.5890606914712] as [number, number],
  },
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current).setView(
      [12.995784605395825, 77.57368586724279],
      12
    );

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      shadowSize: [41, 41],
    });

    locations.forEach((location) => {
      const marker = L.marker(location.coordinates, {
        icon: customIcon,
      }).addTo(map);

      const popupContent = `
        <div class="p-4 min-w-[250px]">
          <h3 class="font-semibold text-lg mb-2">${location.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${location.address}</p>
          <p class="text-sm text-gray-600 mb-2">${location.phone}</p>
          <p class="text-sm text-gray-600 mb-4">${location.hours}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${
            location.coordinates[0]
          },${
        location.coordinates[1]
      }" target="_blank" class="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors inline-block">Get Directions</a>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-600">Find a Trends Salon near you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6 order-2 lg:order-1">
            {locations.map((location, index) => (
              <motion.div
                key={location.name + index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p>{location.hours}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Directions
                </a>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[600px] rounded-lg shadow-lg overflow-hidden sticky top-24"
            >
              <div ref={mapContainer} className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;