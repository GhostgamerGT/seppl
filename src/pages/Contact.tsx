import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { club } from '@/lib/siteData';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg(
        'Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder schreib uns direkt per E-Mail.',
      );
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Kontakt"
        title="Schreib uns"
        description="Du hast Fragen zum Verein, zur Probe oder zu Auftritten? Wir freuen uns auf deine Nachricht."
        crumbs={[{ label: 'Start', to: '/' }, { label: 'Kontakt' }]}
      />

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Info column */}
            <Reveal>
              <div className="space-y-6">
                <div className="card p-7">
                  <h3 className="font-display text-xl font-semibold text-stone-900">Kontaktdaten</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-club-50 text-club-600">
                        <MapPin className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="font-medium text-stone-900">Adresse</div>
                        <div className="text-stone-600">{club.address}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-club-50 text-club-600">
                        <Mail className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="font-medium text-stone-900">E-Mail</div>
                        <a href={`mailto:${club.email}`} className="text-stone-600 transition-colors hover:text-club-600">
                          {club.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-club-50 text-club-600">
                        <Phone className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="font-medium text-stone-900">Telefon</div>
                        <a href={`tel:${club.phone.replace(/\s/g, '')}`} className="text-stone-600 transition-colors hover:text-club-600">
                          {club.phone}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-club-700 p-7 text-white">
                  <h3 className="font-display text-lg font-semibold">Probentermin vereinbaren?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-club-100">
                    Du möchtest uns erst einmal unverbindlich kennenlernen? Sprich uns an – wir
                    laden dich herzlich zu einer Schnupperprobe ein.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={150}>
              <div className="card p-7 sm:p-9">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-stone-900">Nachricht gesendet!</h3>
                    <p className="mt-2 max-w-md text-sm text-stone-600">
                      Vielen Dank für deine Nachricht. Wir melden uns so bald wie möglich bei dir.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-outline mt-6"
                    >
                      Neue Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-semibold text-stone-900">Kontaktformular</h3>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Name *"
                        value={form.name}
                        onChange={(v) => update('name', v)}
                        required
                        placeholder="Dein Name"
                      />
                      <Field
                        label="E-Mail *"
                        type="email"
                        value={form.email}
                        onChange={(v) => update('email', v)}
                        required
                        placeholder="name@beispiel.at"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Telefon"
                        type="tel"
                        value={form.phone}
                        onChange={(v) => update('phone', v)}
                        placeholder="+43 ..."
                      />
                      <Field
                        label="Betreff *"
                        value={form.subject}
                        onChange={(v) => update('subject', v)}
                        required
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-700">Nachricht *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        required
                        rows={5}
                        placeholder="Deine Nachricht an uns..."
                        className="w-full rounded-xl border border-stone-300 bg-cream-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-club-500 focus:ring-2 focus:ring-club-200"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Nachricht senden
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-stone-400">
                      Mit dem Absenden stimmst du zu, dass wir deine Daten zur Bearbeitung deiner
                      Anfrage verwenden. Mehr dazu findest du in der{' '}
                      <a href="/datenschutz" className="text-club-600 hover:underline">Datenschutzerklärung</a>.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-stone-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-300 bg-cream-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-club-500 focus:ring-2 focus:ring-club-200"
      />
    </div>
  );
}
