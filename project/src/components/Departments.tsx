import { Heart, Baby, Stethoscope, Scissors, Bone, User, Activity, Leaf } from 'lucide-react';

const specialities = [
  {
    id: 1,
    icon: Heart,
    name: 'Gynecology & Obstetrics',
    description: "Women's health, pregnancy care, normal delivery, painless delivery, high-risk pregnancy management, and infertility treatment.",
  },
  {
    id: 2,
    icon: Baby,
    name: 'Maternity Care',
    description: 'Safe motherhood services with modern labour room and postnatal care.',
  },
  {
    id: 3,
    icon: Stethoscope,
    name: 'General Medicine',
    description: 'Diagnosis and treatment for fever, infections, diabetes, hypertension, and other medical conditions.',
  },
  {
    id: 4,
    icon: Scissors,
    name: 'General Surgery',
    description: 'Minor and major surgical procedures with modern operation theatre facilities.',
  },
  {
    id: 5,
    icon: Bone,
    name: 'Orthopedics',
    description: 'Bone, joint, fracture, arthritis, and trauma care.',
  },
  {
    id: 6,
    icon: User,
    name: 'Paediatrics',
    description: 'Complete healthcare services for newborns, infants, children, and adolescents.',
  },
  {
    id: 7,
    icon: Activity,
    name: 'Advanced NICU',
    description: 'Specialized intensive care for premature and critically ill newborn babies.',
  },
  {
    id: 8,
    icon: Leaf,
    name: 'Fertility Care',
    description: 'Consultation and advanced solutions for infertility and reproductive health.',
  },
];

export function Departments() {
  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Specialities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Healthcare</span> Services
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of medical specialities with experienced doctors and modern equipment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {specialities.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-[#0077B6] to-[#00B894] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-20 h-20 text-white/20 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-[#0077B6]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-[#0077B6] transition">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
