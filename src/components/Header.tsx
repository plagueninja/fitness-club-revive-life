
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-fitness-darkblue text-white sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Dumbbell size={24} className="text-fitness-purple" />
          <span>Fitness Club</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-fitness-purple transition-colors">Home</Link>
          <Link to="/membership" className="hover:text-fitness-purple transition-colors">Membership</Link>
          <Link to="/trainers" className="hover:text-fitness-purple transition-colors">Trainers</Link>
          <Link to="/services" className="hover:text-fitness-purple transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-fitness-purple transition-colors">Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-fitness-darkblue w-full">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="hover:text-fitness-purple transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/membership" 
              className="hover:text-fitness-purple transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              to="/trainers" 
              className="hover:text-fitness-purple transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Trainers
            </Link>
            <Link 
              to="/services" 
              className="hover:text-fitness-purple transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-fitness-purple transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
