import hospital from '../assets/hospital.jpeg'

const coreValues = [
  { icon: '🏥', title: 'Patient First', description: 'Every decision we make centers on the well-being, dignity, and safety of our patients.' },
  { icon: '🔬', title: 'Clinical Excellence', description: 'We uphold the highest standards of medical practice through continuous learning and innovation.' },
  { icon: '🤝', title: 'Compassionate Care', description: 'We treat every patient and family with empathy, respect, and genuine human warmth.' },
  { icon: '🛡️', title: 'Integrity', description: 'Honesty and transparency guide every interaction, from diagnosis to billing.' },
  { icon: '🌐', title: 'Accessibility', description: 'We strive to make quality healthcare available to all sections of the community.' },
  { icon: '⚙️', title: 'Innovation', description: 'We invest in modern technology and protocols to deliver the best possible outcomes.' },
];

export function About() {
  return (
    <div className="pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-800">
              A Square <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Hospital</span>
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed">
              A Square Hospital is a leading multi-speciality hospital in Jharsuguda, providing advanced and compassionate healthcare services under one roof. We offer 24/7 emergency services, ICU and NICU care, modern modular operation theatres, Pharmacy and advanced diagnostic facilities. Our expert doctors specialize in Gynaecology, Maternity Care, Paediatrics, Orthopaedics, General Surgery, and General Medicine. With experienced medical staff, advanced technology, and patient-friendly care, A Square Hospital is recognized as one of the best hospitals in Jharsuguda for safe, reliable, and quality treatment.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
            <img
              src={hospital}
              alt="A Square Hospital"
              className="w-full h-110 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-blue-50 rounded-2xl p-10 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#0077B6] rounded-xl flex items-center justify-center text-white text-xl font-bold">M</div>
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <div className="w-10 h-1 bg-[#0077B6] rounded" />
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, high-quality healthcare that improves the lives of our patients and the community we serve. We are committed to delivering compassionate, evidence-based medical care with the latest technology, ensuring every patient receives safe, timely, and effective treatment regardless of their background or circumstance.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-10 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#00B894] rounded-xl flex items-center justify-center text-white text-xl font-bold">V</div>
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <div className="w-10 h-1 bg-[#00B894] rounded" />
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred healthcare provider in the region, recognized for clinical excellence, innovation, and compassionate care. We envision a future where every individual in Jharsuguda and surrounding areas has access to world-class medical services delivered with dignity, integrity, and a genuine commitment to their well-being.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
              Our Core <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-3"
              >
                <div className="text-3xl">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-800">{value.title}</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded" />
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hospital facility"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical team"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Patient care"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
