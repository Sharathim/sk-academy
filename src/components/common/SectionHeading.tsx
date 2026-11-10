import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  light = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className} mb-12 sm:mb-16`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            light
              ? 'bg-neutral-800 text-[#F4B942] border border-neutral-700'
              : 'bg-red-50 text-[#D62828] border border-red-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
          {badge}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
          light ? 'text-white' : 'text-[#171717]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-[#D62828] relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-body ${
            light ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

