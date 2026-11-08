import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Crumb = { label: string; to?: string };

type Props = {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  crumbs?: Crumb[];
};

export default function PageHeader({ title, eyebrow, description, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-stone-900 pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #f87171 0%, transparent 40%), radial-gradient(circle at 80% 70%, #b91c1c 0%, transparent 45%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900" />
      <div className="container-px relative">
        {crumbs && (
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-stone-400">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-club-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-stone-200">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-stone-600" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow !text-club-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">{description}</p>
        )}
      </div>
    </section>
  );
}
