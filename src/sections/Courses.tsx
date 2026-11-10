import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CourseCard } from '../components/cards/CourseCard';
import { COURSES_DATA, COURSE_CATEGORIES } from '../data/courses';
import { BookOpen } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === selectedCategory);

  const handleEnquireCourse = (courseTitle: string) => {
    onSelectCourse(courseTitle);
    const admissionsSection = document.getElementById('admissions');
    if (admissionsSection) {
      admissionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum & Classes"
          title="Our Academic"
          highlight="Programmes"
          description="Tailored coaching solutions structured by grade level to strengthen foundational understanding and foster long-term exam mastery."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {COURSE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D62828] text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-[#171717]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnquire={handleEnquireCourse}
            />
          ))}
        </div>

        {/* Customization Notice Box */}
        <div className="mt-14 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-600 flex-shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>
              <strong>Note on Curriculum Offerings:</strong> The courses above represent proposed academic categories. Detailed subject batches, timings, and schedules will be updated upon final verification by the academy.
            </span>
          </div>

          <a
            href="#admissions"
            className="text-[#D62828] font-bold hover:underline flex-shrink-0"
          >
            Request Specific Subject →
          </a>
        </div>
      </div>
    </section>
  );
};

