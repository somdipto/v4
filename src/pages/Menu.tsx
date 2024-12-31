import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Menu = () => {
  const menuItems = {
    "Hair Services": [
      { name: "Women's Haircut", description: "Includes wash, cut, and style", price: "$45+" },
      { name: "Men's Haircut", description: "Includes wash, cut, and style", price: "$30+" },
      { name: "Children's Haircut", description: "Ages 12 and under", price: "$25+" },
      { name: "Bang Trim", description: "Quick trim between cuts", price: "$15+" },
    ],
    "Color Services": [
      { name: "Single Process Color", description: "Full color application", price: "$75+" },
      { name: "Highlights", description: "Partial or full foils", price: "$120+" },
      { name: "Balayage", description: "Hand-painted highlights", price: "$150+" },
      { name: "Color Correction", description: "Consultation required", price: "Varies" },
    ],
    "Styling Services": [
      { name: "Blowout", description: "Wash and style", price: "$45+" },
      { name: "Special Occasion", description: "Formal styling", price: "$75+" },
      { name: "Bridal Hair", description: "Includes trial", price: "$150+" },
      { name: "Extensions", description: "Consultation required", price: "Varies" },
    ],
  };

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
          <h1 className="text-5xl font-serif mb-4">Our Menu</h1>
          <p className="text-gray-600">Comprehensive list of our services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(menuItems).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <h2 className="text-2xl font-serif mb-6 text-center">{category}</h2>
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <span className="text-gray-900 font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;