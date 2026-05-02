import { useState } from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic Health Checkup',
    price: '₹1,999',
    description: 'Essential health screening for general wellness',
    features: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Thyroid Profile',
      'Urine Routine',
      'ECG',
    ],
    popular: false,
  },
  {
    name: 'Comprehensive Package',
    price: '₹4,999',
    description: 'Complete health assessment with specialist consultation',
    features: [
      'All Basic Package Tests',
      'Vitamin D & B12',
      'HbA1c',
      'Chest X-Ray',
      'USG Abdomen',
      'Echo Cardiography',
      'Stress Test',
      'Doctor Consultation',
      'Dietitian Consultation',
    ],
    popular: true,
  },
  {
    name: 'Senior Citizen Package',
    price: '₹6,999',
    description: 'Specialized health screening for elderly care',
    features: [
      'All Comprehensive Tests',
      'Bone Density Test',
      'Prostate Specific Antigen',
      'Mammography (Women)',
      'Pulmonary Function Test',
      '2D Echo',
      'Ophthalmology Check',
      'Cardiology Consultation',
      'Free Home Collection',
    ],
    popular: false,
  },
];

export function HealthPackages() {
  const defaultIndex = packages.findIndex(p => p.popular);
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <section id="health-packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Health Packages
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Affordable{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              Health Checkup
            </span>{' '}
            Packages
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Preventive healthcare packages designed for different age groups and health needs
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          onMouseLeave={() => setActiveIndex(defaultIndex)}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
              ${
                activeIndex === index
                  ? 'ring-4 ring-[#0077B6] ring-offset-2 ring-offset-white'
                  : 'border-2 border-gray-200'
              }`}
            >
              {/* Popular Tag */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-4 py-1 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#appointment"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}