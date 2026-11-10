import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EnquiryForm } from '../components/interactive/EnquiryForm';
import {
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface AdmissionsProps {
  initialCourse?: string;
  onClearInitialCourse?: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({
  initialCourse,
  onClearInitialCourse,
}) => {
  return (
    <section id="admissions" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Admissions & Enrolment"
          title="Start Your Learning"
          highlight="Journey With Us"
          description="Submit your academic enquiry below to learn more about upcoming batch schedules, subject syllabi, and personalized student guidance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Admissions Guidance & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8F8F8] p-7 rounded-3xl border border-neutral-200">
              <h3 className="text-xl font-bold font-heading text-[#171717] mb-3">
                How Our Admission Enquiry Works
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-body mb-6">
                We believe in personalized academic counselling. Once your enquiry is received, our mentors will walk you through batch options, curriculum roadmap, and class timings.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 font-body">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Submit Details:</strong>
                    Provide your student’s grade and target subjects using the form.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Academic Consultation:</strong>
                    Discuss syllabus board requirements (CBSE / State Board) and student learning goals.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Batch Allocation:</strong>
                    Receive schedule options aligned with regular school hours.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-3 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2.5 font-bold text-neutral-900">
                <ShieldCheck className="w-4 h-4 text-[#D62828]" />
                <span>Our Enrolment Commitments</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D62828]" />
                  <span>No high-pressure sales calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D62828]" />
                  <span>Honest academic assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D62828]" />
                  <span>Transparent fee and syllabus guidelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm
              initialCourse={initialCourse}
              onClearInitialCourse={onClearInitialCourse}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
