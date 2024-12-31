import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const locations = [
  {
    name: "Downtown Branch",
    address: "123 Main St, Downtown",
    coordinates: [-74.006, 40.7128] as [number, number],
  },
  {
    name: "Uptown Branch",
    address: "456 Park Ave, Uptown",
    coordinates: [-73.9654, 40.7829] as [number, number],
  },
  {
    name: "Midtown Branch",
    address: "789 Fifth Ave, Midtown",
    coordinates: [-73.9845, 40.7549] as [number, number],
  },
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN"; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.9845, 40.7549] as [number, number],
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
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <button className="mt-4 text-black hover:underline">
                  Get directions
                </button>
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