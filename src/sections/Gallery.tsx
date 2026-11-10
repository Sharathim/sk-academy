import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GalleryLightbox } from '../components/interactive/GalleryLightbox';
import { GALLERY_DATA } from '../data/gallery';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8F8F8] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus Life & Learning"
          title="A Glimpse of"
          highlight="Our Academy"
          description="Explore our study spaces, classroom interactions, and educational environment centered around academic dedication."
        />

        {/* Interactive Gallery with Category Filter & Lightbox */}
        <GalleryLightbox items={GALLERY_DATA} />
      </div>
    </section>
  );
};

