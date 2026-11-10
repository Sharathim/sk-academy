import React from 'react';

interface SKLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const SKLogo: React.FC<SKLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds (Footer)

  const sizeClasses = {
    sm: {
      emblem: 'w-8 h-8 text-base',
      title: 'text-sm font-bold',
      subtitle: 'text-[10px]',
    },
    md: {
      emblem: 'w-10 h-10 text-lg',
      title: 'text-base sm:text-lg font-bold tracking-tight',
      subtitle: 'text-xs',
    },
    lg: {
      emblem: 'w-14 h-14 text-2xl',
      title: 'text-xl sm:text-2xl font-bold tracking-tight',
      subtitle: 'text-sm',
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Typographic SK Academic Crest Mark */}
      <div
        className={`${sizeClasses.emblem} relative rounded-xl flex items-center justify-center font-extrabold shadow-sm flex-shrink-0 transition-transform duration-200 group-hover:scale-105 border ${
          isLight
            ? 'bg-[#1E1E1E] border-neutral-700 text-white'
            : 'bg-[#171717] border-neutral-300 text-white'
        }`}
      >
        {/* Subtle Top Red Accent Line */}
        <div className="absolute top-0 inset-x-2 h-0.5 bg-[#D62828] rounded-full" />
        
        {/* Monogram */}
        <span className="font-heading tracking-tight text-white flex items-center">
          SK
          <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] ml-0.5 mb-1 inline-block" />
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading ${sizeClasses.title} ${
            isLight ? 'text-white' : 'text-[#171717]'
          }`}
        >
          SK Academic <span className="text-[#D62828]">&</span> Excellence
        </span>
        {showSubtitle && (
          <span
            className={`font-body ${sizeClasses.subtitle} font-medium tracking-wide ${
              isLight ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            Tuition & Academic Coaching Centre
          </span>
        )}
      </div>
    </div>
  );
};

