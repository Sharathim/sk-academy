import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  ExternalLink,
  Info,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { PlaceholderBadge } from '../components/common/PlaceholderBadge';
import { Modal } from '../components/common/Modal';
import {
  ACADEMY_CONFIG,
  getPhoneLink,
  getWhatsAppLink,
  getEmailLink,
} from '../data/academyConfig';

export const ContactSection: React.FC = () => {
  const [phoneNoticeOpen, setPhoneNoticeOpen] = useState(false);
  const [whatsappNoticeOpen, setWhatsappNoticeOpen] = useState(false);

  const phoneLink = getPhoneLink();
  const whatsappLink = getWhatsAppLink(
    'Hello SK Academic and Excellence, I would like to enquire about courses and admissions.'
  );
  const emailLink = getEmailLink();

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!phoneLink) {
      e.preventDefault();
      setPhoneNoticeOpen(true);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!whatsappLink) {
      e.preventDefault();
      setWhatsappNoticeOpen(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F8F8] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus Location & Hours"
          title="Visit"
          highlight="SK Academic and Excellence"
          description="Find our physical learning centre in Redhills, Chennai, or connect with our administration regarding visits and counselling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Address & Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Confirmed Address Card */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-xs">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#D62828] mb-3 font-heading">
                <MapPin className="w-4 h-4" />
                <span>Verified Campus Address</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-[#171717] mb-2">
                {ACADEMY_CONFIG.name}
              </h3>

              <address className="not-italic text-sm sm:text-base text-neutral-700 leading-relaxed font-body mb-6">
                {ACADEMY_CONFIG.address.line1},<br />
                {ACADEMY_CONFIG.address.line2},<br />
                {ACADEMY_CONFIG.address.pincodeDisplay}, Tamil Nadu, India.
              </address>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href={ACADEMY_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Navigation className="w-4 h-4" />}
                >
                  Get Directions
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  href="#admissions"
                >
                  Enquire Online
                </Button>
              </div>
            </div>

            {/* Channels & Timings Card */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-xs space-y-4">
              <h4 className="text-base font-bold font-heading text-[#171717] border-b border-neutral-100 pb-3">
                Academy Communication Channels
              </h4>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-neutral-700">
                  <Phone className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                  <span className="font-medium">Phone:</span>
                </div>
                {phoneLink ? (
                  <a
                    href={phoneLink}
                    className="font-mono text-sm text-[#D62828] hover:underline"
                  >
                    {ACADEMY_CONFIG.contact.phone}
                  </a>
                ) : (
                  <PlaceholderBadge label={ACADEMY_CONFIG.contact.phone} />
                )}
              </div>

              {/* WhatsApp */}
              <div className="flex items-start justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-neutral-700">
                  <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium">WhatsApp:</span>
                </div>
                {whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-emerald-700 hover:underline"
                  >
                    {ACADEMY_CONFIG.contact.whatsapp}
                  </a>
                ) : (
                  <PlaceholderBadge label={ACADEMY_CONFIG.contact.whatsapp} />
                )}
              </div>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-neutral-700">
                  <Mail className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                  <span className="font-medium">Email:</span>
                </div>
                {emailLink ? (
                  <a
                    href={emailLink}
                    className="font-mono text-xs sm:text-sm text-[#D62828] hover:underline"
                  >
                    {ACADEMY_CONFIG.contact.email}
                  </a>
                ) : (
                  <PlaceholderBadge label={ACADEMY_CONFIG.contact.email} />
                )}
              </div>

              {/* Timings */}
              <div className="flex items-start justify-between gap-3 text-sm pt-2 border-t border-neutral-100">
                <div className="flex items-center gap-2.5 text-neutral-700">
                  <Clock className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                  <span className="font-medium">Timings:</span>
                </div>
                <div className="text-right">
                  <PlaceholderBadge label={ACADEMY_CONFIG.contact.timings} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePhoneClick}
                  href={phoneLink || undefined}
                  icon={<Phone className="w-3.5 h-3.5" />}
                  className="flex-1 justify-center"
                >
                  Call Academy
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsAppClick}
                  href={whatsappLink || undefined}
                  target={whatsappLink ? '_blank' : undefined}
                  rel={whatsappLink ? 'noopener noreferrer' : undefined}
                  icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />}
                  className="flex-1 justify-center"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-xs flex flex-col h-full">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-600 font-heading">
                  Campus Map Location
                </div>
                <a
                  href={ACADEMY_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D62828] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <iframe
                  title="SK Academic and Excellence Location Map"
                  src={ACADEMY_CONFIG.maps.embedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 px-2 text-[11px] text-neutral-500 font-body">
                Location query: 4/54 Bharathidasan Street, M.A. Nagar, Redhills, Chennai – 52. Click "Get Directions" above to open navigation in your device's map application.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Notice Modal */}
      <Modal
        isOpen={phoneNoticeOpen}
        onClose={() => setPhoneNoticeOpen(false)}
        title="Direct Calling Channel Pending Activation"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold">
            <Info className="w-4 h-4" />
            <span>Placeholder Setting: [ADD_ACADEMY_PHONE]</span>
          </div>
          <p>
            The dedicated telephone line for <strong>{ACADEMY_CONFIG.name}</strong> is currently being set up. In accordance with strict integrity guidelines, placeholder phone numbers are not dialable.
          </p>
          <p>
            Please use our online admission enquiry form to leave your student's details, or visit our physical campus at {ACADEMY_CONFIG.address.formatted}.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="sm"
              href="#admissions"
              onClick={() => setPhoneNoticeOpen(false)}
            >
              Go to Admission Enquiry Form
            </Button>
          </div>
        </div>
      </Modal>

      {/* WhatsApp Notice Modal */}
      <Modal
        isOpen={whatsappNoticeOpen}
        onClose={() => setWhatsappNoticeOpen(false)}
        title="WhatsApp Channel Pending Activation"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold">
            <Info className="w-4 h-4" />
            <span>Placeholder Setting: [ADD_ACADEMY_WHATSAPP]</span>
          </div>
          <p>
            The official WhatsApp business number for <strong>{ACADEMY_CONFIG.name}</strong> has not yet been connected in the configuration file (<code>VITE_WHATSAPP_NUMBER</code>).
          </p>
          <p>
            You can still generate and preview your complete admission query using our online form!
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="sm"
              href="#admissions"
              onClick={() => setWhatsappNoticeOpen(false)}
            >
              Draft Enquiry in Form
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
