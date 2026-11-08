export const club = {
  name: 'Engerwitzdorfer Schuhplattler',
  shortName: 'Schuhplattler Engerwitzdorf',
  founded: 1993,
  location: 'Engerwitzdorf, Oberösterreich',
  address: 'Lerchenweg 16, 4209 Engerwitzdorf',
  email: 'kontakt@schuhplattler-engerwitzdorf.at',
  phone: '+43 664 6152620',
  ibu: 'Leiter Roland Gutenbrunner',
  audioUrl: 'https://sepplcc.jimdoweb.com/h%C3%B6rproben',
  mascotImage: 'https://image.jimcdn.com/app/cms/image/transf/dimension=335x10000:format=jpg/path/seaded713c93d3f2f/image/i9357ffd47325e34c/version/1537389119/image.jpg',
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
  { name: 'Roland Gutenbrunner', role: 'Leiter', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=335x10000:format=jpg/path/seaded713c93d3f2f/image/i21415f4b9a8b2608/version/1542048679/image.jpg' },
  { name: 'Berthold Pils', role: 'Leiter-Stellvertreter', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=281x10000:format=jpg/path/seaded713c93d3f2f/image/ib7cdf8803c97e302/version/1542048740/image.jpg' },
  { name: 'Philipp Minichberger', role: 'Kassier', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=281x10000:format=jpg/path/seaded713c93d3f2f/image/idd442239f905ca66/version/1542048698/image.jpg' },
  { name: 'Andreas Mairhofer', role: 'Kassier-Stellvertreter', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=281x10000:format=jpg/path/seaded713c93d3f2f/image/i008cee3ebf75009f/version/1542048729/image.jpg' },
  { name: 'Martin', role: 'Schriftführer', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=281x10000:format=jpg/path/seaded713c93d3f2f/image/ib09261716f15b8fa/version/1542048707/image.jpg' },
  { name: 'Herwig Rammer', role: 'Schriftführer-Stellvertreter', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=281x10000:format=jpg/path/seaded713c93d3f2f/image/i935d3fd3fdac789a/version/1542048718/image.jpg' },
];

export type RehearsalGroup = {
  group: string;
  day: string;
  time: string;
  location: string;
};

export const rehearsals: RehearsalGroup[] = [
  { group: 'Probe', day: 'Freitag', time: '20:00 Uhr', location: 'Riepl Gallneukirchen' },
];

export type MembershipTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
};


export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Auftritt' | 'Probe' | 'Fest';
};

export const galleryImages: GalleryImage[] = [
  { 
    src: '/images/bier.jpg', 
    alt: 'Schuhplattler beim schwungvollen Auftritt mit Bierkrug auf der Tanzfläche', 
    category: 'Auftritt' 
  },
  { 
    src: '/images/gruppe-maibaum2.jpg', 
    alt: 'Großes Gruppenfoto der Engerwitzdorfer Schuhplattler vor dem Festzelt beim Maibaumaufstellen', 
    category: 'Auftritt' 
  },
  { 
    src: '/images/gruppe-maibaum5.jpg', 
    alt: 'Trachtengruppe der Schuhplattler aufgereiht beim Festakt am Stadtplatz', 
    category: 'Auftritt' 
  },
  { 
    src: '/images/gruppe-seppl.jpg', 
    alt: 'Offizielles Vereinsfoto der gesamten Plattler-Gruppe in traditioneller Lederhose', 
    category: 'Auftritt' 
  },
  { 
    src: '/images/gruppe-sponsor.jpg', 
    alt: 'Gruppenbild mit den Sponsoren des Vereins', 
    category: 'Auftritt' 
  },
  { 
    src: '/images/holzhacker.jpg', 
    alt: 'Schuhplattler-Mitglieder konzentriert beim gemeinsamen Proben am Holzhacker', 
    category: 'Probe' 
  },
  { 
    src: '/images/holzhacker2.jpg', 
    alt: 'Vereinsprobe in der Halle zur Vorbereitung auf den nächsten Auftritt', 
    category: 'Probe' 
  },
  { 
    src: '/images/holzhacker3.jpg', 
    alt: 'Die Plattler beim Einstudieren des Holzhackers', 
    category: 'Probe' 
  },
  { 
    src: '/images/riepl.jpg', 
    alt: 'Gemütliches Zusammensitzen und Kameradschaftspflege der Vereinsmitglieder beim Riepl', 
    category: 'Fest' 
  },
  { 
    src: '/images/wandertag.jpg', 
    alt: 'Gut gelaunte Vereinsgruppe beim gemeinsamen Wandertag', 
    category: 'Fest' 
  },
  { 
    src: '/images/wandertag2.jpg', 
    alt: 'Gemeinsames Foto der gesamten Trachtengruppe am Berggipfel im Wald beim Vereinsausflug', 
    category: 'Fest' 
  },
  { 
    src: '/images/wandertag-abschluss.jpg', 
    alt: 'Vereinsmitglieder beim Musizieren mit der Harmonika und Trommel beim gemütlichen Ausklang', 
    category: 'Probe' 
  },
  { 
    src: '/images/wandertag-landschaft.jpg', 
    alt: 'Idyllischer Ausblick auf die hügelige Landschaft des Mühlviertels rund um Engerwitzdorf', 
    category: 'Fest' 
  }
];