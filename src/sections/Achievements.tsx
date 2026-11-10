import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { AchievementCard } from '../components/cards/AchievementCard';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { Trophy } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Achievements: React.FC = () => {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Excellence & Milestones"
          title="Celebrating"
          highlight="Academic Excellence"
          description="Honoring dedication, steady improvement, and examination milestones accomplished through consistent mentorship."
        />

        {/* Primary Authentic Status Banner */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl border border-neutral-200/90 p-8 sm:p-10 text-center shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto mb-5 shadow-2xs">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] mb-3">
            Official Results & Milestones Update
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body max-w-xl mx-auto mb-6">
            SK Academic and Excellence publishes only verified academic milestones. Comprehensive student results, board exam distinctions, and academic awards will be published here following official board declarations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTemplates(!showTemplates)}
            >
              {showTemplates ? 'Hide Template Cards' : 'Preview Result Card Format'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#admissions"
            >
              Enquire About Academic Programmes
            </Button>
          </div>
        </div>

        {/* Conditionally Rendered Template Cards */}
        {showTemplates && (
          <div className="mt-12 animate-in fade-in duration-300">
            <div className="text-xs font-mono text-center text-neutral-500 mb-6">
              Template Cards (Replace via src/data/achievements.ts when official results are confirmed):
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <AchievementCard key={ach.id} achievement={ach} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
