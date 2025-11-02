import { Recycle, Leaf, Globe, Shield } from "lucide-react";

function Pillar({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export default function Sustainability() {
  return (
    <section id="nachhaltigkeit" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Nachhaltigkeit</h2>
          <p className="mt-2 text-slate-600">
            Weniger Ressourcen. Mehr Verantwortung. Jedes Produkt erzählt eine Geschichte –
            von Segeln, die weiterleben, und Ozeanen, die wir schützen.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Pillar
            icon={Recycle}
            title="Upcycling von Segeln"
            desc="Wir sammeln gebrauchte Segel, bereiten sie auf und fertigen daraus Unikate."
          />
          <Pillar
            icon={Leaf}
            title="Recycelte Stoffe"
            desc="SEAQUAL®-Garn und recycelte Bio-Baumwolle reduzieren Abfall und Emissionen."
          />
          <Pillar
            icon={Shield}
            title="Faire Produktion"
            desc="Kurze Wege in Deutschland/EU, transparente Lieferketten und faire Standards."
          />
          <Pillar
            icon={Globe}
            title="1% for the Ocean"
            desc="Ein Teil jedes Umsatzes geht an Meeresschutzprojekte – für lebendige Meere."
          />
        </div>
      </div>
    </section>
  );
}
