import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
  {
    name: "Trends Unisex Saloon",
    address: "184,3rd cross, Link Rd, Malleshwaram, Bengaluru, Karnataka 560003",
    link: "https://maps.app.goo.gl/BpzZFURf575rSh2u8",
    coordinates: [40.7128, -74.006],
  },

  {
    name: "Trends Unisex Saloon",
    address: "483, 1st Stage, 6th Phase, 60 Feet Road WOC Road, Rajajinagar, (opp to Reliance Fresh Mart),Bengaluru",
    link: "https://maps.app.goo.gl/mBaJbEZAhPmLF34G7",
    coordinates: [40.7829, -73.9654],
  },
  {
    name: "Trends Unisex Saloon",
    address: "Near Atria Institute of Technology , R.T Nagar , Hebbala, Bengaluru , karnataka 560024 ",
    link: "https://maps.app.goo.gl/njUN35DWVAGE9nL6A",
    coordinates: [40.7549, -73.9845],
  },
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    const map = L.map(mapContainer.current).setView([40.7549, -73.9845], 12);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers
    locations.forEach((location) => {
      const marker = L.marker(location.coordinates).addTo(map);
      marker.bindPopup(`
        <div>
          <h3 class="font-semibold">${location.name}</h3>
          <p>${location.address}</p>
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-600">Find a Trends Salon near you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {locations.map((location) => (
              <div
                key={location.name}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>

                <a
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                  href={location.link}
                >
                  Get directions
                </a>
              </div>
            ))}
          </div>

          <div ref={mapContainer} className="h-[500px] rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
