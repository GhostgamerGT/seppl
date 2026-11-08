import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Music,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { news, galleryImages, club } from '@/lib/siteData';

const heroImg = '/images/gruppe-seppl.jpg';
const actionImg = '/images/gruppe-maibaum5.jpg';

const features = [
  { icon: Music, title: 'Echtes Brauchtum', text: 'Wir pflegen den Schuhplattler – den traditionellen Prankentanz aus dem Mühlviertel.' },
  { icon: Users, title: 'Gemeinschaft', text: 'Über 40 Mitglieder jeden Alters freuen sich auf neue Plattlerinnen und Plattler.' },
  { icon: Award, title: 'Auftritte & Feste', text: 'Regelmäßige Schuhplattler-Auftritte bei Festen, Märkten und Anlässen in der Region.' },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-AT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

const categoryColors: Record<string, string> = {
  Verein: 'bg-blue-100 text-blue-700',
  Auftritt: 'bg-club-100 text-club-700',
  Probe: 'bg-emerald-100 text-emerald-700',
  Fest: 'bg-amber-100 text-amber-700',
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Schuhplattler-Gruppe bei einem Auftritt"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

        <div className="container-px relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-100 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-club-400" />
              Seit {club.founded} · {club.location}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Engerwitzdorfer <span className="text-club-500">Schuhplattler</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
              Tradition, Herz und Schwung – wir halten das Schuhplatteln im Mühlviertel am Leben und
              teilen unsere Freude am Prankentanz mit dir.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/ueber-uns" className="btn-primary">
                Verein entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
          <span className="text-xs uppercase tracking-widest">Entdecken</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Intro / Features */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Willkommen bei uns</p>
            <h2 className="section-title mt-3">
              Brauchtum, das verbindet
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Der {club.name} ist seit {club.founded} fester Bestandteil des Brauchtumslebens in
              Engerwitzdorf und Umgebung. Mit Schwung, Tradition und Herz widmen wir uns
              ausschließlich dem Schuhplattler – bei Proben, Auftritten und Festen.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="card group h-full p-7 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-club-50 text-club-600 transition-colors group-hover:bg-club-600 group-hover:text-white">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-stone-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split section: alpine image + text */}
      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={actionImg}
                    alt="Schuhplattler bei einem energetischen Auftritt"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Stat badge */}
                <div className="absolute -bottom-6 -right-2 rounded-2xl bg-club-600 px-6 py-5 text-white shadow-xl sm:-right-6">
                  <div className="font-display text-3xl font-bold">{new Date().getFullYear() - club.founded}+</div>
                  <div className="text-xs uppercase tracking-wider text-club-100">Jahre Tradition</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="eyebrow">Unser Verein</p>
              <h2 className="section-title mt-3">Leidenschaft fürs Schuhplatteln</h2>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                Beim Schuhplattler geht es um mehr als nur den Tanz – es ist Ausdruck von Freude,
                Gemeinschaft und verwurzelter Heimatverbundenheit. Wir laden dich ein, Teil dieser
                lebendigen Tradition zu werden, egal ob als Plattlerin oder Plattler, als Fördermitglied
                oder als begeistertes Publikum. Die Teilnahme kostet nichts – jeder ist willkommen!
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Wöchentliche Schuhplattler-Proben für alle Altersgruppen',
                  'Regelmäßige Schuhplattler-Auftritte bei regionalen Festen',
                  'Gemeinsame Ausflüge und Vereinsfeiern',
                  'Jugendarbeit mit Spaß am Schuhplatteln',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-stone-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-club-100 text-club-600">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/ueber-uns" className="btn-outline mt-8">
                Mehr über uns
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-px">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Aktuelles</p>
              <h2 className="section-title mt-3">News & Termine</h2>
            </div>
            <Link
              to="/kontakt"
              className="text-sm font-semibold text-club-600 transition-colors hover:text-club-700"
            >
              Alle Termine ansehen
              <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {news.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <article className="card group h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={galleryImages[i % galleryImages.length].src}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="eyebrow">Eindrücke</p>
            <h2 className="section-title mt-3">Eindrücke aus unserem Vereinsleben</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-600">
              Ein Blick auf unsere Schuhplattler-Auftritte und das Vereinsleben.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 60}
                className={i === 0 ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2' : ''}
              >
                <div className="group h-full overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      i === 0 ? 'h-full min-h-[280px]' : 'h-40 sm:h-48'
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/galerie" className="btn-outline">
              Zur Galerie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-club-700 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, #fff 0%, transparent 30%), radial-gradient(circle at 85% 80%, #fca5a5 0%, transparent 35%)',
          }}
        />
        <div className="container-px relative text-center">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center">
              <Users className="h-10 w-10 text-club-200" />
              <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                Werde Teil unserer Gemeinschaft
              </h2>
              <p className="mt-4 text-lg text-club-100">
                Ob als aktives Mitglied oder als Förderer – die Teilnahme ist kostenlos. Wir freuen uns
                über jeden, der unsere Tradition mitträgt.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/mitgliedschaft"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-club-700 shadow-lg transition-all duration-300 hover:bg-cream-100 hover:shadow-xl active:scale-[0.97]"
                >
                  Mitgliedschaft entdecken
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" />
                  Probetermin vereinbaren
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
