import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "First Visit Special",
    description: "20% off your first service",
    code: "WELCOME20",
    validUntil: "2024-12-31",
  },
  {
    title: "Package Deal",
    description: "Book 3 services, get 1 free",
    code: "PACKAGE4",
    validUntil: "2024-12-31",
  },
  {
    title: "Student Discount",
    description: "15% off with valid student ID",
    code: "STUDENT15",
    validUntil: "2024-12-31",
  },
  {
    title: "Senior Special",
    description: "10% off for seniors",
    code: "SENIOR10",
    validUntil: "2024-12-31",
  },
];

const ExclusiveOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = index * containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Exclusive Offers</h2>
          <p className="text-gray-600">Special deals for our valued clients</p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-full px-4"
              >
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                  <div className="bg-black text-white py-2 px-4 rounded inline-block mb-4">
                    {offer.code}
                  </div>
                  <p className="text-sm text-gray-500">
                    Valid until {new Date(offer.validUntil).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scrollToOffer(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollToOffer(currentIndex + 1)}
            disabled={currentIndex === offers.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToOffer(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;