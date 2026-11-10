import React from 'react';
import { User, Award, BookOpen, Clock } from 'lucide-react';
import type { FacultyMember } from '../../types';
import { PlaceholderBadge } from '../common/PlaceholderBadge';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <article className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#D62828]/40 shadow-xs hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group">
      {/* Top Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-neutral-200 group-hover:bg-[#D62828] transition-colors" />

      <div>
        {/* Placeholder Avatar / Photo */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-[#D62828] group-hover:bg-red-50/50 transition-colors flex-shrink-0">
            <User className="w-8 h-8 stroke-[1.5]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-heading font-bold text-lg text-[#171717] truncate">
                {faculty.name}
              </h3>
              {faculty.isPlaceholder && (
                <PlaceholderBadge label="Awaiting Info" />
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1">
              <Award className="w-3.5 h-3.5 text-[#D62828] flex-shrink-0" />
              <span className="font-mono text-[11px] truncate">{faculty.qualification}</span>
            </div>
          </div>
        </div>

        {/* Specialization & Experience Badges */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-neutral-700 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
            <BookOpen className="w-3.5 h-3.5 text-[#D62828] flex-shrink-0" />
            <span className="font-medium truncate">{faculty.specialization}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-700 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
            <Clock className="w-3.5 h-3.5 text-[#D62828] flex-shrink-0" />
            <span className="font-mono text-[11px]">{faculty.experience}</span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-body italic border-l-2 border-neutral-200 pl-3">
          {faculty.bio}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400 font-mono">
        Roster ID: {faculty.id} • Official Verification Pending
      </div>
    </article>
  );
};
