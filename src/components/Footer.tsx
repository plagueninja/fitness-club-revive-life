
import { Link } from "react-router-dom";
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitness-darkblue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Dumbbell size={24} className="text-fitness-purple" />
              <span>Fitness Club</span>
            </div>
            <p className="text-gray-300 mb-4">
              Helping you achieve your fitness goals with expert guidance and state-of-the-art facilities.
              Managed by VKREVER Pvt. Ltd.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-fitness-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fitness-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fitness-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-fitness-purple transition-colors">Home</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-fitness-purple transition-colors">Membership</Link></li>
              <li><Link to="/trainers" className="text-gray-300 hover:text-fitness-purple transition-colors">Trainers</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fitness-purple transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fitness-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-fitness-purple transition-colors">Diet Plans</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fitness-purple transition-colors">Video Workouts</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fitness-purple transition-colors">Personal Training</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fitness-purple transition-colors">Online Coaching</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-fitness-purple" />
                <span className="text-gray-300">Kalaburagi, Karnataka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-fitness-purple" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-fitness-purple" />
                <span className="text-gray-300">info@fitnessclub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fitness Club. Managed by VKREVER Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
