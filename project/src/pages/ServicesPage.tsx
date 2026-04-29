import { HealthPackages } from '../components/HealthPackages';

const services = [
  {
    name: 'Obstetrics & Gynaecology',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'We offer a full spectrum of obstetric and gynaecological treatments including normal and caesarean deliveries, management of ectopic pregnancies, and treatment of uterine fibroids. Our team performs diagnostic and operative laparoscopies, hysteroscopies, and colposcopies. Fertility consultations and antenatal care packages are available for expecting mothers. We provide specialized treatment for recurrent pregnancy loss, ovarian cysts, and cervical conditions. Postpartum care and family planning services are also integral parts of our offering. All procedures are carried out in a sterile, well-equipped environment by trained specialists.',
  },
  {
    name: 'Surgery',
    image: 'https://images.pexels.com/photos/6129049/pexels-photo-6129049.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Our surgical services cover a comprehensive range of elective and emergency procedures performed in state-of-the-art modular operation theatres. We specialize in laparoscopic cholecystectomy, appendectomy, hernia repair, and colorectal surgeries. Soft tissue surgeries, abscess drainage, and minor procedures are handled as day-care services. Pre-operative workup includes thorough investigations and anesthesia consultation to ensure patient readiness. Post-operative recovery is managed with dedicated nursing care and pain management protocols. We cater to patients requiring both planned surgical interventions and urgent emergency operations.',
  },
  {
    name: 'Orthopedics',
    image: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Our orthopedic services include fracture fixation, joint replacement, and ligament reconstruction for patients of all age groups. We perform closed and open reduction of fractures using implants, plates, and intramedullary nails. Knee and hip replacement surgeries are offered with modern prosthetics and rehabilitation support. Arthroscopic procedures for shoulder and knee injuries are performed with precision using minimally invasive techniques. Sports injury management, spine surgeries, and deformity corrections are also available. Post-operative physiotherapy is integrated into our care plan to restore full function and mobility.',
  },
  {
    name: 'Pediatrics',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Our pediatric services are designed to provide complete healthcare for children from birth through adolescence. We offer newborn stabilization, NICU care for premature and critically ill infants, and jaundice management under phototherapy. Immunization as per the national schedule and catch-up vaccination programs are available. We treat common childhood conditions including fever, respiratory illness, diarrhea, malnutrition, and skin infections. Growth monitoring, developmental assessments, and nutritional counseling are provided at every visit. Our pediatric team is trained to communicate with both children and parents with sensitivity and clarity.',
  },
  {
    name: 'General Medicine',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'General Medicine services at A Square Hospital encompass diagnosis, treatment, and long-term management of a wide array of adult health conditions. We manage acute illnesses such as infections, fever, pneumonia, and gastroenteritis alongside chronic conditions like diabetes, hypertension, and asthma. Our physicians provide comprehensive health assessments and preventive care consultations. We coordinate with specialists across departments to deliver integrated care for complex multi-system disorders. Inpatient ward facilities are available for patients requiring close observation and monitored treatment. All medical decisions are evidence-based and tailored to the individual patient\'s profile.',
  },
  {
    name: 'Modular OT',
    image: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'A Square Hospital\'s Modular Operation Theatres are built to international standards, ensuring the highest levels of sterility, safety, and surgical efficiency. Each OT is fitted with advanced surgical lighting, patient monitoring systems, and anesthesia workstations. The laminar airflow technology maintains a clean, contaminant-free surgical environment at all times. Our OTs support a variety of surgical disciplines including general surgery, orthopedics, gynaecology, and emergency operations. A dedicated scrub team and instrument sterilization unit ensure readiness for back-to-back procedures. Emergency OT availability round the clock allows us to respond immediately to trauma and critical cases.',
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
            Advanced medical treatments and procedures delivered by specialists across multiple disciplines.
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
                  className="w-full h-[370px] object-fit hover:scale-105 transition-transform duration-500"
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
