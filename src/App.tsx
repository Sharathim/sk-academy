import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Courses } from './sections/Courses';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Methodology } from './sections/Methodology';
import { Faculty } from './sections/Faculty';
import { Achievements } from './sections/Achievements';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Admissions } from './sections/Admissions';
import { ContactSection } from './sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

export function App() {
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState<string>('');

  const sectionIds = [
    'hero',
    'about',
    'courses',
    'why-choose-us',
    'methodology',
    'faculty',
    'gallery',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-800 font-body selection:bg-[#D62828] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Continuous Single Page Experience */}
      <main className="flex-1">
        <Hero />
        <About />
        <Courses onSelectCourse={(course) => setSelectedCourseForEnquiry(course)} />
        <WhyChooseUs />
        <Methodology />
        <Faculty />
        <Achievements />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Admissions
          initialCourse={selectedCourseForEnquiry}
          onClearInitialCourse={() => setSelectedCourseForEnquiry('')}
        />
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
