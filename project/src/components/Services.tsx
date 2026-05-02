import { Ambulance, Shield, Video, FileText, CreditCard, Clock } from 'lucide-react';

const services = [
  {
    icon: Ambulance,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency care with fully equipped ambulances and trained paramedics.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Insurance & TPA',
    description: 'Cashless treatment with all major insurance providers and TPA partners.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'Online Consultation',
    description: 'Video consultation with our expert doctors from the comfort of your home.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FileText,
    title: 'Health Packages',
    description: 'Comprehensive health checkup packages at affordable prices for preventive care.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Multiple payment options including EMI facilities for expensive treatments.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'OPD Services',
    description: 'Walk-in OPD services from 9 AM to 5 PM on weekdays and morning hours on weekends.',
    color: 'from-teal-500 to-green-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Patient Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Care Services</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full range of healthcare services designed for your convenience and well-being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded-3xl p-6 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Need Emergency Medical Care?
          </h3>
          <p className="text-base sm:text-xl mb-5 sm:mb-8 opacity-90">
            Our emergency department is open 24 hours a day, 7 days a week
          </p>
          <a
            href="tel:+917312345678"
            className="inline-block bg-white text-[#0077B6] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Call Emergency: +91 731-2345-678
          </a>
        </div>
      </div>
    </section>
  );
}
