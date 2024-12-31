import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "+917633894003";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
            Trends Unisex Salon is a premium hair & beauty salon offering top-quality services across Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-300 hover:text-white transition"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href={`tel:+917633894003`} className="hover:text-white transition">
                  Phone: +91 7633 894 003
                </a>
              </li>
              <li>
                <a href="mailto:info@straight-studio.com" className="hover:text-white transition">
                  Email: info@straight-studio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Straight Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}