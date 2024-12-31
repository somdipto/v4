import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src="/lovable-uploads/cb8c69bf-1b35-4c7e-baf8-fe1138065fbc.png" alt="Salon Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300">
              Experience premium hair care and styling at Trends Unisex Salon
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+916366547532" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 63665 47532</span>
              </a>
              <a href="mailto:info@trendssalon.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>info@trendssalon.com</span>
              </a>
              <a 
                href="https://goo.gl/maps/your-location" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <MapPin size={18} />
                <span>Find our locations</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Price Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/your-salon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com/your-salon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://youtube.com/your-salon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Trends Unisex Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;