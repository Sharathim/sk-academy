import type { GalleryItem } from '../types';

export const GALLERY_CATEGORIES = [
  'All',
  'Classrooms',
  'Teaching Activities',
  'Student Activities',
  'Events',
  'Academy Environment',
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Focused Classroom Learning',
    category: 'Classrooms',
    description: 'Bright and organized study environment designed to minimize distraction and maximize attention.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Bright modern classroom desks and blackboard prepared for students',
  },
  {
    id: 'gal-2',
    title: 'Interactive Conceptual Teaching',
    category: 'Teaching Activities',
    description: 'Dedicated educator engaging students in blackboard explanations and analytical problem solving.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    alt: 'Teacher explaining concepts interactively with students in classroom',
  },
  {
    id: 'gal-3',
    title: 'Collaborative Problem Solving',
    category: 'Student Activities',
    description: 'Students working together through exercises, encouraging peer discussion and conceptual clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students collaborating over academic books and notes during study session',
  },
  {
    id: 'gal-4',
    title: 'Structured Doubt-Clearing',
    category: 'Teaching Activities',
    description: 'Personalized desk-side guidance ensuring students understand every intermediate mathematical step.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
    alt: 'Mentor explaining academic equations to student in quiet study setting',
  },
  {
    id: 'gal-5',
    title: 'Academic Milestone Celebrations',
    category: 'Events',
    description: 'Recognizing student perseverance, steady improvement, and examination milestones.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students celebrating academic achievement and graduation milestones',
  },
  {
    id: 'gal-6',
    title: 'Quiet Study & Resource Corner',
    category: 'Academy Environment',
    description: 'Dedicated reference materials, textbooks, and syllabus guides available for in-depth revision.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Neatly organized academic textbooks and study notebooks on wooden desk',
  },
];
