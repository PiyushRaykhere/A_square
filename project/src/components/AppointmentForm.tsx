import { useState, useEffect } from 'react';
import { Calendar, Send } from 'lucide-react';
import { departmentsData, doctorsData, Doctor } from '../data/staticData';

export function AppointmentForm() {
  const departments = departmentsData;
  const doctors = doctorsData;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    patient_name: '',
    patient_email: '',
    patient_phone: '',
    department_id: '',
    doctor_id: '',
    appointment_date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const doctor = doctors.find(d => d.id === formData.doctor_id);
    const dept = departments.find(d => d.id === formData.department_id);

    const phoneNumber = '919827973991';
    const message = `Hello ASquare Hospital,\n\nI would like to book an appointment:\n👨‍⚕️ *Doctor:* ${doctor?.name || ''}\n🏥 *Department:* ${dept?.name || ''}\n📅 *Date:* ${formData.appointment_date}\n\n*Patient Details:* \n👤 *Name:* ${formData.patient_name}\n📱 *Phone:* ${formData.patient_phone}\n✉️ *Email:* ${formData.patient_email}\n\nPlease confirm my booking.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Simulate loading for better UX before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
      setSuccess(true);
      
      setFormData({
        patient_name: '',
        patient_email: '',
        patient_phone: '',
        department_id: '',
        doctor_id: '',
        appointment_date: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Easy Booking
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Book Your <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Appointment</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600">
            Fill out the form below and we'll confirm your appointment shortly
          </p>
        </div>

        {success && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg">
            <strong>Success!</strong> Your appointment has been booked. We'll contact you soon for confirmation.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="patient_email"
                value={formData.patient_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="patient_phone"
                value={formData.patient_phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>
              <select
                name="department_id"
                value={formData.department_id}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Doctor *
              </label>
              <select
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
              >
                <option value="">Select Doctor</option>
                {doctors.map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                min={minDate}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto mx-auto bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition transform hover:scale-105 font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                'Booking...'
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  Confirm Appointment
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
