import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    alt: "Woman getting professional hair treatment"
  },
  {
    url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    alt: "Elegant hairstyling session"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    alt: "Professional hair coloring"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappNumber = "+917633894003";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-libre mb-8 leading-tight tracking-wider"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              background: "linear-gradient(to right, #ffffff, #e2e8f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-10 max-w-2xl mx-auto font-libre tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
          >
            Experience premium hair care and styling at Trends Unisex Salon
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/90 text-black px-10 py-5 rounded-full text-xl font-libre hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;