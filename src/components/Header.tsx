'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const cities = [
    { name: "Casablanca", phone: "06 00 00 00 00", icon: "🏢" },
    { name: "Rabat", phone: "06 00 00 00 00", icon: "🏛️" },
    { name: "Mohammedia", phone: "06 00 00 00 00", icon: "🌳" },
    { name: "Dar Bouazza", phone: "06 00 00 00 00", icon: "🏖️" },
    { name: "El Jadida", phone: "05 00 00 00 00", icon: "🌊" }
  ];

  useEffect(() => {
    // Set active section based on current pathname
    if (pathname === '/contact') {
      setActiveSection('contact');
    } else {
      setActiveSection('accueil'); // Default for homepage
    }
  }, [pathname]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsCallDropdownOpen(false);
      }
    };

    if (isCallDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isCallDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Only use Intersection Observer on homepage, not on contact page
    if (pathname !== '/contact') {
      // Use Intersection Observer with better settings for header navigation
      const observerOptions = {
        root: null,
        rootMargin: '-120px 0px -30% 0px', // More strict detection to avoid false positives
        threshold: [0, 0.1, 0.3, 0.5] // Higher minimum threshold
      };
      
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the most visible navigation section
        const navSections = ['accueil', 'about', 'centres', 'formations', 'examens'];
        let bestNavSection = '';
        let bestNavScore = 0;
        let isInStatisticsSection = false;
        
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          
          if (entry.isIntersecting) {
            console.log(`Section ${sectionId} is intersecting with ratio: ${entry.intersectionRatio.toFixed(2)}`);
            
            // Check if we're in the statistics section
            if (sectionId === 'statistics' || entry.target.textContent?.includes('Nos Statistiques')) {
              isInStatisticsSection = true;
              console.log('Detected we are in Statistics section');
            }
            
            // Only consider navigation sections for highlighting
            if (navSections.includes(sectionId)) {
              // Calculate a score based on intersection ratio and position
              const rect = entry.boundingClientRect;
              const windowHeight = window.innerHeight;
              
              // Prefer sections that are more centered in viewport
              const centerDistance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
              const normalizedDistance = 1 - (centerDistance / windowHeight);
              
              const score = entry.intersectionRatio * normalizedDistance;
              
              console.log(`Nav Section ${sectionId}: ratio=${entry.intersectionRatio.toFixed(2)}, score=${score.toFixed(2)}`);
              
              if (score > bestNavScore) {
                bestNavScore = score;
                bestNavSection = sectionId;
              }
            }
          }
        });
        
        // If we're in statistics section, always clear the header selection
        if (isInStatisticsSection) {
          console.log('In Statistics section - clearing header selection');
          setActiveSection('');
          return;
        }
        
        // Otherwise, set the best navigation section if we have one
        if (bestNavSection && bestNavScore > 0.1) {
          console.log('Setting active section to:', bestNavSection);
          setActiveSection(bestNavSection);
        } else {
          console.log('No strong navigation section detected, clearing active state');
          setActiveSection('');
        }
      };
      
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      // Observe all sections on the page, not just navigation sections
      const allSections = document.querySelectorAll('section[id], div[id]');
      allSections.forEach(element => {
        if (element.id) {
          observer.observe(element);
          console.log(`Observing section: ${element.id}`);
        }
      });
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // On contact page, just handle scroll
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  const navItems = [
    { name: 'Accueil', href: '#accueil', id: 'accueil' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Centres', href: '#centres', id: 'centres' },
    { name: 'Formations', href: '#formations', id: 'formations' },
    { name: 'Examens', href: '#examens', id: 'examens' },
    { name: 'Contact', href: '/contact', id: 'contact', isExternal: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110">
              <span className="text-white font-bold text-xl">AW</span>
            </div>
            <div>
              <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                American Workshop
              </div>
              <div className="text-xs text-gray-400 font-medium">Excellence in English</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.isExternal ? (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-xl'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
                </Link>
              ) : pathname === '/contact' ? (
                <Link
                  key={index}
                  href={`/${item.href}`}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-xl'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-xl'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Update URL with hash
                    router.push(item.href, { scroll: false });
                    // Smooth scroll to section
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            <div className="relative dropdown-container">
              <button 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/25"
                onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appelez-nous
                  <svg className={`w-4 h-4 ml-2 transition-transform duration-300 ${isCallDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Dropdown */}
              {isCallDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50">
                  <div className="p-4">
                    <div className="text-sm text-gray-400 mb-3 font-medium">Choisissez votre centre :</div>
                    <div className="space-y-2">
                      {cities.map((city, index) => (
                        <a
                          key={index}
                          href={`tel:+212${city.phone.replace(/\s/g, '')}`}
                          className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group whitespace-nowrap"
                          onClick={() => setIsCallDropdownOpen(false)}
                        >
                          <span className="text-xl mr-3 flex-shrink-0">{city.icon}</span>
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-white font-medium flex-shrink-0">{city.name}</span>
                            <span className="text-cyan-400 font-mono text-sm group-hover:text-white transition-colors flex-shrink-0">
                              {city.phone}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 text-white hover:bg-white/20 transition-all duration-300"
            title="Menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-4 border border-white/10">
            {navItems.map((item, index) => (
              item.isExternal ? (
                <Link
                  key={index}
                  href={item.href}
                  className={`block px-6 py-3 mx-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : pathname === '/contact' ? (
                <Link
                  key={index}
                  href={`/${item.href}`}
                  className={`block px-6 py-3 mx-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`block px-6 py-3 mx-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    e.preventDefault();
                    // Update URL with hash
                    router.push(item.href, { scroll: false });
                    // Smooth scroll to section
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="px-4 pt-4">
              <div className="space-y-3">
                <div className="text-sm text-gray-400 font-medium">Appelez-nous :</div>
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href={`tel:+212${city.phone.replace(/\s/g, '')}`}
                    className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <span className="text-lg mr-3">{city.icon}</span>
                    <div className="flex-1">
                      <span className="text-white font-medium">{city.name}</span>
                      <span className="text-cyan-400 font-mono text-sm ml-3">
                        {city.phone}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}