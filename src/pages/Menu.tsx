import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Menu = () => {
  const menuItems = [
    {
      category: "Haircuts",
      items: [
        { name: "Women's Haircut", price: "$45+" },
        { name: "Men's Haircut", price: "$30+" },
        { name: "Children's Haircut", price: "$25+" },
        { name: "Bang Trim", price: "$15+" },
      ],
    },
    {
      category: "Color Services",
      items: [
        { name: "Single Process Color", price: "$75+" },
        { name: "Highlights", price: "$120+" },
        { name: "Balayage", price: "$150+" },
        { name: "Color Correction", price: "Consultation Required" },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "Blowout", price: "$45+" },
        { name: "Special Occasion Style", price: "$75+" },
        { name: "Bridal Hair", price: "$150+" },
        { name: "Hair Extensions", price: "Consultation Required" },
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
          <h1 className="text-4xl font-bold mb-4">Service Menu</h1>
          <p className="text-gray-600">Our comprehensive list of services and prices</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-gray-600 font-medium">{item.price}</span>
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