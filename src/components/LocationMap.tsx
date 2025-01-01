import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const locations = [
  {
    name: "Trends Unisex Saloon",
    address: "184,3rd cross, Link Rd, Malleshwaram, Bengaluru, Karnataka 560003",
    link: "https://maps.app.goo.gl/BpzZFURf575rSh2u8",
    coordinates: { lat: 12.995784605395825, lng: 77.57368586724279 },
  },
  {
    name: "Trends Unisex Saloon",
    address: "483, 1st Stage, 6th Phase, 60 Feet Road WOC Road, Rajajinagar, (opp to Reliance Fresh Mart),Bengaluru",
    link: "https://maps.app.goo.gl/mBaJbEZAhPmLF34G7",
    coordinates: { lat: 12.987444307249396, lng: 77.54460931117136 },
  },
  {
    name: "Trends Unisex Saloon",
    address: "Near Atria Institute of Technology , R.T Nagar , Hebbala, Bengaluru , karnataka 560024 ",
    link: "https://maps.app.goo.gl/njUN35DWVAGE9nL6A",
    coordinates: { lat: 13.033676840844054, lng: 77.5890606914712 },
  },
];

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<null | typeof locations[0]>(null);
  const center = { lat: 13.0027, lng: 77.5669 }; // Bengaluru center

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "0.5rem",
  };

  const options = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  };

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
                key={location.name + location.address}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <a
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </div>
            ))}
          </div>

          <div className="h-[500px] rounded-lg shadow-lg">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
              >
                {locations.map((location) => (
                  <Marker
                    key={location.name + location.address}
                    position={location.coordinates}
                    onClick={() => setSelectedLocation(location)}
                  />
                ))}

                {selectedLocation && (
                  <InfoWindow
                    position={selectedLocation.coordinates}
                    onCloseClick={() => setSelectedLocation(null)}
                  >
                    <div>
                      <h3 className="font-semibold">{selectedLocation.name}</h3>
                      <p className="text-sm">{selectedLocation.address}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;