import { useEffect, useRef, useState } from "react";
import { Users, Award, Building2, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ✅ Type for each stat
type Stat = {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Users, number: 50000, suffix: "+", label: "Happy Patients" },
  { icon: Award, number: 25, suffix: "+", label: "Expert Doctors" },
  { icon: Building2, number: 3, suffix: "+", label: "Years of Service" },
  { icon: HeartPulse, number: 8, suffix: "+", label: "Departments" },
];

export function Statistics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState<boolean>(false);

  // 👇 Trigger when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        } else {
          setStart(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-[#0077B6] to-[#00B894]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <Counter
                  target={stat.number}
                  suffix={stat.suffix}
                  start={start}
                />

                <div className="text-white/90 font-medium text-sm sm:text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ✅ Counter Props Type
type CounterProps = {
  target: number;
  suffix?: string;
  start: boolean;
};

// 🔥 Counter Component
function Counter({ target, suffix = "", start }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}