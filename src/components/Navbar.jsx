import { Anchor } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5" id="top">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white">
              <Anchor className="h-5 w-5" />
            </span>
            <span>MosiSails Clothing</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#produkte" className="hover:text-slate-900 transition-colors">Produkte</a>
            <a href="#nachhaltigkeit" className="hover:text-slate-900 transition-colors">Nachhaltigkeit</a>
            <a href="#vision" className="hover:text-slate-900 transition-colors">Vision</a>
            <a href="#kontakt" className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition-colors">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
