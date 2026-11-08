export const club = {
  name: 'Engerwitzdorfer Schuhplattler',
  shortName: 'Schuhplattler Engerwitzdorf',
  founded: 1985,
  location: 'Engerwitzdorf, Oberösterreich',
  address: 'Marktplatz 1, 4209 Engerwitzdorf',
  email: 'kontakt@schuhplattler-engerwitzdorf.at',
  phone: '+43 7235 12345',
  ibu: 'Obmann Josef Huber',
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: 'Verein' | 'Auftritt' | 'Probe' | 'Fest';
};

export const news: NewsItem[] = [
  {
    id: 'n1',
    date: '2026-12-15',
    title: 'Weihnachtsfeier im Vereinsheim',
    excerpt:
      'Auch heuer laden wir alle Mitglieder und Freunde des Vereins herzlich zur gemütlichen Weihnachtsfeier ein. Für Speis und Trank ist bestens gesorgt.',
    category: 'Fest',
  },
  {
    id: 'n2',
    date: '2026-11-22',
    title: 'Schuhplattler-Auftritt beim Adventmarkt Linz',
    excerpt:
      'Unsere Gruppe zeigt am 22. November um 15:00 Uhr auf dem Linzer Adventmarkt, was echtes Mühlviertler Brauchtum ist. Wir freuen uns über zahlreiches Publikum!',
    category: 'Auftritt',
  },
  {
    id: 'n3',
    date: '2026-11-01',
    title: 'Neue Probentermine ab Jänner',
    excerpt:
      'Ab Jänner 2027 gelten neue Probentermine. Die Dienstag-Proben beginnen künftig um 19:30 Uhr im Vereinsheim Engerwitzdorf.',
    category: 'Probe',
  },
  {
    id: 'n4',
    date: '2026-10-12',
    title: 'Erfolgreicher Auftritt beim Herbstfest',
    excerpt:
      'Beim traditionellen Herbstfest in Engerwitzdorf begeisterte unsere Gruppe mit einem schwungvollen Schuhplattler-Auftritt über 200 Gäste.',
    category: 'Auftritt',
  },
];

export type BoardMember = {
  name: string;
  role: string;
  email: string;
};

export const board: BoardMember[] = [
  { name: 'Josef Huber', role: 'Obmann', email: 'obmann@schuhplattler-engerwitzdorf.at' },
  { name: 'Maria Gruber', role: 'Obmann-Stellvertreterin', email: 'stellvertreter@schuhplattler-engerwitzdorf.at' },
  { name: 'Andreas Bauer', role: 'Kassier', email: 'kassier@schuhplattler-engerwitzdorf.at' },
  { name: 'Sabine Steiner', role: 'Schriftführerin', email: 'schrift@schuhplattler-engerwitzdorf.at' },
  { name: 'Thomas Eder', role: 'Reiseleiter', email: 'reisen@schuhplattler-engerwitzdorf.at' },
  { name: 'Lisa Moser', role: 'Jugendbetreuerin', email: 'jugend@schuhplattler-engerwitzdorf.at' },
];

export type RehearsalGroup = {
  group: string;
  day: string;
  time: string;
  location: string;
};

export const rehearsals: RehearsalGroup[] = [
  { group: 'Alle', day: 'Freitag', time: '20:00 Uhr', location: 'Vereinsheim Engerwitzdorf' },
];

export type MembershipTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Jugendmitglied',
    price: 'Kostenlos',
    period: '',
    features: [
      'Für Mitglieder bis 18 Jahre',
      'Freie Teilnahme am Schuhplattler-Training',
      'Mitwirkung bei Auftritten',
      'Vereinsheim-Nutzung',
    ],
  },
  {
    name: 'Aktives Mitglied',
    price: 'Kostenlos',
    period: '',
    features: [
      'Freie Teilnahme am Schuhplattler-Training',
      'Mitwirkung bei Auftritten & Ausflügen',
      'Vereinsheim-Nutzung',
      'Stimmrecht bei der Hauptversammlung',
      'Vereinskleidung wird gestellt',
    ],
    highlighted: true,
  },
  {
    name: 'Fördermitglied',
    price: 'Kostenlos',
    period: '',
    features: [
      'Unterstützung des Vereinslebens',
      'Einladung zu allen Veranstaltungen',
      'Namentliche Nennung im Jahresbericht',
      'Keine aktive Teilnahme erforderlich',
      'Freiwillige Spenden willkommen',
    ],
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Auftritt' | 'Probe' | 'Fest';
};

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/12327992/pexels-photo-12327992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Schuhplattler-Gruppe bei einem schwungvollen Bühnenauftritt', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/1581906/pexels-photo-1581906.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Energetischer Schuhplattler-Auftritt in traditioneller Tracht auf der Bühne', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/17453653/pexels-photo-17453653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Schuhplattler-Gruppe beim lebhaften Auftritt auf dem Stadtplatz', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/17453654/pexels-photo-17453654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Energetische Gruppenperformance beim Straßenfest', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/9275492/pexels-photo-9275492.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Tänzer in traditionellen Trachten während eines Bühnenauftritts', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/5871177/pexels-photo-5871177.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Historische Aufnahme eines Schuhplattler-Auftritts', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/12327983/pexels-photo-12327983.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Junge Schuhplattler beim Üben auf der Bühne', category: 'Probe' },
  { src: 'https://images.pexels.com/photos/33127581/pexels-photo-33127581.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Festliche Schuhplattler-Gruppe beim Straßenfest', category: 'Fest' },
  { src: 'https://images.pexels.com/photos/1574217/pexels-photo-1574217.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Paar im Trachtenoutfit beim Festtanz', category: 'Fest' },
  { src: 'https://images.pexels.com/photos/34342030/pexels-photo-34342030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Gruppe in traditioneller Festtagstracht im Freien', category: 'Fest' },
  { src: 'https://images.pexels.com/photos/34469151/pexels-photo-34469151.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Trachtengruppe beim Tanzen im Freien', category: 'Auftritt' },
  { src: 'https://images.pexels.com/photos/34469162/pexels-photo-34469162.jpeg?auto=compress&cs=tinysrgb&h=750&w=1200', alt: 'Trachtenpaar beim Herbsttanz im Park', category: 'Fest' },
];
