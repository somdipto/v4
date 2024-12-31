import { motion } from "framer-motion";

const offers = [
  {
    title: "Basic",
    description: "Perfect for those starting their journey with us. Includes basic hair care and styling services.",
    features: ["Basic haircut", "Simple styling", "Hair wash", "Basic consultation"],
  },
  {
    title: "Intermediate",
    description: "Enhanced services for those seeking more comprehensive hair care solutions.",
    features: ["Advanced cut", "Color services", "Deep conditioning", "Style consultation"],
  },
  {
    title: "Advanced",
    description: "Premium package with our most exclusive and comprehensive services.",
    features: ["Premium styling", "Complex coloring", "Treatment therapy", "Personal consultation"],
  },
];

const ExclusiveOffers = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-4 underline">{offer.title}</h3>
              <p className="text-gray-600 mb-6">{offer.description}</p>
              <ul className="space-y-2">
                {offer.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600">
                    {feature}
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

export default ExclusiveOffers;