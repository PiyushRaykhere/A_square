import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, X, Send } from 'lucide-react';
import { doctorsData, departmentsData, Doctor, Department } from '../data/staticData';

const fallbackPhotos = [
  'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
];

interface DoctorsProps {
  limit?: number;
  showViewAll?: boolean;
}

export function Doctors({ limit, showViewAll }: DoctorsProps) {
  const doctors = doctorsData.map(doc => ({
    ...doc,
    department: departmentsData.find(d => d.id === doc.department_id) || null
  })).slice(0, limit || doctorsData.length);

  const [selectedDoctor, setSelectedDoctor] = useState<(Doctor & { department: Department | null }) | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
  });

  const handleBookNow = (doctor: Doctor & { department: Department | null }) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor) return;

    const phoneNumber = '917312345678';
    const message = `Hello ASquare Hospital,\n\nI would like to book an appointment with:\n👨‍⚕️ *Doctor:* ${selectedDoctor.name}\n🏥 *Department:* ${selectedDoctor.department?.name || 'General'}\n\n*Patient Details:* \n👤 *Name:* ${formData.patientName}\n📱 *Phone:* ${formData.patientPhone}\n\nPlease confirm my booking.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setFormData({ patientName: '', patientPhone: '' });
  };

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Medical Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified and experienced medical professionals dedicated to your health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#0077B6] to-[#00B894] overflow-hidden">
                <img
                  src={doctor.image_url || fallbackPhotos[index % fallbackPhotos.length]}
                  alt={doctor.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1.5 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#00B894]" />
                    <span className="text-sm font-semibold text-gray-800">{doctor.experience_years}+ Years</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {doctor.department?.name || 'General'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{doctor.qualification}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {Array.isArray(doctor.specialization) ? doctor.specialization.join(', ') : doctor.specialization}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-end">
                  <button
                    onClick={() => handleBookNow(doctor)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition transform hover:scale-105 font-medium text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && doctorsData.length > (limit || 0) && (
          <div className="mt-12 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-8 py-3 rounded-full hover:shadow-lg transition transform hover:scale-105 font-medium text-lg"
            >
              View All Doctors
            </Link>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] p-6 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold">Book Appointment</h3>
              <p className="text-white/80 text-sm">Fill in your details to book via WhatsApp</p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppRedirect} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Doctor</label>
                <div className="w-full px-4 py-2.5 bg-gray-50 rounded-lg text-gray-800 font-medium border border-gray-100">
                  {selectedDoctor.name}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Department</label>
                <div className="w-full px-4 py-2.5 bg-gray-50 rounded-lg text-gray-800 font-medium border border-gray-100">
                  {selectedDoctor.department?.name || 'General Speciality'}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/10 outline-none transition"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/10 outline-none transition"
                  value={formData.patientPhone}
                  onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all transform active:scale-95 mt-4"
              >
                <Send className="w-5 h-5" />
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
