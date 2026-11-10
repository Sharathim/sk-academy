import type { Course } from '../types';

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'All Programmes' },
  { id: 'primary', label: 'Primary (1–5)' },
  { id: 'middle', label: 'Middle School (6–8)' },
  { id: 'secondary', label: 'Secondary (9–10)' },
  { id: 'higher-secondary', label: 'Higher Secondary (11–12)' },
  { id: 'subject-specific', label: 'Subject-Specific' },
  { id: 'special', label: 'Special Programmes' },
] as const;

export const COURSES_DATA: Course[] = [
  {
    id: 'primary-foundation',
    title: 'Primary Academic Foundation',
    category: 'primary',
    categoryLabel: 'Primary Education',
    targetClass: 'Classes 1 to 5',
    subjects: ['Mathematics', 'English & Grammar', 'Environmental Studies', 'Regional Language / Tamil'],
    description:
      'Gentle, concept-oriented coaching that strengthens reading, mental math, handwriting, and early curiosity in an encouraging classroom atmosphere.',
    duration: '[CONFIRM_DURATION] — Regular Academic Year Schedule',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'BookOpen',
    isPlaceholder: true,
  },
  {
    id: 'middle-school-core',
    title: 'Middle School Core Programme',
    category: 'middle',
    categoryLabel: 'Middle School Education',
    targetClass: 'Classes 6 to 8',
    subjects: ['Mathematics', 'General Science', 'Social Science', 'English Language'],
    description:
      'Bridges primary concepts into analytical thinking with systematic chapter coverage, homework support, and periodic milestone reviews.',
    duration: '[CONFIRM_DURATION] — Weekday / Weekend Batches',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'Compass',
    isPlaceholder: true,
  },
  {
    id: 'secondary-board',
    title: 'Secondary Board Mentorship',
    category: 'secondary',
    categoryLabel: 'Secondary Education',
    targetClass: 'Classes 9 & 10 (State Board & CBSE)',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Studies'],
    description:
      'Rigorous curriculum alignment, chapter-wise problem solving, board exam blueprint familiarization, and step-by-step test preparation.',
    duration: '[CONFIRM_DURATION] — Comprehensive Annual Programme',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'Award',
    isPlaceholder: true,
  },
  {
    id: 'higher-secondary-streams',
    title: 'Higher Secondary Coaching Stream',
    category: 'higher-secondary',
    categoryLabel: 'Higher Secondary Education',
    targetClass: 'Classes 11 & 12 (Science & Commerce)',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Economics'],
    description:
      'Deep conceptual clarity for crucial higher secondary curricula, extensive numerical practice, derivations, and board question paper patterns.',
    duration: '[CONFIRM_DURATION] — Academic Year with Test Series',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'GraduationCap',
    isPlaceholder: true,
  },
  {
    id: 'subject-specific-math-science',
    title: 'Subject-Specific Intensive Modules',
    category: 'subject-specific',
    categoryLabel: 'Subject-Specific Coaching',
    targetClass: 'Classes 6 to 12 (As Enquired)',
    subjects: ['Pure Mathematics', 'Science Fundamentals', 'English Written Expression'],
    description:
      'Focused single-subject coaching for students who require concentrated attention, formula breakdown, or extra practice in specific domains.',
    duration: '[CONFIRM_DURATION] — Flexible Modular Duration',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'Sparkles',
    isPlaceholder: true,
  },
  {
    id: 'special-revision-tests',
    title: 'Exam Revision & Test Prep Series',
    category: 'special',
    categoryLabel: 'Special Academic Programmes',
    targetClass: 'Classes 10 & 12 (Board Examinees)',
    subjects: ['Mock Exam Papers', 'Time Management Clinics', 'Previous Years Question Solving'],
    description:
      'Targeted revision sessions designed to eliminate exam fear, refine time management, and reinforce high-weightage chapters prior to official exams.',
    duration: '[CONFIRM_DURATION] — Pre-Board Intensive Series',
    schedulePlaceholder: '[ADD_CLASS_TIMINGS]',
    iconName: 'CalendarCheck',
    isPlaceholder: true,
  },
];
