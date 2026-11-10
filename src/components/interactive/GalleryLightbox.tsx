import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import type { GalleryItem } from '../../types';
import { GALLERY_CATEGORIES } from '../../data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const activeItem =
    activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [activeItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : null
    );
  }, [activeItemIndex, filteredItems.length]);

  const handleClose = () => {
    setActiveItemIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeItemIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItemIndex, handleNext, handlePrev]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {GALLERY_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#D62828] text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveItemIndex(index)}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 aspect-[4/3] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItemIndex(index);
              }
            }}
            aria-label={`View ${item.title}`}
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Hover Expand Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4B942] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-sm inline-block mb-1.5 border border-white/10">
                {item.category}
              </span>
              <h3 className="font-heading font-bold text-base leading-snug group-hover:text-red-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 line-clamp-1 mt-1 font-body">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem !== null && activeItemIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded">
                {activeItemIndex + 1} / {filteredItems.length}
              </span>
              <span className="text-xs font-semibold text-[#F4B942] hidden sm:inline">
                {activeItem.category}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close gallery lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center: Image with Prev/Next Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#D62828] text-white border border-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[75vh] overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl bg-neutral-900 flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                className="max-h-[75vh] w-auto object-contain select-none animate-in zoom-in-95 duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#D62828] text-white border border-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption Bar */}
          <div className="max-w-3xl mx-auto w-full text-center text-white border-t border-neutral-800 pt-3">
            <h3 className="font-heading font-bold text-lg text-white">
              {activeItem.title}
            </h3>
            <p className="text-sm text-neutral-400 mt-1 font-body">
              {activeItem.description}
            </p>
            <div className="text-[11px] text-neutral-500 mt-1 font-mono">
              Temporary Educational Photography • Replace with academy photos via src/data/gallery.ts
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
