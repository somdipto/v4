import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "Basic Service",
      description: "Perfect for routine maintenance and basic styling needs",
      price: "$99",
      image: "/lovable-uploads/efe30971-b2b4-4b79-8c0c-0661a081fc1e.png",
      details: ["Basic haircut", "Simple styling", "Hair wash", "Basic consultation"],
    },
    {
      name: "Intermediate Service",
      description: "Advanced styling and treatment options for enhanced care",
      price: "$149",
      image: "/lovable-uploads/2f381dc8-c1bd-4599-b64a-21b65d1be8b3.png",
      details: ["Advanced cut", "Color services", "Deep conditioning", "Style consultation"],
    },
    {
      name: "Advanced Service",
      description: "Premium service with comprehensive hair and beauty treatments",
      price: "$199",
      image: "/lovable-uploads/ccce83e8-1602-4f81-8ddc-a87a2dc11d4e.png",
      details: ["Premium styling", "Complex coloring", "Treatment therapy", "Personal consultation"],
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
          <h1 className="text-5xl font-serif mb-4">Our Services</h1>
          <p className="text-gray-600">Discover our range of professional services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <ul className="space-y-2 mb-6">
                {service.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-600">
                    • {detail}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Book now
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-16 bg-black text-white rounded-lg"
          style={{
            backgroundImage: "url('/lovable-uploads/f6e63a05-16bc-41c2-be4b-08f24de54830.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-4xl font-serif mb-4">Book a free consultation</h2>
          <p className="mb-8">Let's discuss how we can help you achieve your desired look</p>
          <Button variant="secondary" size="lg">
            Book now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;