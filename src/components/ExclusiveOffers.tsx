import { motion } from "framer-motion";

const offers = [
  {
    title: "Basic",
    description: "Perfect for those starting their journey with us. Includes essential hair care services.",
    price: "₹999",
    features: [
      "Basic haircut",
      "Hair wash",
      "Basic styling",
      "10% off on products"
    ],
  },
  {
    title: "Intermediate",
    description: "Enhanced package with premium services for a complete transformation.",
    price: "₹1,999",
    features: [
      "Premium haircut",
      "Deep conditioning",
      "Advanced styling",
      "20% off on products",
    ],
  },
  {
    title: "Advanced",
    description: "Our most comprehensive package with exclusive premium services.",
    price: "₹2,999",
    features: [
      "Luxury haircut",
      "Color treatment",
      "Keratin treatment",
      "30% off on products",
    ],
  },
];

const ExclusiveOffers = () => {
  return (
    <div className="py-16 bg-white">
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
              className="bg-white p-8 rounded-lg border border-black relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black" />
              <h3 className="text-2xl font-serif mb-4 underline decoration-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <p className="text-3xl font-bold mb-6">{offer.price}</p>
              <ul className="space-y-3">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="mr-2">•</span>
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