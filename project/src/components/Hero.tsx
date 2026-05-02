import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Phone } from 'lucide-react';


import hospital from '../assets/hospital.jpeg'
import slider2 from '../assets/receptioncounter.png'
import slider3 from '../assets/slider3.jpeg'
import slider4 from '../assets/slider4.jpeg'



const slides = [
  {
    image: hospital,
    subtitle1: "Welcome to",
    title: 'A Square Hospital',
    subtitle: 'a trusted destination for quality healthcare',
  },
  {
    image: slider2,
    title: 'Care from the First Hello',
    subtitle: 'Patient-first service for a smooth and stress-free visit',
  },
  {
    image: slider3,
    title: '24/7 Emergency Care',
    subtitle: 'Round-the-clock emergency services with expert medical team',
  },
  {
    image: slider4,
    title: 'Advanced Surgical Care',
    subtitle: 'Equipped for Excellence in Every Procedure',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative pt-20 h-[480px] sm:h-[600px] lg:h-[750px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute mt-16 inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover bg-gray-900"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl sm:ml-8">
                <p className="text-sm sm:text-xl text-white/90 mb-1 sm:mb-2">
                  {slide.subtitle1}
                </p>
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-2xl text-white/90 mb-4 sm:mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg hover:shadow-2xl transition transform hover:scale-105 font-semibold text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    Book Appointment
                  </a>
                  <a
                    href="tel:+917312345678"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0077B6] px-5 py-3 sm:px-8 sm:py-4 rounded-lg hover:shadow-2xl transition transform hover:scale-105 font-semibold text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Emergency Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
