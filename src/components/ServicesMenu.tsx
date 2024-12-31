import { motion } from "framer-motion";
import { Button } from "./ui/button";

const services = [
  {
    name: "Haircut & Styling",
    description: "Expert haircuts and styling for all hair types",
    price: "₹999",
    image: "/lovable-uploads/19df915f-d360-4164-963a-403c78f7539a.png",
  },
  {
    name: "Hair Treatment",
    description: "Advanced treatments for healthy, beautiful hair",
    price: "₹1,499",
    image: "/lovable-uploads/917458d1-1bda-4b4e-8ec5-f33448824292.png",
  },
  {
    name: "Premium Package",
    description: "Complete hair makeover with premium products",
    price: "₹1,999",
    image: "/lovable-uploads/f6e63a05-16bc-41c2-be4b-08f24de54830.png",
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
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{service.name}</h3>
                <p className="text-lg font-bold mb-2">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">
                  Book now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;