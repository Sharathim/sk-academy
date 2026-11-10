import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { FacultyCard } from '../components/cards/FacultyCard';
import { FACULTY_PLACEHOLDER_DATA } from '../data/faculty';
import { Users, ShieldCheck } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Faculty: React.FC = () => {
  const [showRosterTemplate, setShowRosterTemplate] = useState(true);

  return (
    <section id="faculty" className="py-20 sm:py-28 bg-[#F8F8F8] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Instructional Team"
          title="Meet Our"
          highlight="Faculty"
          description="Experienced educators committed to subject mastery, clear communication, and personalized mentoring."
        />

        {/* Verification Policy Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-heading text-neutral-900">
                Authentic Faculty Roster Verification
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed font-body">
                In adherence to our institutional transparency policy, synthetic profiles and unverified credentials are not displayed. Real faculty profiles will be published upon academy confirmation.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowRosterTemplate(!showRosterTemplate)}
            className="text-xs font-semibold text-[#D62828] hover:underline flex-shrink-0 cursor-pointer self-end sm:self-center"
          >
            {showRosterTemplate ? 'View Empty State' : 'View Template Cards'}
          </button>
        </div>

        {showRosterTemplate ? (
          /* Faculty Roster Template Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_PLACEHOLDER_DATA.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="max-w-xl mx-auto p-12 text-center bg-white rounded-3xl border border-neutral-200 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400 mb-4">
              <Users className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="font-heading font-bold text-lg text-neutral-900">
              Faculty Profiles Awaiting Verification
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-body">
              The verified faculty list for our Redhills centre is currently being finalized. Please contact our administration directly for specific teacher specializations.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                href="#admissions"
              >
                Enquire About Faculty
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
