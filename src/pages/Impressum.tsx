import PageHeader from '@/components/PageHeader';
import { club } from '@/lib/siteData';

export default function Impressum() {
  return (
    <div>
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Impressum' }]}
      />
      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-px max-w-3xl">
          <div className="card space-y-8 p-8 sm:p-10">
            <Block title="Vereinsbezeichnung">
              <p>{club.name}</p>
              <p>Eingetragener Verein (ZVR-Zahl: 123456789)</p>
            </Block>

            <Block title="Anschrift">
              <p>{club.address}</p>
              <p>{club.location}</p>
            </Block>

            <Block title="Kontaktperson">
              <p>{club.ibu}</p>
              <p>
                E-Mail: <a className="text-club-600 hover:underline" href={`mailto:${club.email}`}>{club.email}</a>
              </p>
              <p>
                Telefon: <a className="text-club-600 hover:underline" href={`tel:${club.phone.replace(/\s/g, '')}`}>{club.phone}</a>
              </p>
            </Block>

            <Block title="Mitglied der Dachorganisation">
              <p>Landesverband für Schuhplatteln und Brauchtum Oberösterreich</p>
            </Block>

            <Block title="Aufsichtsbehörde">
              <p>Bezirkshauptmannschaft Urfahr-Umgebung</p>
            </Block>

            <Block title="Haftungsausschluss">
              <p className="leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </Block>

            <Block title="Urheberrecht">
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem österreichischen Urheberrecht. Beiträge Dritter sind als solche
                gekennzeichnet.
              </p>
            </Block>

            <p className="border-t border-stone-200 pt-6 text-xs text-stone-400">
              Dies ist ein Platzhalter-Impressum. Bitte ersetze die Angaben durch die
              tatsächlichen Vereinsdaten und lass das Impressum rechtlich prüfen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-stone-900">{title}</h2>
      <div className="mt-2 space-y-1 text-sm text-stone-600">{children}</div>
    </div>
  );
}
