import { motion } from "framer-motion";

const FloatingOffer = () => {
  return (
    <div className="w-full bg-black text-white overflow-hidden py-2">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap text-lg font-medium"
      >
        🎉 Special Offer: Get 20% off on all services this week! Book your appointment now on WhatsApp
      </motion.div>
    </div>
  );
};

export default FloatingOffer;