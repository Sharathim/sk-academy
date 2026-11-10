import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp, Shield, FileText } from 'lucide-react';
import { SKLogo } from '../common/SKLogo';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { PlaceholderBadge } from '../common/PlaceholderBadge';
import {
  ACADEMY_CONFIG,
  getPhoneLink,
  getEmailLink,
} from '../../data/academyConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneLink = getPhoneLink();
  const emailLink = getEmailLink();

  return (
    <footer className="bg-[#171717] text-white border-t border-neutral-800 relative z-10">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <SKLogo variant="light" size="md" />
            <p className="text-neutral-400 text-sm leading-relaxed font-body">
              {ACADEMY_CONFIG.aboutDescription}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-[#F4B942] border border-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
                {ACADEMY_CONFIG.category}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-white tracking-wide border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400 font-body">
              <li>
                <a
                  href="#hero"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  About Our Academy
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Academic Programmes
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Teaching Methodology
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Faculty Showcase
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Academy Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact Address & Channels */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-white tracking-wide border-b border-neutral-800 pb-2">
              Academy Location & Info
            </h4>
            <div className="space-y-3 text-sm text-neutral-300 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D62828] mt-1 flex-shrink-0" />
                <address className="not-italic text-neutral-300 leading-snug">
                  <span className="font-semibold text-white block">
                    {ACADEMY_CONFIG.name}
                  </span>
                  {ACADEMY_CONFIG.address.line1},<br />
                  {ACADEMY_CONFIG.address.line2},<br />
                  {ACADEMY_CONFIG.address.pincodeDisplay}, Tamil Nadu, India.
                </address>
              </div>

              {/* Phone Channel */}
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                {phoneLink ? (
                  <a
                    href={phoneLink}
                    className="hover:text-white transition-colors"
                  >
                    {ACADEMY_CONFIG.contact.phone}
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-neutral-400">Phone:</span>
                    <PlaceholderBadge label={ACADEMY_CONFIG.contact.phone} />
                  </div>
                )}
              </div>

              {/* Email Channel */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                {emailLink ? (
                  <a
                    href={emailLink}
                    className="hover:text-white transition-colors break-all"
                  >
                    {ACADEMY_CONFIG.contact.email}
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-neutral-400">Email:</span>
                    <PlaceholderBadge label={ACADEMY_CONFIG.contact.email} />
                  </div>
                )}
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D62828] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-neutral-400 leading-snug">
                  <span className="text-neutral-300 font-medium block">
                    Operating Schedule:
                  </span>
                  <span className="italic">
                    {ACADEMY_CONFIG.contact.timings}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Admissions CTA */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-white tracking-wide border-b border-neutral-800 pb-2">
              Admissions Enquiry
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed font-body">
              Have questions regarding class batches, subject offerings, or curriculum schedules? Connect with our administration team.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="#admissions"
                className="w-full justify-center"
              >
                Enquire About Admissions
              </Button>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
              <p>
                <strong className="text-neutral-200">Campus Visit:</strong> Parents are welcome to visit our centre in M.A. Nagar, Redhills for in-person academic counselling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-neutral-800 bg-[#121212] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-body">
          <div>
            © {currentYear} {ACADEMY_CONFIG.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-neutral-700">•</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-neutral-700">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#D62828] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy — SK Academic and Excellence"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D62828]">
            <Shield className="w-4 h-4" />
            <span>Commitment to Student & Family Privacy</span>
          </div>
          <p>
            At <strong>{ACADEMY_CONFIG.name}</strong>, located at {ACADEMY_CONFIG.address.formatted}, we hold the privacy of our students and parents in highest regard.
          </p>
          <h4 className="font-bold text-neutral-900">Information Collection</h4>
          <p>
            Any information submitted through our admission enquiry form (including student names, contact numbers, grade levels, and messages) is collected solely for academic communication, scheduling assessments, and responding to parental enquiries.
          </p>
          <h4 className="font-bold text-neutral-900">Data Protection</h4>
          <p>
            We do not sell, rent, or lease contact databases to any third parties. All submitted details remain confidential within the academy administration.
          </p>
          <h4 className="font-bold text-neutral-900">Contact Us</h4>
          <p>
            For questions about your data or admission enquiries, contact us directly at our Redhills centre.
          </p>
        </div>
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms & Conditions — SK Academic and Excellence"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D62828]">
            <FileText className="w-4 h-4" />
            <span>Educational Institute Guidelines</span>
          </div>
          <p>
            Welcome to the official web portal of <strong>{ACADEMY_CONFIG.name}</strong>. By accessing this website, you agree to the following terms:
          </p>
          <h4 className="font-bold text-neutral-900">Academic Offerings</h4>
          <p>
            Course syllabi, class schedules, and fee structures displayed as placeholders will be confirmed individually upon enrolment. Content on this website is for informational guidance.
          </p>
          <h4 className="font-bold text-neutral-900">Student Discipline & Conduct</h4>
          <p>
            Enrolled students are expected to follow academy classroom decorum, attend scheduled batches punctually, and participate diligently in tests and homework assignments.
          </p>
          <h4 className="font-bold text-neutral-900">Intellectual Property</h4>
          <p>
            The SK monogram, academy branding, and educational design are the property of SK Academic and Excellence.
          </p>
        </div>
      </Modal>
    </footer>
  );
};
