import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Downtown Branch",
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [-74.006, 40.7128] as [number, number],
  },
  {
    name: "Uptown Branch",
    address: "456 Park Ave, Uptown",
    phone: "(555) 234-5678",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [-73.9654, 40.7829] as [number, number],
  },
  {
    name: "Midtown Branch",
    address: "789 Fifth Ave, Midtown",
    phone: "(555) 345-6789",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    coordinates: [-73.9845, 40.7549] as [number, number],
  },
];

const Locations = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.9845, 40.7549],
      zoom: 12,
    });

    locations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <h3 class="font-semibold">${location.name}</h3>
            <p>${location.address}</p>
          `)
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
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