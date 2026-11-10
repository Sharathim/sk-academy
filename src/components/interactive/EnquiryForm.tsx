import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageSquare,
  Copy,
  Check,
  RefreshCw,
  Info,
} from 'lucide-react';
import type { EnquiryFormData } from '../../types';
import { Button } from '../common/Button';
import { COURSES_DATA } from '../../data/courses';
import {
  ACADEMY_CONFIG,
  isPlaceholder,
  getWhatsAppLink,
} from '../../data/academyConfig';

interface EnquiryFormProps {
  initialCourse?: string;
  onClearInitialCourse?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialCourse = '',
  onClearInitialCourse,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    parentStudentName: '',
    contactNumber: '',
    email: '',
    currentClass: '',
    interestedCourse: initialCourse || '',
    preferredMethod: 'WhatsApp',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState<string | null>(null);

  // Sync if initialCourse changes externally (e.g. user clicked a CourseCard button)
  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, interestedCourse: initialCourse }));
    }
  }, [initialCourse]);

  const classOptions = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9 (State / CBSE)',
    'Class 10 (Board Exam)',
    'Class 11 (Science / Commerce)',
    'Class 12 (Board Exam)',
    'Other / Individual Subject',
  ];

  // Validation function
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    // 1. Name validation
    if (!formData.parentStudentName.trim()) {
      newErrors.parentStudentName = 'Please enter student or parent name.';
    } else if (formData.parentStudentName.trim().length < 2) {
      newErrors.parentStudentName = 'Name must be at least 2 characters long.';
    }

    // 2. Contact Number validation (Indian 10-digit format: 6-9 followed by 9 digits)
    const phoneDigits = formData.contactNumber.replace(/[^0-9]/g, '');
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required.';
    } else if (!indianMobileRegex.test(phoneDigits)) {
      newErrors.contactNumber =
        'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).';
    }

    // 3. Email validation (Optional, but validate format if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    // 4. Class validation
    if (!formData.currentClass) {
      newErrors.currentClass = 'Please select student’s current class.';
    }

    // 5. Course validation
    if (!formData.interestedCourse) {
      newErrors.interestedCourse = 'Please select an interested programme.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const generateFormattedMessage = (data: EnquiryFormData): string => {
    return `*Academic Enquiry — SK Academic and Excellence*
Name: ${data.parentStudentName}
Contact: ${data.contactNumber}
Email: ${data.email || 'Not provided'}
Student Class: ${data.currentClass}
Interested Programme: ${data.interestedCourse}
Preferred Contact Mode: ${data.preferredMethod}
Additional Notes: ${data.message || 'None'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formattedMessage = generateFormattedMessage(formData);
    setGeneratedDraft(formattedMessage);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const whatsappConfigured = !isPlaceholder(ACADEMY_CONFIG.contact.whatsapp);

      if (whatsappConfigured && formData.preferredMethod === 'WhatsApp') {
        const link = getWhatsAppLink(formattedMessage);
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }
    }, 600);
  };

  const handleCopyDraft = () => {
    if (!generatedDraft) return;
    navigator.clipboard.writeText(generatedDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      parentStudentName: '',
      contactNumber: '',
      email: '',
      currentClass: '',
      interestedCourse: '',
      preferredMethod: 'WhatsApp',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    setGeneratedDraft(null);
    if (onClearInitialCourse) onClearInitialCourse();
  };

  const isWhatsAppConfigured = !isPlaceholder(ACADEMY_CONFIG.contact.whatsapp);

  return (
    <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#171717] px-6 sm:px-8 py-6 text-white border-b border-neutral-800">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F4B942]">
              Direct Academy Enquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
              Admission & Course Guidance Form
            </h3>
          </div>
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 items-center justify-center text-[#D62828]">
            <Send className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {isSuccess ? (
          /* Submission Result State */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-base font-heading">
                  Enquiry Draft Created Successfully
                </h4>
                <p className="text-sm text-emerald-800 mt-1 leading-relaxed font-body">
                  Thank you, <strong>{formData.parentStudentName}</strong>. Your enquiry details have been processed.
                </p>
              </div>
            </div>

            {/* Integration Notice */}
            {!isWhatsAppConfigured ? (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-800">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>Academy Contact Channel Pending Activation</span>
                </div>
                <p>
                  The official academy WhatsApp phone number is currently pending configuration (<code>VITE_WHATSAPP_NUMBER</code>). To prevent false delivery claims, your enquiry has been drafted below. You can copy it or save it for when contacting the academy.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm leading-relaxed">
                <p>
                  A WhatsApp window has been prepared with your formatted enquiry. If it didn't open automatically, you can copy the draft below.
                </p>
              </div>
            )}

            {/* Formatted Draft Box */}
            {generatedDraft && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Enquiry Summary</span>
                  <button
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-1 text-[#D62828] hover:underline font-semibold cursor-pointer"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Enquiry Text</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap leading-relaxed border border-neutral-800 overflow-x-auto">
                  {generatedDraft}
                </pre>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="md"
                onClick={handleReset}
                icon={<RefreshCw className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Submit Another Enquiry
              </Button>
              <Button
                variant="primary"
                size="md"
                href="#contact"
                className="w-full sm:w-auto"
              >
                View Academy Address & Map
              </Button>
            </div>
          </div>
        ) : (
          /* Main Input Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Field 1: Name */}
            <div>
              <label
                htmlFor="parentStudentName"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
              >
                Parent / Student Name <span className="text-[#D62828]">*</span>
              </label>
              <input
                id="parentStudentName"
                name="parentStudentName"
                type="text"
                value={formData.parentStudentName}
                onChange={handleChange}
                placeholder="Enter full name"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.parentStudentName
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                    : 'border-neutral-300 focus:border-[#D62828] focus:ring-red-100'
                }`}
                aria-invalid={!!errors.parentStudentName}
                aria-describedby={errors.parentStudentName ? 'name-error' : undefined}
                required
              />
              {errors.parentStudentName && (
                <p id="name-error" className="mt-1.5 text-xs text-[#D62828] flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.parentStudentName}
                </p>
              )}
            </div>

            {/* Field 2 & 3: Contact & Email in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
                >
                  Contact Number <span className="text-[#D62828]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-mono font-bold text-neutral-400">
                    +91
                  </div>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    maxLength={10}
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 font-mono transition-all ${
                      errors.contactNumber
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-neutral-300 focus:border-[#D62828] focus:ring-red-100'
                    }`}
                    aria-invalid={!!errors.contactNumber}
                    aria-describedby={errors.contactNumber ? 'phone-error' : undefined}
                    required
                  />
                </div>
                {errors.contactNumber && (
                  <p id="phone-error" className="mt-1.5 text-xs text-[#D62828] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.contactNumber}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
                >
                  Email Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#D62828] focus:ring-red-100'
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#D62828] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Field 4 & 5: Student's Current Class & Interested Course */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="currentClass"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
                >
                  Student's Current Class <span className="text-[#D62828]">*</span>
                </label>
                <select
                  id="currentClass"
                  name="currentClass"
                  value={formData.currentClass}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.currentClass
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#D62828] focus:ring-red-100'
                  }`}
                  aria-invalid={!!errors.currentClass}
                  required
                >
                  <option value="">Select Class</option>
                  {classOptions.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
                {errors.currentClass && (
                  <p className="mt-1.5 text-xs text-[#D62828] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.currentClass}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="interestedCourse"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
                >
                  Interested Programme <span className="text-[#D62828]">*</span>
                </label>
                <select
                  id="interestedCourse"
                  name="interestedCourse"
                  value={formData.interestedCourse}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.interestedCourse
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#D62828] focus:ring-red-100'
                  }`}
                  aria-invalid={!!errors.interestedCourse}
                  required
                >
                  <option value="">Select Programme</option>
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.targetClass})
                    </option>
                  ))}
                  <option value="General Academic Enquiries">General Academic Enquiries</option>
                </select>
                {errors.interestedCourse && (
                  <p className="mt-1.5 text-xs text-[#D62828] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.interestedCourse}
                  </p>
                )}
              </div>
            </div>

            {/* Field 6: Preferred Contact Method */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-heading">
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.preferredMethod === 'WhatsApp'
                      ? 'border-[#D62828] bg-red-50/30 text-[#D62828] font-semibold'
                      : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredMethod"
                    value="WhatsApp"
                    checked={formData.preferredMethod === 'WhatsApp'}
                    onChange={handleChange}
                    className="text-[#D62828] focus:ring-[#D62828]"
                  />
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs sm:text-sm">WhatsApp</span>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.preferredMethod === 'Phone'
                      ? 'border-[#D62828] bg-red-50/30 text-[#D62828] font-semibold'
                      : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredMethod"
                    value="Phone"
                    checked={formData.preferredMethod === 'Phone'}
                    onChange={handleChange}
                    className="text-[#D62828] focus:ring-[#D62828]"
                  />
                  <Phone className="w-4 h-4 text-[#D62828]" />
                  <span className="text-xs sm:text-sm">Phone Call</span>
                </label>
              </div>
            </div>

            {/* Field 7: Additional Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-heading"
              >
                Additional Message / Learning Needs <span className="text-neutral-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about specific subjects, learning goals, or questions..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D62828] focus:ring-2 focus:ring-red-100 transition-all font-body resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full justify-center shadow-md text-base"
                icon={<Send className="w-4 h-4" />}
              >
                Submit Admission Enquiry
              </Button>
            </div>

            <p className="text-[11px] text-neutral-400 text-center leading-normal">
              By submitting, your details will be used exclusively by SK Academic and Excellence for course communication. No spam or commercial marketing.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
