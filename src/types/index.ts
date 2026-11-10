export interface Course {
  id: string;
  title: string;
  category: 'primary' | 'middle' | 'secondary' | 'higher-secondary' | 'subject-specific' | 'special';
  categoryLabel: string;
  targetClass: string;
  subjects: string[];
  description: string;
  duration?: string;
  schedulePlaceholder?: string;
  iconName: string;
  isPlaceholder?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  image?: string;
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classrooms' | 'Teaching Activities' | 'Student Activities' | 'Events' | 'Academy Environment';
  description: string;
  imageUrl: string;
  alt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isPlaceholderNote?: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoints: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  placeholderTag: string;
}

export interface AchievementItem {
  id: string;
  studentName: string;
  academicYear: string;
  achievementTitle: string;
  description: string;
  photoUrl?: string;
  isPlaceholder: boolean;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  role: string;
  feedback: string;
  rating?: number;
  isVerified: boolean;
}

export interface EnquiryFormData {
  parentStudentName: string;
  contactNumber: string;
  email: string;
  currentClass: string;
  interestedCourse: string;
  preferredMethod: 'Phone' | 'WhatsApp';
  message: string;
}

