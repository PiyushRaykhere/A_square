import { Hero } from '../components/Hero';
import { QuickAccess } from '../components/QuickAccess';
import { Statistics } from '../components/Statistics';
import { Departments } from '../components/Departments';
import { Doctors } from '../components/Doctors';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HealthPackages } from '../components/HealthPackages';
import { Services } from '../components/Services';
import { AppointmentForm } from '../components/AppointmentForm';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Statistics />
      <Departments />
      <Doctors limit={3} showViewAll={true} />
      <WhyChooseUs />
      <HealthPackages />
      <Services />
      <AppointmentForm />
      <Testimonials />
      <Contact />
    </>
  );
}
