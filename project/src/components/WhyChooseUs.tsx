import { UserCheck, Building2, Baby, Wallet, Headphones as HeadphonesIcon, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Experienced & Caring Doctors',
    description: 'Skilled doctors delivering compassionate, personalized care to every patient.',
  },
  {
    icon: Building2,
    title: 'Modern Medical Facilities',
    description: 'Equipped with advanced infrastructure to support safe, efficient treatments.',
  },
  {
    icon: Baby,
    title: 'Advanced NICU & Child Care Services',
    description: 'Specialized neonatal and pediatric care for your little ones\' well-being.',
  },
  {
    icon: Wallet,
    title: 'Affordable Healthcare Services',
    description: 'Quality medical care designed to be accessible and budget-friendly for all.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Patient Support',
    description: 'Round-the-clock assistance ensuring patients receive timely help anytime.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Hygienic Environment',
    description: 'Strictly maintained cleanliness and safety standards throughout the hospital.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Why Patients Trust{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              A Square
            </span> {''}Hospital
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            At A_Square Hospital, Jharsuguda, your health is our priority, and your trust is our greatest strength
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
