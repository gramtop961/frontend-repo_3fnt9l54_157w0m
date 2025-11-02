import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Sustainability from "./components/Sustainability";
import { Users, Globe } from "lucide-react";

function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Vision & Community</h2>
            <p className="mt-3 text-slate-600">
              Wir zeigen, dass Mode nicht nur gut aussehen, sondern auch Gutes bewirken kann. Langfristig wird
              MosiSails die führende nachhaltige Segel-Lifestyle-Marke Europas – mit Kollektionen, Events und einer
              Community, die für Wind, Freiheit und Verantwortung steht.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Ambassadors & Vereine</p>
                  <p className="text-sm text-slate-600">Koops mit Segelclubs, Regatten & Creator:innen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">E-Commerce Fokus</p>
                  <p className="text-sm text-slate-600">Own Store, Pop-ups in Häfen & auf Regatten.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">Storytelling</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Jedes Produkt hat eine Geschichte</h3>
            <p className="mt-3 text-slate-600">
              Von der „Bavaria 38 – Kiel 2022“ zur Tasche auf deiner Schulter: Wir machen Herkunft sichtbar und
              feiern echte Segel-Abenteuer. Teile deinen <span className="font-semibold text-slate-900">#MosiMoment</span> in Social Media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function KontaktSection() {
  return (
    <section id="kontakt" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 p-[2px] shadow-lg">
          <div className="rounded-[calc(theme(borderRadius.2xl)-2px)] bg-white px-6 py-10 sm:px-10">
            <div className="grid gap-6 sm:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Bereit, Kurs zu setzen?</h3>
                <p className="mt-2 text-slate-600">Ob Kooperation, Club Wear oder erste Bestellung – lass uns sprechen.</p>
              </div>
              <div className="sm:text-right">
                <a
                  href="mailto:hello@mosisails.com"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 font-medium text-white shadow hover:bg-sky-700 transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200/70 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Sustainability />
        <VisionSection />
        <KontaktSection />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MosiSails Clothing. Alle Rechte vorbehalten.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#produkte" className="hover:text-slate-900">Produkte</a>
            <a href="#nachhaltigkeit" className="hover:text-slate-900">Nachhaltigkeit</a>
            <a href="#vision" className="hover:text-slate-900">Vision</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
