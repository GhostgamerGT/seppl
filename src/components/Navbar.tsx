import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { club } from '@/lib/siteData';

const links = [
  { to: '/', label: 'Start' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/hoerproben', label: 'Hörproben' },
  { to: '/mitgliedschaft', label: 'Mitgliedschaft' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled ? 'bg-club-600' : 'bg-white/90'
            }`}
          >
            <HeartPulse
              className={`h-5 w-5 ${scrolled ? 'text-white' : 'text-club-600'}`}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-bold ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              Engerwitzdorfer
            </span>
            <span
              className={`text-xs font-medium uppercase tracking-[0.18em] ${
                scrolled ? 'text-club-600' : 'text-cream-100'
              }`}
            >
              Schuhplattler
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? 'text-club-700'
                        : 'text-stone-600 hover:text-club-700'
                      : isActive
                        ? 'text-white'
                        : 'text-cream-100 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-club-500" />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/mitgliedschaft" className="hidden md:inline-flex btn-primary !px-5 !py-2.5 !text-sm">
          Mitglied werden
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors md:hidden ${
            scrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/15'
          }`}
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-cream-50 shadow-lg transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-club-50 text-club-700'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link to="/mitgliedschaft" className="btn-primary w-full">
              Mitglied werden
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
