import { Package, Heart, UserCheck, Syringe, ShieldCheck, Building2 } from 'lucide-react';

const offers = [
  {
    icon: Package,
    title: 'Affordable Health Check-up Packages',
    description: 'Comprehensive health screenings at budget-friendly prices for every family.',
  },
  {
    icon: Heart,
    title: 'Maternity & Delivery Packages',
    description: 'Complete maternity care bundles for a safe and comfortable pregnancy journey.',
  },
  {
    icon: UserCheck,
    title: "Personalized Women's Health Programs",
    description: "Tailored health plans addressing every stage of a woman's healthcare needs.",
  },
  {
    icon: Syringe,
    title: 'Child Vaccination Plans',
    description: 'Structured immunization schedules to keep your child protected and healthy.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Health Screenings',
    description: 'Early detection programs designed to catch health issues before they progress.',
  },
  {
    icon: Building2,
    title: 'Compassionate Care with Modern Facilities',
    description: 'Advanced medical infrastructure combined with a warm, patient-first approach.',
  },
];

export function SpecialOffers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Exclusive Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
            Special Offers &{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Trusted healthcare solutions designed for every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-[#00B894]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{offer.title}</h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded" />
                  <p className="text-gray-600 text-sm leading-relaxed">{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>

  <div className="mt-1 mb-10 sm:mb-18 flex justify-center px-4">
        <div className="relative max-w-4xl w-full p-6 sm:p-8 md:p-12 rounded-3xl bg-white border border-blue-50 shadow-[0_9px_50px_rgb(0,0,0,0.04)] overflow-hidden group transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,119,182,0.12)] hover:-translate-y-1">
          {/* Background Glow Effect */} 
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#0077B6]/15 rounded-full blur-3xl"></div> 
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00B894]/15 rounded-full blur-3xl"></div>
          </div> 
          
          <div className="relative z-10 text-center">
           
            
            {/* Main Text */} 
            <p className="text-base sm:text-xl md:text-3xl font-medium leading-relaxed text-gray-700">
               At <span className="font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent px-2"> A Square Hospital, Jharsuguda,</span> we are dedicated to delivering trusted healthcare solutions for every stage of life  
               <br className="hidden md:block" />
               
            </p>
            
            {/* Bottom Line */} 
            <div className="mt-1 md:mt-3 h-1.5 w-24 bg-gradient-to-r from-[#0077B6] to-[#00B894] mx-auto rounded-full transition-all duration-500 group-hover:w-32"></div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
