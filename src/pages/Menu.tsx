import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Menu = () => {
  const menuItems = {
    "Hair Services": [
      { name: "Women's Haircut", description: "Includes wash, cut, and style", price: "₹450" },
      { name: "Men's Haircut", description: "Includes wash, cut, and style", price: "₹300" },
      { name: "Children's Haircut", description: "Ages 12 and under", price: "₹250" },
      { name: "Bang Trim", description: "Quick trim between cuts", price: "₹150" },
    ],
    "Color Services": [
      { name: "Single Process Color", description: "Full color application", price: "₹750" },
      { name: "Highlights", description: "Partial or full foils", price: "₹1,200" },
      { name: "Balayage", description: "Hand-painted highlights", price: "₹1,500" },
      { name: "Color Correction", description: "Consultation required", price: "Varies" },
    ],
    "Styling Services": [
      { name: "Blowout", description: "Wash and style", price: "₹450" },
      { name: "Special Occasion", description: "Formal styling", price: "₹750" },
      { name: "Bridal Hair", description: "Includes trial", price: "₹1,500" },
      { name: "Extensions", description: "Consultation required", price: "Varies" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif mb-4">Our Menu</h1>
          <p className="text-gray-600">Comprehensive list of our services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
        >
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-serif mb-6 pb-2 border-b border-gray-200">{category}</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-lg font-medium ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;