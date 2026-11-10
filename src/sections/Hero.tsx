import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/common/Button';
import { ACADEMY_CONFIG } from '../data/academyConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white"
    >
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content (~50% width: 6 or 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Academy Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-xs font-semibold text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#D62828]" />
              <span>{ACADEMY_CONFIG.address.area}, Chennai</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500 font-normal">Tuition & Coaching</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] font-heading tracking-tight leading-[1.12]">
              Building Knowledge.{' '}
              <span className="text-[#D62828] relative inline-block">
                Shaping Futures.
                <svg
                  className="absolute -bottom-2 inset-x-0 w-full text-[#D62828]/20"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 2 150 2 198 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed font-body max-w-2xl">
              {ACADEMY_CONFIG.heroDescription}
            </p>

            {/* Academic Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-neutral-700 font-body">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                <span>Concept-focused learning methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                <span>Primary to Higher Secondary guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                <span>Dedicated doubt-clearing sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                <span>Supportive academic environment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#courses"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-md"
              >
                Explore Our Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#admissions"
              >
                Enquire Now
              </Button>
            </div>

            {/* Institutional Integrity Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
              <span>Campus location: 4/54 Bharathidasan St, M.A. Nagar, Redhills</span>
            </div>
          </div>

          {/* Right Column: Hero Visual (~50% width: 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D62828]/15 via-transparent to-amber-200/20 transform rotate-1" />

              {/* Main Realistic Academic Photograph */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-neutral-100 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian educator teaching attentive students in a bright, modern academic coaching environment"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Subtle Inner Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-[#171717]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D62828] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading uppercase tracking-wider text-[#D62828]">
                        Educational Coaching
                      </div>
                      <div className="text-sm font-bold text-[#171717] font-heading">
                        SK Academic and Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Academic Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white rounded-xl shadow-lg border border-neutral-200 p-3 sm:p-3.5 flex items-center gap-3 animate-in fade-in duration-500">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 font-heading">
                    Structured Guidance
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#171717]">
                    Continuous Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
