import { HealthPackages } from '../components/HealthPackages';

const services = [
  {
    name: 'Gynecology & Obstetrics Services',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: "Comprehensive women's health care including pregnancy consultations, normal and painless delivery, cesarean section, high-risk pregnancy management, and infertility treatment. Our experienced gynecologists provide compassionate support at every stage of a woman's health journey.",
  },
  {
    name: 'Maternity Packages',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Affordable all-inclusive maternity care packages covering antenatal check-ups, safe delivery, and postnatal support. Designed to ensure comfort and safety for both mother and baby, our packages offer quality care without financial stress.',
  },
  {
    name: 'General Medicine',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Expert diagnosis and treatment for fever, diabetes, blood pressure, infections, seasonal illnesses, and chronic conditions. Our physicians deliver evidence-based, personalized care for both acute and long-term health needs.',
  },
  {
    name: 'General Surgery',
    image: 'https://images.pexels.com/photos/6129049/pexels-photo-6129049.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Minor and major surgical procedures performed in modern, fully equipped operation theatres with strict safety protocols. Our surgical team handles elective and emergency cases with precision and thorough post-operative care.',
  },
  {
    name: 'Orthopedic Care',
    image: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Specialized treatment for bone fractures, joint pain, arthritis, trauma, and spine-related conditions. Using modern implants and minimally invasive techniques, our orthopedic team restores mobility and improves quality of life.',
  },
  {
    name: 'Paediatric Care',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Complete healthcare for newborns, infants, children, and adolescents including vaccinations, growth monitoring, and treatment for common childhood illnesses. Our pediatric team provides gentle, family-centered care for every young patient.',
  },
  {
    name: 'Advanced NICU Services',
    image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'State-of-the-art neonatal intensive care unit for premature and critically ill newborns, equipped with advanced monitoring and life-support systems. Our neonatology team ensures round-the-clock specialized attention for the most vulnerable patients.',
  },
  {
    name: 'Fertility & IVF Consultation',
    image: 'https://images.pexels.com/photos/5207068/pexels-photo-5207068.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Expert fertility consultations and advanced reproductive treatment options for couples facing infertility challenges. Our specialists provide compassionate, evidence-based guidance to help families achieve their dream of parenthood.',
  },
  {
    name: 'Diagnostics & Imaging',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    <div className="pt-36 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services combining expert doctors, advanced technology, and compassionate care for every patient.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-10 mb-16 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services designed to meet the medical needs of every family. Our hospital combines expert doctors, advanced technology, and compassionate care to ensure the best treatment experience for all patients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to offering reliable, affordable, and high-quality healthcare services with a patient-first approach. From routine check-ups to specialized treatments, our team is dedicated to keeping you and your loved ones healthy.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[370px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-green-50 text-[#00B894] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  Service
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{service.name}</h2>
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
