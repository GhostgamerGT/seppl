import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { galleryImages, type GalleryImage } from '@/lib/siteData';

const categories: GalleryImage['category'][] = ['Auftritt', 'Probe', 'Fest'];
const allLabel = 'Alle';

export default function Gallery() {
  const [active, setActive] = useState<string>(allLabel);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    active === allLabel
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      <PageHeader
        eyebrow="Galerie"
        title="Bilder aus unserem Vereinsleben"
        description="Eindrücke von Schuhplattler-Auftritten, Proben und Festen."
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Galerie' }]}
      />

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-px">
          {/* Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {[allLabel, ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-club-600 text-white shadow-lg shadow-club-600/30'
                    : 'bg-white text-stone-600 hover:bg-club-50 hover:text-club-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <Reveal key={img.src} delay={i * 50}>
                <button
                  onClick={() => setLightbox(img)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur-sm">
                    {img.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-stone-500">Keine Bilder in dieser Kategorie.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-stone-300">{lightbox.alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
