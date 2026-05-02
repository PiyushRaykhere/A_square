import { Calendar, UserSearch, MessageCircle, FileText, Clipboard, Heart } from 'lucide-react';

const quickLinks = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule a consultation',
    href: '#appointment',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: UserSearch,
    title: 'Find a Doctor',
    description: 'Search our specialists',
    href: '#doctors',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: MessageCircle,
    title: 'Need Opinion',
    description: 'Get expert advice',
    href: '#contact',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FileText,
    title: 'Health Check-up',
    description: 'View packages',
    href: '#health-packages',
    color: 'from-orange-500 to-orange-600',
  },
  
  {
    icon: Heart,
    title: 'Emergency',
    description: '24/7 Available',
    href: 'tel:+917312345678',
    color: 'from-red-500 to-red-600',
  },
];

export function QuickAccess() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group bg-white rounded-xl p-3 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition mx-auto`}>
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-800 text-center mb-1">
                  {link.title}
                </h3>
                <p className="text-xs text-gray-500 text-center hidden sm:block">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
