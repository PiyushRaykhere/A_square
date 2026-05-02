import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import logo from '../assets/logo_removedBG.png';


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A²</span>
              </div> */}
              <img src={logo} alt="logo" className='w-28 sm:w-36 h-16 sm:h-20' />
              {/* <div>
                <h3 className="text-2xl font-bold">ASquare</h3>
                <p className="text-sm text-gray-400">Multispeciality Hospital</p>
              </div> */}
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Square Hospital — delivering world-class healthcare in Odisha with compassion, excellence, and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/home" className="text-gray-400 hover:text-[#00B894] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#00B894] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/departments" className="text-gray-400 hover:text-[#00B894] transition">
                  Departments
                </a>
              </li>
              <li>
                <a href="/doctors" className="text-gray-400 hover:text-[#00B894] transition">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#00B894] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-gray-400 hover:text-[#00B894] transition">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Departments</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Cardiology</li>
              <li className="text-gray-400">Orthopedics</li>
              <li className="text-gray-400">Neurology</li>
              <li className="text-gray-400">Gynecology</li>
              <li className="text-gray-400">Pediatrics</li>
              <li className="text-gray-400">General Medicine</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Plot No. 1583/2952,Near Talpatia Chowk, Jharsuguda, Odisha-768204
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>Emergency: +91 9827973991</div>
                  <div>Appointments: +91 9827973991</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-1" />
                <a href="mailto:info@asquarehospital.in" className="text-gray-400 text-sm hover:text-[#00B894] transition">
                  Asquarehospital@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 A Square Multispeciality Hospital. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Made by UDM Techno for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
