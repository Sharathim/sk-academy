import React from 'react';
import {
  BookOpen,
  Compass,
  Award,
  GraduationCap,
  Sparkles,
  CalendarCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import type { Course } from '../../types';
import { Button } from '../common/Button';

interface CourseCardProps {
  course: Course;
  onEnquire: (courseTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6 text-[#D62828]" />,
  Compass: <Compass className="w-6 h-6 text-[#D62828]" />,
  Award: <Award className="w-6 h-6 text-[#D62828]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#D62828]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#D62828]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#D62828]" />,
};

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnquire }) => {
  return (
    <article className="group bg-white rounded-2xl border border-neutral-200/90 hover:border-[#D62828]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top Accent Strip */}
      <div className="h-1.5 w-full bg-neutral-100 group-hover:bg-[#D62828] transition-colors" />

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Top Header: Icon & Category Tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            {iconMap[course.iconName] || <BookOpen className="w-6 h-6 text-[#D62828]" />}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D62828] bg-red-50/70 border border-red-100 px-2.5 py-1 rounded-full">
            {course.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-[#171717] group-hover:text-[#D62828] transition-colors leading-snug">
          {course.title}
        </h3>

        {/* Target Grade / Class */}
        <div className="mt-2 text-xs font-semibold text-neutral-800 bg-neutral-100/80 inline-block px-2.5 py-1 rounded-md self-start border border-neutral-200">
          Target: {course.targetClass}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-body flex-1">
          {course.description}
        </p>

        {/* Subjects Offered */}
        <div className="mt-5 pt-4 border-t border-neutral-100">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 font-heading">
            Subjects Offered
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-700">
            {course.subjects.map((sub, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D62828] mt-0.5 flex-shrink-0" />
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration / Schedule */}
        {course.duration && (
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-500">
            <Clock className="w-3.5 h-3.5 text-[#D62828] flex-shrink-0" />
            <span className="font-mono text-[11px] truncate">{course.duration}</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-7 pt-0 bg-white">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center group-hover:bg-[#D62828] group-hover:text-white group-hover:border-[#D62828] transition-all"
          onClick={() => onEnquire(course.title)}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Enquire About This Course
        </Button>
      </div>
    </article>
  );
};
