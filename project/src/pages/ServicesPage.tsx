import { HealthPackages } from '../components/HealthPackages';
import nicu from '../assets/imageGallery/nicu.png' 

const services = [
  {
    name: 'Gynecology & Obstetrics Services',
    image: 'https://jaiclinichospital.com/wp-content/uploads/2024/07/Gynecology-and-Obstetrics.png',
    content: "Comprehensive women's health care including pregnancy consultations, normal and painless delivery, cesarean section, high-risk pregnancy management, and infertility treatment. Our experienced gynecologists provide compassionate support at every stage of a woman's health journey.",
  },
  {
    name: 'Maternity Packages',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Affordable all-inclusive maternity care packages covering antenatal check-ups, safe delivery, and postnatal support. Designed to ensure comfort and safety for both mother and baby, our packages offer quality care without financial stress.',
  },
  {
    name: 'General Medicine',
    image: 'data:image/jpeg;base64,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',
    content: 'Expert diagnosis and treatment for fever, diabetes, blood pressure, infections, seasonal illnesses, and chronic conditions. Our physicians deliver evidence-based, personalized care for both acute and long-term health needs.',
  },
  {
    name: 'General Surgery',
    image: 'https://generalhospitalernakulam.in/wp-content/uploads/2023/09/General-Surgery_2.png',
    content: 'Minor and major surgical procedures performed in modern, fully equipped operation theatres with strict safety protocols. Our surgical team handles elective and emergency cases with precision and thorough post-operative care.',
  },
  {
    name: 'Orthopedic Care',
    image: 'https://vishwarajhospital.com/wp-content/uploads/2023/08/Ortho-1024x576.jpg',
    content: 'Specialized treatment for bone fractures, joint pain, arthritis, trauma, and spine-related conditions. Using modern implants and minimally invasive techniques, our orthopedic team restores mobility and improves quality of life.',
  },
  {
    name: 'Paediatric Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_tRSG1XLBCMFMrUkOb9kojsdXDnD_1CtQQ&s',
    content: 'Complete healthcare for newborns, infants, children, and adolescents including vaccinations, growth monitoring, and treatment for common childhood illnesses. Our pediatric team provides gentle, family-centered care for every young patient.',
  },
  {
    name: 'Advanced NICU Services',
    image: nicu ,
    content: 'State-of-the-art neonatal intensive care unit for premature and critically ill newborns, equipped with advanced monitoring and life-support systems. Our neonatology team ensures round-the-clock specialized attention for the most vulnerable patients.',
  },
  {
    name: 'Fertility & IVF Consultation',
    image: 'https://static.businessworld.in/what-is-ivf_20240726194110_ogImage_41.jpg',
    content: 'Expert fertility consultations and advanced reproductive treatment options for couples facing infertility challenges. Our specialists provide compassionate, evidence-based guidance to help families achieve their dream of parenthood.',
  },
  {
    name: 'Diagnostics & Imaging',
    image: 'https://media.fortuneindia.com/fortune-india/import/2021-11/97a02df0-297e-4a5a-b5c8-4669a54c992b/medical_equipent.jpg?rect=0,0,4547,2558&w=640&auto=format,compress&q=80',
    content: 'Comprehensive diagnostic services including ultrasound imaging, pathology testing, and routine health investigations. Accurate and timely results support our doctors in making precise diagnoses and effective treatment decisions.',
  },
  {
    name: 'Emergency & Critical Care',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: "24/7 emergency medical support for urgent and life-threatening conditions with rapid response teams and critical care specialists. Our emergency unit is always ready to provide immediate, life-saving intervention whenever it's needed most.",
  },
];

export function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services combining expert doctors, advanced technology, and compassionate care for every patient.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 sm:p-8 md:p-10 mb-10 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services designed to meet the medical needs of every family. Our hospital combines expert doctors, advanced technology, and compassionate care to ensure the best treatment experience for all patients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to offering reliable, affordable, and high-quality healthcare services with a patient-first approach. From routine check-ups to specialized treatments, our team is dedicated to keeping you and your loved ones healthy.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 sm:h-[370px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-green-50 text-[#00B894] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  Service
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">{service.name}</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
                <p className="text-gray-600 leading-relaxed text-base">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <HealthPackages />
      </div>
    </div>
  );
}
