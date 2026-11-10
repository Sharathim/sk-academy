import type { MethodologyStep } from '../types';

export const METHODOLOGY_DATA: MethodologyStep[] = [
  {
    stepNumber: '01',
    title: 'Understand',
    subtitle: 'Diagnostic & Requirement Analysis',
    description:
      'Every learner has unique strengths and initial hurdles. We assess current academic standing, class syllabus needs, and learning styles before setting study goals.',
    actionPoints: [
      'Gauging prior conceptual clarity',
      'Understanding syllabus board standards (State / CBSE)',
      'Identifying priority subjects & personal goals',
    ],
  },
  {
    stepNumber: '02',
    title: 'Learn',
    subtitle: 'Concept-First Classroom Delivery',
    description:
      'Instructors break down core principles into intuitive steps with real-world analogies, interactive Q&A, and clear blackboard derivations.',
    actionPoints: [
      'Focus on "why" behind formulas & theories',
      'Step-by-step example breakdowns',
      'Immediate clarification during lessons',
    ],
  },
  {
    stepNumber: '03',
    title: 'Practise',
    subtitle: 'Active Application & Problem Solving',
    description:
      'True confidence comes from hands-on work. Students tackle graded question sets, textbook exercises, and past exam questions under active supervision.',
    actionPoints: [
      'Graduated difficulty: Basic to Advanced questions',
      'Supervised in-class drills & assignments',
      'Timed problem-solving drills',
    ],
  },
  {
    stepNumber: '04',
    title: 'Improve',
    subtitle: 'Feedback, Revision & Gap Closure',
    description:
      'Periodic assessments pinpoint remaining misconceptions. Remedial mentoring and structured revision cycles ensure continual academic growth.',
    actionPoints: [
      'Targeted error analysis on test papers',
      'Remedial doubt resolution sessions',
      'Parent updates on academic progress',
    ],
  },
];
