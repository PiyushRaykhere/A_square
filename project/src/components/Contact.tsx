import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Visit <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Our Hospital</span>
          </h2>
          <p className="text-sm sm:text-md text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out to us for appointments, emergencies, or general inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Plot No. 1583/2952, Khatta No. 263/347,<br />
                    Mouza Talpatia, Near Talpatia Chowk<br />
                    Jharsuguda, Odisha-768204
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {/* Appointments: <a href="tel:+917312345679" className="text-[#0077B6] font-medium hover:underline">+91 731-2345-679</a><br /> */}
                    General Inquiry: <a href="tel:+917312345680" className="text-[#0077B6] font-medium hover:underline">+91 9827973991</a><br />
                    Pathology no.: <a href="tel:+917312345678" className="text-[#0077B6] font-medium hover:underline">+91 8763009484</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    General: <a href="mailto:info@asquarehospital.in" className="text-[#0077B6] font-medium hover:underline">Asquarehospital@gmail.com</a><br />
                    {/* Appointments: <a href="mailto:appointments@asquarehospital.in" className="text-[#0077B6] font-medium hover:underline">appointments@asquarehospital.in</a><br />
                    Support: <a href="mailto:support@asquarehospital.in" className="text-[#0077B6] font-medium hover:underline">support@asquarehospital.in</a> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>OPD:</strong> Mon-Sat: 9:00 AM - 5:00 PM<br />
                    <strong>Emergency:</strong> 24/7 Available<br />
                    <strong>Lab:</strong> Mon-Sun: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden h-full min-h-[300px] sm:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.127991360071!2d84.02623607404391!3d21.92963047995476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e512677f90f1%3A0xe422d023fa28bf4d!2sA%20Square%20Hospital!5e0!3m2!1sen!2sin!4v1777446876389!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ASquare Hospital Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
