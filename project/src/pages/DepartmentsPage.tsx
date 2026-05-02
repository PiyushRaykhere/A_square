const departments = [
  {
    name: 'Obstetrics & Gynaecology',
    image: 'https://static.businessworld.in/what-is-ivf_20240726194110_ogImage_41.jpg',
    content: 'Our Obstetrics & Gynaecology department is led by experienced specialists dedicated to women\'s health at every stage of life. We provide comprehensive maternity care from pre-natal consultations through safe delivery and post-natal recovery. Our unit is equipped with a fully functional labour room, NICU support, and advanced fetal monitoring systems. We manage high-risk pregnancies with utmost care and clinical precision. Gynaecological concerns including PCOS, endometriosis, and menstrual disorders are handled with sensitivity and modern treatment protocols. We are committed to ensuring safe motherhood and healthy outcomes for both mother and child.',
  },
  {
    name: 'Medicine',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'The Department of Medicine at A Square Hospital provides expert diagnosis and management of a broad spectrum of adult illnesses. Our physicians are experienced in treating conditions related to the heart, lungs, liver, kidneys, and endocrine system. We offer both outpatient and inpatient services supported by advanced diagnostic imaging and laboratory investigations. Chronic disease management, including diabetes, hypertension, and thyroid disorders, is handled with personalized care plans. Our team works collaboratively across specialities to ensure holistic patient outcomes. With a patient-first approach, we combine evidence-based medicine with compassionate bedside care.',
  },
  {
    name: 'Surgery',
    image: 'https://dinbandhuhospital.com/assets/img/department-inner/general-surgery-department/general-surgery-department-01.jpg',
    content: 'A Square Hospital\'s Surgery department is equipped with modern modular operation theatres designed to support a wide range of surgical procedures. Our general surgeons are skilled in both elective and emergency surgeries including appendectomies, hernia repairs, gallbladder removals, and abdominal procedures. Laparoscopic and minimally invasive techniques are employed wherever applicable to reduce recovery time and post-operative discomfort. Pre-operative and post-operative care is supervised by a dedicated nursing team. We maintain strict infection control and sterile protocols across all surgical suites. Patient safety and surgical precision are our foremost priorities.',
  },
  {
    name: 'Orthopedics',
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Our Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions affecting bones, joints, muscles, and tendons. We manage fractures, ligament injuries, arthritis, and spine-related disorders with both surgical and non-surgical approaches. The department is supported by digital X-ray facilities and physiotherapy services for comprehensive rehabilitation. Joint replacement surgeries and trauma care are performed by experienced orthopedic surgeons. We focus on restoring mobility and improving quality of life for patients of all ages. Our orthopedic team works closely with physiotherapists to ensure complete recovery and long-term musculoskeletal health.',
  },
  {
    name: 'Pediatrics',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWeyuB1hQ9EytZYg5sFTBrKEcsXOhIz8RHg&s',
    content: 'The Pediatrics department at A Square Hospital provides specialized medical care for infants, children, and adolescents. Our pediatricians are trained to address the unique health needs of young patients with warmth and expertise. We offer newborn care, vaccination programs, nutritional counseling, and management of childhood illnesses including respiratory infections, fever, and gastrointestinal conditions. Our NICU is equipped to handle premature births and critically ill newborns. We place great importance on developmental monitoring and parental guidance. A child-friendly environment ensures that young patients feel comfortable and safe during their visit.',
  },
  {
    name: 'Anesthesia',
    image: 'https://drpksahahospital.com/wp-content/uploads/2022/06/OT-6-1-1-1024x683.jpg',
    content: 'The Department of Anesthesia plays a vital role in supporting all surgical and procedural interventions at A Square Hospital. Our qualified anesthesiologists provide safe and effective anesthesia care for a wide variety of operations, from routine procedures to complex emergency surgeries. Pre-anesthetic assessments are conducted thoroughly to evaluate patient fitness and minimize risks. We utilize modern anesthetic agents and monitoring equipment to ensure patient comfort and safety throughout every procedure. Pain management services extend beyond the operating theatre to include post-operative pain control. Our team is available round the clock to support emergency surgical cases.',
  },
];

export function DepartmentsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Our Specialities</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Departments</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical specialities with experienced doctors and modern facilities to serve all your healthcare needs.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-20">
          {departments.map((dept, index) => (
            <div
              key={dept.name}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-48 sm:h-[370px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-blue-50 text-[#0077B6] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  Department
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">{dept.name}</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
                <p className="text-gray-600 leading-relaxed text-base">{dept.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
