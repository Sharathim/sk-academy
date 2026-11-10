/**
 * Central Business & Academy Configuration for SK Academic and Excellence
 * 
 * Verified Information:
 * - Academy Name: SK Academic and Excellence
 * - Address: 4/54, Bharathidasan Street, M.A. Nagar, Redhills, Chennai – 52, Tamil Nadu, India.
 * - Business Category: Educational Institute / Tuition and Academic Coaching Centre
 * 
 * All placeholders follow the [ADD_*] or [CONFIRM_*] convention for simple replacement.
 */

export const ACADEMY_CONFIG = {
  // Confirmed details
  name: "SK Academic and Excellence",
  shortName: "SK Excellence",
  monogram: "SK",
  tagline: "Building Knowledge. Shaping Futures.",
  heroDescription:
    "At SK Academic and Excellence, we believe that strong academic foundations create opportunities for a brighter future. Discover a learning environment focused on knowledge, confidence, and continuous improvement.",
  
  aboutDescription:
    "SK Academic and Excellence is an educational institution based in M.A. Nagar, Redhills, Chennai. The academy aims to support students in their academic journey through structured learning, dedicated guidance, and a focus on educational development.",
  
  // Confirmed Physical Address
  address: {
    line1: "4/54, Bharathidasan Street",
    line2: "M.A. Nagar, Redhills",
    area: "M.A. Nagar, Redhills",
    city: "Chennai",
    pincode: "600052",
    pincodeDisplay: "Chennai – 52",
    state: "Tamil Nadu",
    country: "India",
    formatted:
      "4/54, Bharathidasan Street, M.A. Nagar, Redhills, Chennai – 52, Tamil Nadu, India.",
  },

  category: "Educational Institute / Tuition and Academic Coaching Centre",

  // Editable Placeholders (Can be populated via Vite .env variables or replaced directly here)
  contact: {
    phone: (import.meta.env.VITE_ACADEMY_PHONE as string) || "[ADD_ACADEMY_PHONE]",
    whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "[ADD_ACADEMY_WHATSAPP]",
    email: (import.meta.env.VITE_ACADEMY_EMAIL as string) || "[ADD_ACADEMY_EMAIL]",
    timings: "[ADD_ACADEMY_TIMINGS]",
    timingsDisplay: "Operating Hours: [ADD_ACADEMY_TIMINGS] (Will be announced soon)",
  },

  // Map settings
  maps: {
    // Search query URL fallback for directions
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=4%2F54%2C+Bharathidasan+Street%2C+M.A.+Nagar%2C+Redhills%2C+Chennai+-+600052",
    // Embed iframe search query URL
    embedUrl:
      "https://maps.google.com/maps?q=4%2F54%2C%20Bharathidasan%20Street%2C%20M.A.%20Nagar%2C%20Redhills%2C%20Chennai%20600052&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // Institutional Commitments (with explicit placeholder markers)
  pillars: {
    vision: {
      title: "Our Vision",
      content:
        "[INSERT OFFICIAL VISION] — To empower every student with conceptual clarity, self-discipline, and the academic courage to excel in higher education and life pursuits.",
      placeholderTag: "[INSERT OFFICIAL VISION]",
    },
    mission: {
      title: "Our Mission",
      content:
        "[INSERT OFFICIAL MISSION] — To provide structured academic mentoring, individualized attention, and a supportive learning environment rooted in local educational excellence.",
      placeholderTag: "[INSERT OFFICIAL MISSION]",
    },
    approach: {
      title: "Our Approach",
      content:
        "[INSERT TEACHING APPROACH] — Cultivating curiosity, strengthening core fundamentals through active practice, and guiding students step-by-step from foundational understanding to exam mastery.",
      placeholderTag: "[INSERT TEACHING APPROACH]",
    },
  },

  // Social links placeholder
  social: {
    facebook: "[ADD_FACEBOOK_URL]",
    instagram: "[ADD_INSTAGRAM_URL]",
    youtube: "[ADD_YOUTUBE_URL]",
  },
};

/**
 * Utility to verify whether a string is an unconfigured placeholder
 */
export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return (
    trimmed.startsWith("[") && trimmed.endsWith("]") ||
    trimmed.includes("[ADD_") ||
    trimmed.includes("[INSERT ") ||
    trimmed.includes("[CONFIRM")
  );
}

/**
 * Generates a WhatsApp direct link if a real number is provided, or null if placeholder
 */
export function getWhatsAppLink(message?: string): string | null {
  const number = ACADEMY_CONFIG.contact.whatsapp;
  if (isPlaceholder(number)) return null;
  const cleaned = number.replace(/[^0-9]/g, "");
  const textParam = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleaned}${textParam}`;
}

/**
 * Generates a phone link if configured, or null if placeholder
 */
export function getPhoneLink(): string | null {
  const phone = ACADEMY_CONFIG.contact.phone;
  if (isPlaceholder(phone)) return null;
  const cleaned = phone.replace(/[^0-9+]/g, "");
  return `tel:${cleaned}`;
}

/**
 * Generates email link if configured, or null if placeholder
 */
export function getEmailLink(): string | null {
  const email = ACADEMY_CONFIG.contact.email;
  if (isPlaceholder(email)) return null;
  return `mailto:${email}`;
}
