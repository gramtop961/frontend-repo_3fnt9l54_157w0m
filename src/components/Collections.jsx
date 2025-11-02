import { Shirt, ShoppingBag, Crown, Wallet } from "lucide-react";

function Card({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
          <Icon className="h-5 w-5" />
        </div>
        {badge ? (
          <span className="text-xs font-medium rounded-full bg-emerald-100 text-emerald-700 px-2 py-1">{badge}</span>
        ) : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export default function Collections() {
  return (
    <section id="produkte" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Kollektion</h2>
          <p className="mt-2 text-slate-600">
            Maritime Essentials mit nachhaltigen Materialien und funktionalem Design.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={Shirt}
            title="T-Shirts & Hoodies"
            desc="Recycelte Bio-Baumwolle & SEAQUAL®-Garn – weich, langlebig, verantwortungsvoll. Ab 39 € / 69 €"
          />
          <Card
            icon={Crown}
            title="Segeljacken & Windbreaker"
            desc="Wetterfest, funktional & stylisch – gemacht für Küste und City."
            badge="Neu"
          />
          <Card
            icon={Wallet}
            title="Accessoires aus Segeltuch"
            desc="Taschen, Rucksäcke & Wallets aus echten, upgecycelten Segeln. 79–149 €"
          />
          <Card
            icon={ShoppingBag}
            title="Tauwerk & Details"
            desc="Armbänder & Schlüsselanhänger aus echtem Tauwerk – jedes Stück mit Geschichte. Ab 25 €"
          />
        </div>
      </div>
    </section>
  );
}
