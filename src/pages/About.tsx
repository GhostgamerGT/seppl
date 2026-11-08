import { Clock, MapPin, Mail, User } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { board, rehearsals, club } from '@/lib/siteData';

const aboutImg = '/images/gruppe-seppl.jpg';
const groupImg = '/images/holzhacker3.jpg';

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Über uns"
        title="Der Verein & seine Menschen"
        description={`Erfahre mehr über die ${club.name}, unseren Vorstand und unsere Probezeit.`}
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
                Gegründet im Jahr {club.founded}, haben sich die {club.name} zu einer festen
                Größe im Brauchtumsleben der Region entwickelt. Was mit einer kleinen Gruppe
                engagierter Plattler begann, ist heute ein lebendiger Verein mit über 40 Mitgliedern.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Unser Anliegen ist es, den Schuhplattler zu
                bewahren und an die nächste Generation weiterzugeben. Regelmäßige Proben, Auftritte
                bei Festen und die Pflege des Gemeinschaftslebens stehen dabei im Mittelpunkt. Die
                Teilnahme ist für alle kostenlos.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: `${new Date().getFullYear() - club.founded}+`, label: 'Jahre Tradition' },
                  { num: '40+', label: 'Aktive Mitglieder' },
                  { num: '3+', label: 'Auftritte/Jahr' },
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
                <div className="card group overflow-hidden hover:-translate-y-1 hover:shadow-lg">
                  <img src={m.image} alt={m.name} className="h-56 w-full object-cover object-top" loading="lazy" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-stone-900">{m.name}</h3>
                    <p className="mt-1 text-sm text-club-600">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot and audio */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card flex h-full flex-col overflow-hidden sm:flex-row">
              <img src={club.mascotImage} alt="Maskottchen da Seppl" className="h-64 w-full object-cover object-top sm:h-auto sm:w-2/5" />
              <div className="p-7">
                <p className="eyebrow">Unser Maskottchen</p>
                <h2 className="section-title mt-2 text-3xl">Da Seppl</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">Natürlich gehört auch unser Maskottchen „da Seppl“ zum Verein.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-club-700 p-8 text-white">
              <Volume2 className="h-9 w-9 text-club-200" />
              <h2 className="mt-5 font-display text-3xl font-bold">Hörproben</h2>
              <p className="mt-3 max-w-md leading-relaxed text-club-100">Hör dir unsere Plattler-Musik und Auftrittsbeispiele direkt auf unserer Hörproben-Seite an.</p>
              <Link to="/hoerproben" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-club-700 transition-colors hover:bg-cream-100">
                Hörproben anhören
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
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
                Bei Interesse kannst du uns gerne eine E-Mail schreiben.
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
