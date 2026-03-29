import React, { useState, useEffect } from 'react';

interface NavProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Nav: React.FC<NavProps> = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['hero', 'about', 'experience', 'education', 'skills'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/92 dark:bg-navy-950/92 backdrop-blur-xl shadow-sm border-b border-stone-200 dark:border-navy-800'
        : 'bg-white/75 dark:bg-navy-950/75 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Name */}
        <a href="#hero" className="font-bold text-navy-900 dark:text-white tracking-tight">
          Leonardo Morris
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link.id
                  ? 'bg-gold-400/10 text-gold-600 dark:text-gold-400'
                  : 'text-slate-500 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-navy-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 dark:text-navy-400 hover:bg-stone-100 dark:hover:bg-navy-800 hover:text-navy-900 dark:hover:text-white transition-all"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a
            href="mailto:edoleonardo23@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 dark:text-navy-400 hover:bg-stone-100 dark:hover:bg-navy-800"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-navy-800 bg-white dark:bg-navy-950 px-6 py-4 space-y-1">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active === link.id
                  ? 'bg-gold-400/10 text-gold-600 dark:text-gold-400'
                  : 'text-slate-600 dark:text-navy-300'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:edoleonardo23@gmail.com"
            className="block mt-2 px-4 py-3 bg-gold-500 text-white text-sm font-semibold rounded-lg text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
