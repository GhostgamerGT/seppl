import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { rehearsals } from '@/lib/siteData';

export default function Membership() {
  return (
    <div>
      <PageHeader
        eyebrow="Mitgliedschaft"
        title="Einfach vorbeischauen und mitplatteln"
        description="Die Teilnahme ist kostenlos. Komm zu einer Probe, lern uns kennen und mach einfach mit."
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Mitgliedschaft' }]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-club-100 text-club-700">
              <Users className="h-8 w-8" />
            </div>
            <p className="eyebrow mt-6">Keine Anmeldung nötig</p>
            <h2 className="section-title mt-3">Komm einfach vorbei</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Du möchtest Schuhplatteln ausprobieren? Dann komm ohne Verpflichtung zu einer
              unserer Proben. Die Teilnahme ist kostenlos und alle sind willkommen – ganz egal, ob
              du schon Erfahrung hast oder zum ersten Mal plattelst.
            </p>
            <Link to="/kontakt" className="btn-primary mt-8">
              Probetermin anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="eyebrow">Unsere Proben</p>
            <h2 className="section-title mt-3">Wann kannst du vorbeischauen?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-600">
              Such dir einfach den passenden Termin aus und komm direkt ins Vereinsheim.
              Eine vorherige Anmeldung ist nicht erforderlich.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {rehearsals.map((rehearsal, i) => (
              <Reveal key={rehearsal.group} delay={i * 100}>
                <div className="card flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-stone-900">{rehearsal.group}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-stone-500">
                      <MapPin className="h-4 w-4 text-club-500" />
                      {rehearsal.location}
                    </p>
                  </div>
                  <div className="rounded-full bg-club-50 px-5 py-2.5 text-sm font-semibold text-club-700">
                    {rehearsal.day}, {rehearsal.time}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl bg-club-700 p-8 text-center text-white">
            <h3 className="font-display text-2xl font-semibold">Noch Fragen?</h3>
            <p className="mt-2 text-club-100">
              Schreib uns kurz oder ruf an. Wir sagen dir gerne, welcher Termin am besten passt.
            </p>
            <Link
              to="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-club-700 transition-colors hover:bg-cream-100"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
