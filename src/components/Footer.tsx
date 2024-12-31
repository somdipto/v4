import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              Straight Studio is a premium hair & beauty salon offering top-quality services across Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/appointment"
                  className="text-gray-400 hover:text-white transition"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-400 hover:text-white transition"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91 98864 58555</li>
              <li>Email: info@straight-studio.com</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} Straight Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
