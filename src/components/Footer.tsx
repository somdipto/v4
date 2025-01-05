import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

export default function Footer() {
  const whatsappNumber = "+917633894003";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">About Us</h3>
            <p className="text-black dark:text-gray-300 leading-relaxed">
              Trends Unisex Salon is a premium hair & beauty salon offering top-quality services across Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li>
                <a href={`tel:+917633894003`} className="hover:text-black dark:hover:text-white transition">
                  Phone: +91 7633 894 003
                </a>
              </li>
              <li>
                <a href="mailto:trendsUnisex@gmail.com" className="hover:text-black dark:hover:text-white transition">
                  Email: TrendsUnisex@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Trends Unisex. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}