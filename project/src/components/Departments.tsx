import { departmentsData } from '../data/staticData';
import { Heart, Bone, Brain, Baby, Smile, Stethoscope, Ear, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Bone,
  Brain,
  Baby,
  Smile,
  Stethoscope,
  Ear,
  Sparkles,
};

export function Departments() {
  const departments = departmentsData;

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Specialities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Healthcare</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of medical specialities with experienced doctors and modern equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => {
            const IconComponent = iconMap[dept.icon] || Stethoscope;
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
