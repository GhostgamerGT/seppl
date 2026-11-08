import PageHeader from '@/components/PageHeader';

export default function Datenschutz() {
  return (
    <div>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Datenschutz' }]}
      />
      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-px max-w-3xl">
          <div className="card space-y-8 p-8 sm:p-10">
            <Section title="1. Datenschutz auf einen Blick">
              <p>
                Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln
                deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
            </Section>

            <Section title="2. Verantwortliche Stelle">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist der
                Engerwitzdorfer Schuhplattler, Marktplatz 1, 4209 Engerwitzdorf. Kontakt:
                kontakt@schuhplattler-engerwitzdorf.at
              </p>
            </Section>

            <Section title="3. Erhebung und Speicherung personenbezogener Daten">
              <p className="mb-2">Wenn du das Kontaktformular auf dieser Website nutzt, erheben wir folgende Daten:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (freiwillig)</li>
                <li>Betreff und Inhalt deiner Nachricht</li>
              </ul>
              <p className="mt-2">
                Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nach
                abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
            </Section>

            <Section title="4. Rechtsgrundlage">
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse zur Beantwortung deiner Anfrage) bzw. Art. 6 Abs. 1 lit. a DSGVO ( deine
                Einwilligung durch Absenden des Formulars).
              </p>
            </Section>

            <Section title="5. Deine Rechte">
              <p className="mb-2">Du hast jederzeit das Recht auf:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
            </Section>

            <Section title="6. Cookies">
              <p>
                Diese Website verwendet keine Tracking- oder Werbe-Cookies. Technisch notwendige
                Cookies, sofern eingesetzt, dienen ausschließlich dem reibungslosen Betrieb der
                Website und werden ohne Einwilligung gesetzt.
              </p>
            </Section>

            <Section title="7. Server-Logfiles">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                Server-Logfiles, die dein Browser automatisch übermittelt (z. B. Browsertyp,
                Betriebssystem, Uhrzeit der Anfrage). Diese sind nicht bestimmten Personen
                zuordenbar.
              </p>
            </Section>

            <Section title="8. Beschwerderecht">
              <p>
                Du hast das Recht, dich bei der zuständigen Aufsichtsbehörde
                (österreichische Datenschutzbehörde) über die Verarbeitung deiner personenbezogenen
                Daten zu beschweren.
              </p>
            </Section>

            <p className="border-t border-stone-200 pt-6 text-xs text-stone-400">
              Dies ist ein Platzhalter für die Datenschutzerklärung. Bitte lass die
              Datenschutzerklärung vor Veröffentlichung rechtlich prüfen und an die tatsächlichen
              Gegebenheiten anpassen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-stone-900">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-stone-600">{children}</div>
    </div>
  );
}
