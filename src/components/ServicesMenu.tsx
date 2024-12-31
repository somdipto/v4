import { motion } from "framer-motion";
import { Button } from "./ui/button";

const services = [
  {
    name: "Basic Service",
    description: "Perfect for routine maintenance and basic styling needs",
    price: "$99",
    image: "/lovable-uploads/efe30971-b2b4-4b79-8c0c-0661a081fc1e.png",
  },
  {
    name: "Intermediate Service",
    description: "Advanced styling and treatment options for enhanced care",
    price: "$149",
    image: "/lovable-uploads/2f381dc8-c1bd-4599-b64a-21b65d1be8b3.png",
  },
  {
    name: "Advanced Service",
    description: "Premium service with comprehensive hair and beauty treatments",
    price: "$199",
    image: "/lovable-uploads/ccce83e8-1602-4f81-8ddc-a87a2dc11d4e.png",
  },
];

const ServicesMenu = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white"
            >
              <div className="aspect-square mb-4 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">{service.name}</h3>
              <p className="text-lg font-bold mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="outline" className="w-full">
                Book now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;