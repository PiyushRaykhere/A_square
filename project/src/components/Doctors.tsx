import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, X, Send, User, GraduationCap, Stethoscope, ChevronRight } from 'lucide-react';
import { doctorsData, departmentsData, DoctorExtended, Department } from '../data/staticData';

interface DoctorsProps {
  limit?: number;
  showViewAll?: boolean;
}

type DoctorWithDept = DoctorExtended & { department: Department | null };

export function Doctors({ limit, showViewAll }: DoctorsProps) {
  const doctors: DoctorWithDept[] = doctorsData.map(doc => ({
    ...doc,
    department: departmentsData.find(d => d.id === doc.department_id) || null
  })).slice(0, limit || doctorsData.length);

  const [selectedDoctor, setSelectedDoctor] = useState<DoctorWithDept | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [formData, setFormData] = useState({ patientName: '', patientPhone: '' });

  const handleBookNow = (doctor: DoctorWithDept) => {
    setSelectedDoctor(doctor);
    setIsProfileOpen(false);
    setIsBookingOpen(true);
  };

  const handleViewDetails = (doctor: DoctorWithDept) => {
    setSelectedDoctor(doctor);
    setIsProfileOpen(true);
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor) return;
    const phoneNumber = '919827973991';
    const message = `Hello ASquare Hospital,\n\nI would like to book an appointment with:\n👨‍⚕️ *Doctor:* ${selectedDoctor.name}\n🏥 *Department:* ${selectedDoctor.department?.name || 'General'}\n\n*Patient Details:* \n👤 *Name:* ${formData.patientName}\n📱 *Phone:* ${formData.patientPhone}\n\nPlease confirm my booking.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setIsBookingOpen(false);
    setFormData({ patientName: '', patientPhone: '' });
  };

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Expert Doctors</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified and experienced medical professionals dedicated to your health
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#0077B6] to-[#00B894] overflow-hidden">
                <img
                  src={doctor.image_url}
                  alt={doctor.name}
                  className="w-full h-full object-contain object-top opacity-90 group-hover:scale-105 transition duration-500"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                {doctor.designation && (
                  <p className="text-[#0077B6] font-medium text-sm mb-1">{doctor.designation}</p>
                )}
                <p className="text-gray-600 font-medium mb-2 text-sm">{doctor.qualification}</p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {Array.isArray(doctor.specialization) ? doctor.specialization.join(', ') : doctor.specialization}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleViewDetails(doctor)}
                    className="inline-flex items-center gap-1.5 text-[#0077B6] border border-[#0077B6] px-4 py-2.5 rounded-lg hover:bg-[#0077B6] hover:text-white transition-all duration-200 font-medium text-sm"
                  >
                    <User className="w-4 h-4" />
                    View Details
                  </button>
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

      {/* Doctor Profile Modal */}
      {isProfileOpen && selectedDoctor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] p-6 text-white relative flex-shrink-0">
              <button
                onClick={() => setIsProfileOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mb-1">Doctor Profile</p>
              <h3 className="text-2xl font-bold">{selectedDoctor.name}</h3>
              {selectedDoctor.designation && (
                <p className="text-white/80 text-sm mt-1">{selectedDoctor.designation}</p>
              )}
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1">
              <div className="flex flex-col sm:flex-row gap-0">
                {/* Image */}
                <div className="sm:w-48 flex-shrink-0 bg-gray-50">
                  <img
                    src={selectedDoctor.image_url}
                    alt={selectedDoctor.name}
                    className="w-full h-56 sm:h-full object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 p-6 flex flex-col gap-5">
                  {/* Department badge */}
                  <div>
                    <span className="inline-block bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {selectedDoctor.department?.name || 'General'}
                    </span>
                  </div>

                  {/* Qualification */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#0077B6]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Qualification</p>
                      <p className="text-gray-800 font-medium text-sm">{selectedDoctor.qualification}</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#00B894]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Experience</p>
                      <p className="text-gray-800 font-medium text-sm">{selectedDoctor.experience_years}+ Years</p>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-5 h-5 text-[#0077B6]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Specializations</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(Array.isArray(selectedDoctor.specialization) ? selectedDoctor.specialization : [selectedDoctor.specialization]).map((s) => (
                          <span key={s} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                            <ChevronRight className="w-3 h-3 text-[#00B894]" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              {selectedDoctor.bio_full && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-100 mb-5" />
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">About</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedDoctor.bio_full}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-gray-100 flex-shrink-0 flex justify-end">
              <button
                onClick={() => handleBookNow(selectedDoctor)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingOpen && selectedDoctor && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] p-6 text-white relative">
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold">Book Appointment</h3>
              <p className="text-white/80 text-sm">Fill in your details to book via WhatsApp</p>
            </div>

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
