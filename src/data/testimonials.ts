import type { TestimonialItem } from '../types';

/**
 * Testimonial Transparency Policy:
 * To maintain the highest standard of institutional trust, fabricated testimonials
 * and simulated 5-star ratings are strictly avoided.
 * Once verified parent and student reviews are collected, update this array.
 */

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    authorName: '[Parent Name]',
    role: 'Parent of Class 10 Student',
    feedback:
      '[Verified Feedback Placeholder: Detailed parent perspective on student improvement, concept clarity, and teacher dedication will be displayed here.]',
    isVerified: false,
  },
  {
    id: 'test-2',
    authorName: '[Student Name]',
    role: 'Class 12 Higher Secondary Student',
    feedback:
      '[Verified Feedback Placeholder: Student reflection on doubt-clearing sessions, exam confidence, and mentor encouragement will appear here.]',
    isVerified: false,
  },
  {
    id: 'test-3',
    authorName: '[Parent Name]',
    role: 'Parent of Middle School Student',
    feedback:
      '[Verified Feedback Placeholder: Feedback on structured discipline, supportive environment, and steady academic progress will be placed here.]',
    isVerified: false,
  },
];
