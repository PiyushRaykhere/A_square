import hospital from '../assets/hospital.jpeg'
import doctor from '../assets/doctor_babita.png'


//imageGallery
import frontView from '../assets/imageGallery/frontView.png'
import reception from '../assets/imageGallery/receptioncounter.png'
import mainEntry from '../assets/imageGallery/mainEntry.png'
import room from '../assets/imageGallery/executiveroom.png'
import newMOT from '../assets/imageGallery/newMOT.png'
import newVIPRoom from '../assets/imageGallery/newVIPRoom.png'
import nicu from '../assets/imageGallery/nicu.png'
import sideView from '../assets/imageGallery/sideView.png'
import area from '../assets/imageGallery/receprionArea.png'



const coreValues = [
  { icon: '🏥', title: 'Patient First', description: 'Every decision we make centers on the well-being, dignity, and safety of our patients.' },
  { icon: '🔬', title: 'Clinical Excellence', description: 'We uphold the highest standards of medical practice through continuous learning and innovation.' },
  { icon: '🤝', title: 'Compassionate Care', description: 'We treat every patient and family with empathy, respect, and genuine human warmth.' },
  { icon: '🛡️', title: 'Integrity', description: 'Honesty and transparency guide every interaction, from diagnosis to billing.' },
  { icon: '🌐', title: 'Accessibility', description: 'We strive to make quality healthcare available to all sections of the community.' },
  { icon: '⚙️', title: 'Innovation', description: 'We invest in modern technology and protocols to deliver the best possible outcomes.' },
];

const galleryImages = [
  frontView, reception, mainEntry, room, newMOT, newVIPRoom, nicu, sideView, area
];


export function About() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center mb-12 sm:mb-24">
          <div className="w-full md:w-1/2">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">A Square</span> Hospital
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed ">
              Welcome to A Square Hospital, Jharsuguda, a trusted destination for quality healthcare, compassionate treatment, and advanced medical services. We are committed to delivering patient-centered care with modern facilities, experienced doctors, and a dedicated healthcare team.
              At A Square Hospital, we believe that every patient deserves personalized attention, timely treatment, and complete support throughout their healthcare journey. Our hospital is equipped with modern medical technology and infrastructure to provide safe, efficient, and reliable care for patients of all ages.
              We specialize in a wide range of healthcare services, including Gynecology & Obstetrics, Maternity Care, General Medicine, General Surgery, Orthopedics, Paediatrics, Advanced NICU, Fertility Care, Diagnostics, Emergency Care, and Preventive Health Services. Our focus is to ensure the highest standards of treatment while maintaining warmth, trust, and comfort for every patient.
              Led by experienced medical professionals, A Square Hospital has earned the confidence of families in Jharsuguda and nearby areas through ethical practice, affordable healthcare, and excellent patient outcomes
              .
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

        {/* director section */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start mb-12 sm:mb-24">
          <div className="w-full md:w-[340px] flex-shrink-0">
            <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100">
              <img
                src={doctor}
                alt="Dr. Babita Ramani"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Meet Our Founder & Director</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 text-gray-800">
              Dr. <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Babita Ramani</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Dr. Babita Ramani</strong> is the proud Founder & Director of A Square Hospital, Jharsuguda, and a renowned name in women’s healthcare. She is a highly experienced Senior Obstetrician & Gynecologist with more than 15 years of dedicated service in the medical field.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                She holds an MD in Obstetrics & Gynecology (O&G), FICOG, and has completed an IVF Fellowship from KIEL, Germany. She also served as Ex-Senior Resident at VIMSAR, Burla, gaining valuable clinical expertise in advanced patient care. Dr. Babita Ramani is a skilled Laparoscopic Surgeon, Ultrasonologist, and Fertility Expert, known for offering modern, compassionate, and personalized treatment to women at every stage of life.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beyond her medical profession, Dr. Babita Ramani is also a well-known social worker, actively involved in community welfare, women’s health awareness, and social development initiatives.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Under her visionary leadership, A Square Hospital continues to provide trusted, affordable, and advanced healthcare services with the mission of improving lives and ensuring better health for every family.
              </p>
            </div>
          </div>
        </div>


        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-24">
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#0077B6] rounded-xl flex items-center justify-center text-white text-xl font-bold">M</div>
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <div className="w-10 h-1 bg-[#0077B6] rounded" />
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, high-quality healthcare that improves the lives of our patients and the community we serve. We are committed to delivering compassionate, evidence-based medical care with the latest technology, ensuring every patient receives safe, timely, and effective treatment regardless of their background or circumstance.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 sm:p-10 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#00B894] rounded-xl flex items-center justify-center text-white text-xl font-bold">V</div>
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <div className="w-10 h-1 bg-[#00B894] rounded" />
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred healthcare provider in the region, recognized for clinical excellence, innovation, and compassionate care. We envision a future where every individual in Jharsuguda and surrounding areas has access to world-class medical services delivered with dignity, integrity, and a genuine commitment to their well-being.
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
              Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-12 mx-auto" />
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 mb-12 flex flex-col gap-4">
            <p className="text-gray-600 leading-relaxed">A Square Hospital, Jharsuguda was established in March 2025 with a vision to provide trusted, affordable, and advanced healthcare services to the people of Jharsuguda and nearby communities. Since its beginning, our mission has been to deliver compassionate treatment, modern medical care, and patient-focused services under one roof.</p>
            <p className="text-gray-600 leading-relaxed">From the day it opened, A Square Hospital has continuously worked toward improving healthcare standards by bringing experienced doctors, advanced medical technology, and quality treatment facilities closer to the community. The hospital is committed to earning the trust of families through ethical practice, successful patient care, and dedication to excellence.</p>
            <p className="text-gray-600 leading-relaxed">Today, A Square Hospital is growing as a center of healthcare excellence, serving every patient with care, dignity, and professionalism while continuing the journey toward a healthier tomorrow.</p>
          </div>

        </div>

        {/* Photo Strip */}
        <h1 className='text-center text-3xl sm:text-4xl font-bold mb-4'>Image <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Gallery</span></h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-10 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <div className="relative w-full h-64 bg-gray-100">
                <img
                  src={img}
                  alt={`Hospital facility ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0077B6]/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
