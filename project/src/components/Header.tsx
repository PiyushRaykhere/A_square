import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import logo from '../assets/logo_removedBG.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+917312345678" className="flex items-center gap-2 hover:text-blue-100 transition">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91 9827973991</span>
              </a>
              <a href="mailto:info@asquarehospital.in" className="flex items-center gap-2 hover:text-blue-100 transition">
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">Asquarehospital@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs sm:text-sm">24×7 Emergency Services</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A²</span>
              </div> */}
              <img src={logo} alt="logo" className='w-28 sm:w-36 h-16 sm:h-20' />
              {/* <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
                  ASquare
                </h1>
                <p className="text-xs text-gray-600">Multispeciality Hospital</p>
              </div> */}
            </Link>

            <div className="hidden lg:flex text-sm items-center gap-5">
              <Link to="/" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                About Us
              </Link>
              <Link to="/specialties" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Speciality
              </Link>
              <Link to="/departments" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Department
              </Link>
              <Link to="/doctors" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Doctors
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Services
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#0077B6] font-medium transition">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#0077B6] font-medium transition mr-28">
                Contact
              </Link>
              <a
                href="/#appointment"
                className="bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition transform hover:scale-105 font-medium"
              >
                Book Appointment
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/specialties"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Specialties
              </Link>
              <Link
                to="/departments"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Departments
              </Link>
              <Link
                to="/doctors"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Doctor
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="/#appointment"
                className="block bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-4 py-2 rounded-lg text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
