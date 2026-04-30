import { Stethoscope, Baby, Pill, Scissors, Bone, Heart, Activity, Leaf, Microscope, Ambulance, ShieldCheck } from 'lucide-react';

const specialities = [
  {
    icon: Heart,
    title: 'Gynecology & Obstetrics',
    description: "Women's health, pregnancy care, normal delivery, painless delivery, high-risk pregnancy management, and infertility treatment.",
  },
  {
    icon: Baby,
    title: 'Maternity Care',
    description: 'Safe motherhood services with modern labour room and postnatal care.',
  },
  {
    icon: Pill,
    title: 'General Medicine',
    description: 'Diagnosis and treatment for fever, infections, diabetes, hypertension, and other medical conditions.',
  },
  {
    icon: Scissors,
    title: 'General Surgery',
    description: 'Minor and major surgical procedures with modern operation theatre facilities.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Bone, joint, fracture, arthritis, and trauma care.',
  },
  {
    icon: Stethoscope,
    title: 'Paediatrics',
    description: 'Complete healthcare services for newborns, infants, children, and adolescents.',
  },
  {
    icon: Activity,
    title: 'Advanced NICU',
    description: 'Specialized intensive care for premature and critically ill newborn babies.',
  },
  {
    icon: Leaf,
    title: 'Fertility Care',
    description: 'Consultation and advanced solutions for infertility and reproductive health.',
  },
  {
    icon: Microscope,
    title: 'Diagnostics',
    description: 'Ultrasound, pathology, and routine health investigations.',
  },
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: 'Prompt medical attention for urgent and critical cases.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Health Check-ups',
    description: 'Routine screenings and wellness programs for better health.',
  },
];

export function Specialties() {
  return (
    <div className="pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Our Specialities</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
            Advanced Care at{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              A Square Hospital
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-6" />
        </div>

        {/* Intro */}
        <div className="bg-blue-50 rounded-2xl p-10 mb-16 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At A Square Hospital, Jharsuguda, we are committed to delivering quality healthcare with compassion, professionalism, and modern medical expertise. Backed by experienced doctors, skilled nursing staff, and advanced facilities, we provide trusted treatment solutions for individuals and families. Our focus is on accurate diagnosis, effective treatment, patient safety, and complete care under one roof.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since our establishment, we have been dedicated to serving the community with ethical healthcare practices and personalized medical attention. Our team combines clinical experience with the latest medical technology to ensure the best possible outcomes for every patient.
          </p>
        </div>

        {/* Specialities heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Major{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              Specialities
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mt-4" />
        </div>

        {/* Specialities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specialities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded" />
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="text-center bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded-2xl p-10">
          <p className="text-white text-xl font-semibold">
            At A Square Hospital, we continue to grow with one promise —
          </p>
          <p className="text-white text-2xl font-bold mt-2">
            Compassionate Care for Every Life.
          </p>
        </div>

      </div>
    </div>
  );
}
