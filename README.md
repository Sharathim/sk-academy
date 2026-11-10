# SK Academic and Excellence — Official Institute Web Application

A premium, modern, fully responsive Single Page Application (SPA) for **SK Academic and Excellence**, an educational tuition and academic coaching institute located in Redhills, Chennai, Tamil Nadu.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 1. Verified Business Information

| Field | Official Value |
|---|---|
| **Academy Name** | SK Academic and Excellence |
| **Address** | 4/54, Bharathidasan Street, M.A. Nagar, Redhills, Chennai – 52, Tamil Nadu, India. |
| **Business Category** | Educational Institute / Tuition and Academic Coaching Centre |
| **Pincode** | 600052 |

> **Content Integrity Policy:**  
> In strict accordance with institutional verification standards, no fake statistics ("1000+ Students", "99% Results"), fake faculty profiles, synthetic portraits, unverified awards, or fabricated testimonials are used. All unconfirmed items utilize explicit, centralized placeholder tokens (`[ADD_ACADEMY_PHONE]`, `[ADD_ACADEMY_TIMINGS]`, etc.) ready for replacement when official details are supplied.

---

## 2. Design System & Brand Palette

The user interface follows an academic-grade color hierarchy:

- **Primary Red (`#D62828`):** Main brand accents, primary action buttons, key callouts.
- **Deep Red (`#A4161A`):** Interactive hover states and emphasized headings.
- **Charcoal Black (`#171717`):** Structural navigation, section headings, and institutional footer.
- **Pure White (`#FFFFFF`):** Main readable card and hero backgrounds.
- **Soft White (`#F8F8F8`):** Alternating background sections for clean visual cadence.
- **Warm Yellow (`#F4B942`):** Academic highlights, badges, and crest motifs.
- **Muted Grey (`#737373`):** Descriptive metadata and secondary typography.

**Typography:**
- **Headings:** Plus Jakarta Sans
- **Body & Captions:** Inter

---

## 3. Website Sections (SPA Continuous Layout)

1. **Navigation Bar (`Navbar.tsx`):**
   - Sticky header with scroll-reactive background and backdrop blur.
   - Typographic "SK" academic monogram and brand mark.
   - Smooth-scrolling section links with scroll-spy highlight (`useActiveSection`).
   - Mobile responsive drawer menu with backdrop and touch auto-close.
   - Primary "Enquire Now" CTA.

2. **Hero Section (`Hero.tsx`):**
   - Asymmetric 50/50 two-column layout on desktop, stacked on mobile.
   - Primary headline: *"Building Knowledge. Shaping Futures."*
   - Authentic photograph representing an Indian academic teaching setting.
   - Quick location badge: *"M.A. Nagar, Redhills, Chennai"*.
   - Dual CTAs: *"Explore Our Courses"* and *"Enquire Now"*.

3. **About the Academy (`About.tsx`):**
   - Institutional introduction for the Redhills community.
   - Visual cards for **Our Vision**, **Our Mission**, and **Our Approach** with explicit institutional placeholder tags.

4. **Academic Programmes (`Courses.tsx`):**
   - 6 Categorized Programmes: Primary (1–5), Middle School (6–8), Secondary (9–10), Higher Secondary (11–12), Subject-Specific Coaching, Special Programmes.
   - Filterable category pill controls.
   - Each card displays grade target, subject listings, curriculum description, duration, and an *"Enquire About This Course"* button.
   - Seamless connection: Clicking enquire automatically scrolls to the admission form and pre-selects the chosen course.

5. **Why Choose Us (`WhyChooseUs.tsx`):**
   - 8 feature cards with Lucide icons (Concept-Based Learning, Individual Attention, Dedicated Faculty, Regular Assessments, Doubt-Clearing, Exam Preparation, Progress Monitoring, Supportive Environment).

6. **Teaching Methodology (`Methodology.tsx`):**
   - 4-step horizontal process timeline on desktop / vertical on mobile:
     1. Understand (Diagnostic & Requirement Analysis)
     2. Learn (Concept-First Classroom Delivery)
     3. Practise (Active Application & Problem Solving)
     4. Improve (Feedback, Revision & Gap Closure)

7. **Faculty Section (`Faculty.tsx`):**
   - Structured card templates (`[Faculty Name]`, `[Qualification]`, `[Subject Specialization]`, `[Experience]`).
   - Includes transparent verification policy notice and switchable empty state view.

8. **Achievements & Results (`Achievements.tsx`):**
   - Tasteful milestone update announcement explaining the policy of authentic results reporting.
   - Interactive format preview toggle for upcoming board examination batches.

9. **Academy Gallery (`Gallery.tsx`):**
   - Interactive categories: All, Classrooms, Teaching Activities, Student Activities, Events, Academy Environment.
   - Responsive grid with hover effects.
   - Fullscreen lightbox modal with Previous, Next, Close controls, and keyboard navigation (`Esc`, `←`, `→`).

10. **Parent & Student Testimonials (`Testimonials.tsx`):**
    - Genuine transparency statement noting that reviews are published only following authenticated collection.
    - Template layout preview.

11. **Frequently Asked Questions (`FAQ.tsx`):**
    - Accessible accordion component (`Enter`/`Space` key interactive, `aria-expanded`).
    - Answers covering classes, subjects, timings, fees, demo classes, and enrolment.

12. **Admissions & Enquiry Section (`Admissions.tsx` & `EnquiryForm.tsx`):**
    - Client-side validation with strict 10-digit Indian phone regex (`^[6-9]\d{9}$`).
    - Course pre-population from course card clicks.
    - WhatsApp Integration: Opens direct WhatsApp messaging when `VITE_WHATSAPP_NUMBER` is configured; otherwise provides a formatted copyable enquiry summary with an activation notice.

13. **Contact & Location (`ContactSection.tsx`):**
    - Confirmed address: *4/54, Bharathidasan Street, M.A. Nagar, Redhills, Chennai – 52, Tamil Nadu, India.*
    - Embedded Google Maps query iframe + external "Get Directions" fallback link.
    - "Call Academy" and "WhatsApp Us" buttons with friendly placeholder resolution.

14. **Footer (`Footer.tsx`):**
    - Charcoal black theme with 4-column responsive layout.
    - Quick links, full address, copyright current year, and interactive Privacy Policy & Terms modals.

---

## 4. Getting Started Locally

### Prerequisites
- Node.js version 18 or above (v20+ recommended)
- npm version 9 or above

### Installation
```bash
# Clone or navigate into the repository
cd antigravity

# Install all dependencies
npm install
```

### Development Server
```bash
# Start Vite development server
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build & Preview
```bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Configuration & Replacing Placeholders

All customizable data is centralized in `src/data/`:

| File | Purpose |
|---|---|
| `src/data/academyConfig.ts` | Academy name, address, contact numbers, email, timings, map links |
| `src/data/courses.ts` | Academic courses, class levels, subjects offered, schedule details |
| `src/data/faculty.ts` | Teacher profiles, qualifications, and specializations |
| `src/data/gallery.ts` | Gallery images, categories, and descriptions |
| `src/data/faq.ts` | Frequently asked questions and official policy answers |
| `src/data/achievements.ts` | Board exam results, student distinctions, awards |
| `src/data/testimonials.ts` | Authenticated parent and student reviews |

### Environment Variables
To connect real phone and WhatsApp lines without modifying code, create a `.env` file in the project root:

```env
VITE_ACADEMY_PHONE=+919876543210
VITE_WHATSAPP_NUMBER=919876543210
VITE_ACADEMY_EMAIL=info@skacademic.com
```

---

## 6. Deployment Instructions

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. In **Site Configuration > Environment Variables**, add:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_ACADEMY_PHONE`
   - `VITE_ACADEMY_EMAIL`
4. Click **Deploy Site**.

### Deploy to Vercel
1. Import the repository in [Vercel](https://vercel.com/).
2. Framework Preset will automatically detect **Vite**.
3. Set **Build Command:** `npm run build` and **Output Directory:** `dist`.
4. Add environment variables under project settings.
5. Click **Deploy**.

---

## 7. Performance & Quality Standards

- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`.
- **Accessibility:** High color contrast, visible focus rings, keyboard accessible accordions & modal dialogs, descriptive image `alt` attributes.
- **Mobile Responsive:** Tested from small devices (320px) to ultra-wide displays (1920px+).
- **Zero Console Errors:** Strict TypeScript checks and lint-free build output.
