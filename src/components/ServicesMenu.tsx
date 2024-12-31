import { motion } from "framer-motion";

const services = [
  {
    name: "Haircut",
    description: "Precision cutting for all hair types",
    price: "$30+",
    duration: "45 mins",
  },
  {
    name: "Color",
    description: "Full color, highlights, or balayage",
    price: "$80+",
    duration: "2-3 hrs",
  },
  {
    name: "Style",
    description: "Blowout, updo, or special occasion",
    price: "$45+",
    duration: "45 mins",
  },
  {
    name: "Treatment",
    description: "Deep conditioning and repair",
    price: "$40+",
    duration: "30 mins",
  },
];

const ServicesMenu = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Professional care for your unique style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{service.price}</span>
                <span className="text-gray-500">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;