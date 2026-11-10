import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PlaceholderBadge } from '../components/common/PlaceholderBadge';
import { ACADEMY_CONFIG } from '../data/academyConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F8F8] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institutional Overview"
          title="About"
          highlight="SK Academic and Excellence"
          description="Dedicated to fostering intellectual curiosity, consistent study habits, and strong academic fundamentals for students in Redhills, Chennai."
        />

        {/* Narrative & Visual Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                alt="Students studying collaboratively in modern classroom setting"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                Academic Environment • 4/54 Bharathidasan Street, Redhills, Chennai
              </div>
            </div>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-neutral-700 leading-relaxed font-body">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
              Rooted in Guidance. Committed to Student Growth.
            </h3>

            <p className="text-base sm:text-lg text-neutral-700">
              {ACADEMY_CONFIG.aboutDescription}
            </p>

            <p className="text-sm sm:text-base text-neutral-600">
              We recognize that each learner progresses at their own pace. By focusing on conceptual clarity rather than mechanical memorization, our instructional framework equips learners with problem-solving acumen and academic confidence to face both daily school requirements and major board examinations.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 font-medium text-neutral-800">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                <span>Personalized Teacher Attention</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-neutral-800">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                <span>Comprehensive Curriculum Coverage</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-neutral-800">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                <span>Regular Review Assessments</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-neutral-800">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#D62828] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                <span>Dedicated Doubt Clearance</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Institutional Cards: Vision, Mission, Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* 1. Vision Card */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative group">
            <div className="h-1 w-full bg-[#D62828] absolute top-0 inset-x-0 rounded-t-2xl" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D62828]">
                  <Eye className="w-6 h-6" />
                </div>
                <PlaceholderBadge label="Institutional Vision" />
              </div>

              <h4 className="text-xl font-bold font-heading text-[#171717] mb-3">
                {ACADEMY_CONFIG.pillars.vision.title}
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed font-body">
                {ACADEMY_CONFIG.pillars.vision.content}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-400">
              Placeholder Tag: {ACADEMY_CONFIG.pillars.vision.placeholderTag}
            </div>
          </div>

          {/* 2. Mission Card */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative group">
            <div className="h-1 w-full bg-[#171717] absolute top-0 inset-x-0 rounded-t-2xl" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#171717]">
                  <Target className="w-6 h-6" />
                </div>
                <PlaceholderBadge label="Institutional Mission" />
              </div>

              <h4 className="text-xl font-bold font-heading text-[#171717] mb-3">
                {ACADEMY_CONFIG.pillars.mission.title}
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed font-body">
                {ACADEMY_CONFIG.pillars.mission.content}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-400">
              Placeholder Tag: {ACADEMY_CONFIG.pillars.mission.placeholderTag}
            </div>
          </div>

          {/* 3. Approach Card */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative group">
            <div className="h-1 w-full bg-[#F4B942] absolute top-0 inset-x-0 rounded-t-2xl" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Compass className="w-6 h-6" />
                </div>
                <PlaceholderBadge label="Teaching Approach" />
              </div>

              <h4 className="text-xl font-bold font-heading text-[#171717] mb-3">
                {ACADEMY_CONFIG.pillars.approach.title}
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed font-body">
                {ACADEMY_CONFIG.pillars.approach.content}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-400">
              Placeholder Tag: {ACADEMY_CONFIG.pillars.approach.placeholderTag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
