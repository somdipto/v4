import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Services = () => {
  const services = [
    {
      name: "Hair Styling",
      description: "Expert cuts, styling, and treatments",
      details: [
        "Haircuts & Styling",
        "Hair Coloring",
        "Hair Treatments",
        "Hair Extensions",
      ],
    },
    {
      name: "Beauty Services",
      description: "Complete beauty care solutions",
      details: [
        "Facials",
        "Makeup",
        "Waxing",
        "Threading",
      ],
    },
    {
      name: "Nail Care",
      description: "Professional nail care services",
      details: [
        "Manicure",
        "Pedicure",
        "Nail Art",
        "Gel Extensions",
      ],
    },
  ];

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
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600">Discover our range of professional services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;