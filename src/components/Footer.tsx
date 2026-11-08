import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { club } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-club-600">
                <HeartPulse className="h-5 w-5 text-white" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">Engerwitzdorfer</span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-club-400">Schuhplattler</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Echtes Schuhplattler-Brauchtum aus dem Mühlviertel – seit {club.founded}. Die Teilnahme ist kostenlos.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 transition-colors hover:bg-club-600 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 transition-colors hover:bg-club-600 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Start' },
                { to: '/ueber-uns', label: 'Über uns' },
                { to: '/galerie', label: 'Galerie' },
                { to: '/mitgliedschaft', label: 'Mitgliedschaft' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-stone-400 transition-colors hover:text-club-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-club-400" />
                <span className="text-stone-400">{club.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-club-400" />
                <a href={`tel:${club.phone.replace(/\s/g, '')}`} className="text-stone-400 transition-colors hover:text-club-400">
                  {club.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-club-400" />
                <a href={`mailto:${club.email}`} className="text-stone-400 transition-colors hover:text-club-400">
                  {club.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Rechtliches</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/impressum" className="text-stone-400 transition-colors hover:text-club-400">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-stone-400 transition-colors hover:text-club-400">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-6">
          <p className="text-center text-xs text-stone-500">
            © {new Date().getFullYear()} {club.name}. Alle Rechte vorbehalten. ·{' '}
            <Link to="/impressum" className="hover:text-club-400">Impressum</Link> ·{' '}
            <Link to="/datenschutz" className="hover:text-club-400">Datenschutz</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
