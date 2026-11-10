import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { SKLogo } from '../common/SKLogo';
import { Button } from '../common/Button';
import { ACADEMY_CONFIG, getPhoneLink } from '../../data/academyConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const isScrolled = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Faculty', href: '#faculty', id: 'faculty' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const phoneLink = getPhoneLink();

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-xs border-b border-neutral-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#hero"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] rounded-xl"
              aria-label="SK Academic and Excellence Home"
            >
              <SKLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors relative ${
                      isActive
                        ? 'text-[#D62828] font-semibold'
                        : 'text-neutral-700 hover:text-[#D62828] hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D62828] rounded-full transition-all" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {phoneLink ? (
                <a
                  href={phoneLink}
                  className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#D62828] px-3 py-2 rounded-lg border border-neutral-200 hover:border-[#D62828] transition-colors"
                  title="Call Academy"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D62828]" />
                  <span>Call Us</span>
                </a>
              ) : null}

              <Button
                variant="primary"
                size="sm"
                href="#admissions"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-700 hover:text-[#D62828] hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <SKLogo size="sm" showSubtitle={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="p-4 space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-red-50 text-[#D62828] font-bold'
                          : 'text-neutral-800 hover:bg-neutral-100 hover:text-[#D62828]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50/60 space-y-3">
              <Button
                variant="primary"
                size="md"
                href="#admissions"
                onClick={handleLinkClick}
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Enquire Now
              </Button>

              <div className="text-[11px] text-neutral-500 text-center leading-tight">
                {ACADEMY_CONFIG.address.area}, {ACADEMY_CONFIG.address.city}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
