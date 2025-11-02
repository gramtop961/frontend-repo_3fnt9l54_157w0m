import { Wind, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-medium">
              <Wind className="h-3.5 w-3.5" />
              Wear the Wind. Save the Ocean.
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Nachhaltige Mode inspiriert von Wind, Wasser & Freiheit
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              MosiSails ist die Bekleidungs- und Accessoire-Marke für alle, die den maritimen
              Lifestyle leben – mit recycelten Materialien, Upcycling von Segeltuch und fairer Produktion in Europa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#produkte"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-white font-medium shadow hover:bg-sky-700 transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
                Kollektion entdecken
              </a>
              <a
                href="#nachhaltigkeit"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
              >
                Unsere Mission
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-400 to-cyan-300 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-[calc(theme(borderRadius.2xl)-2px)] bg-white grid place-items-center">
                <div className="text-center p-8">
                  <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">Upcycling • Recycled • Fair</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Segel trifft Stil</h3>
                  <p className="mt-2 text-slate-600 max-w-md mx-auto">
                    Taschen aus echtem Segeltuch, T-Shirts aus Meeresplastik und wetterfeste Outerwear –
                    funktional, stylisch und mit Geschichte.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 shadow p-4">
                <p className="text-sm font-medium text-slate-700">1% for the Ocean</p>
                <p className="text-xs text-slate-500">Jeder Kauf unterstützt Meeresschutzprojekte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
