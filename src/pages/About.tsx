import { Clock, MapPin, Mail, User } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { board, rehearsals, club } from '@/lib/siteData';

const aboutImg =
  'https://images.pexels.com/photos/17453653/pexels-photo-17453653.jpeg?auto=compress&cs=tinysrgb&w=1200';
const groupImg =
  'https://images.pexels.com/photos/9275492/pexels-photo-9275492.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Über uns"
        title="Der Verein & seine Menschen"
        description={`Erfahre mehr über den ${club.name}, unseren Vorstand und unsere Probezeit.`}
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Über uns' }]}
      />

      {/* History */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src={aboutImg} alt="Schuhplattler-Gruppe bei einem Auftritt" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow">Unsere Geschichte</p>
              <h2 className="section-title mt-3">Seit {club.founded} im Herzen des Mühlviertels</h2>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                Gegründet im Jahr {club.founded}, hat sich der {club.name} zu einer festen
                Größe im Brauchtumsleben der Region entwickelt. Was mit einer kleinen Gruppe
                engagierter Plattler begann, ist heute ein lebendiger Verein mit über 40 Mitgliedern.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Unser Anliegen ist es, den Schuhplattler – den traditionellen Prankentanz – zu
                bewahren und an die nächste Generation weiterzugeben. Regelmäßige Proben, Auftritte
                bei Festen und die Pflege des Gemeinschaftslebens stehen dabei im Mittelpunkt. Die
                Teilnahme ist für alle kostenlos.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: `${new Date().getFullYear() - club.founded}+`, label: 'Jahre Tradition' },
                  { num: '40+', label: 'Aktive Mitglieder' },
                  { num: '12+', label: 'Auftritte/Jahr' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                    <div className="font-display text-2xl font-bold text-club-600">{stat.num}</div>
                    <div className="mt-1 text-xs text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorstand */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="eyebrow">Unser Team</p>
            <h2 className="section-title mt-3">Der Vorstand</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-600">
              Unser ehrenamtliches Vorstandsteam kümmert sich um die Belange des Vereins und steht
              dir bei Fragen gerne zur Verfügung.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="card group flex items-center gap-4 p-6 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-club-50 text-club-600 transition-colors group-hover:bg-club-600 group-hover:text-white">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-stone-900">{m.name}</h3>
                    <p className="text-sm text-club-600">{m.role}</p>
                    <a
                      href={`mailto:${m.email}`}
                      className="mt-1 flex items-center gap-1.5 text-xs text-stone-500 transition-colors hover:text-club-600"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {m.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rehearsal times */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Unsere Probe</p>
              <h2 className="section-title mt-3">Jeden Freitag um 20 Uhr</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Neue Mitglieder sind jederzeit herzlich willkommen – die Teilnahme ist kostenlos.
                Komm einfach vorbei, eine vorherige Anmeldung ist nicht erforderlich.
              </p>
              <div className="mt-8 space-y-4">
                {rehearsals.map((r) => (
                  <div key={r.group} className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-base font-semibold text-stone-900">{r.group}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-stone-500">
                        <MapPin className="h-3.5 w-3.5 text-club-500" />
                        {r.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-club-50 px-4 py-2 text-sm font-medium text-club-700">
                      <Clock className="h-4 w-4" />
                      {r.day}, {r.time}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src={groupImg} alt="Schuhplattler in traditioneller Tracht auf der Bühne" className="h-full min-h-[400px] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
