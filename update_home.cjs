const fs = require('fs');
let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Global replaces for brand text
c = c.replace(/text-corp-navy/g, 'text-brand-slate');
c = c.replace(/text-corp-vibrant/g, 'text-brand-slate/80'); // Fallback for accents

// Hero
c = c.replace(/bg-gradient-to-b from-\[#E8F2F8\] to-\[#FFFFFF\]/g, 'bg-brand-slate');
c = c.replace(/bg-\[#D9EAF5\]/g, 'bg-brand-cream/10');
c = c.replace(/<span className="text-\[#0A61C9\] font-bold tracking-wide text-lg md:text-xl font-extrabold uppercase">/g, '<span className="text-brand-cream font-bold tracking-wide text-lg md:text-xl font-extrabold uppercase">');
c = c.replace(/<h1 className="text-6xl md:text-\[8rem\] leading-\[1\.1\] font-extrabold text-\[#07326A\]/g, '<h1 className="text-6xl md:text-[8rem] leading-[1.1] font-extrabold text-brand-cream');
c = c.replace(/<p className="text-xl md:text-3xl text-\[#567C8D\]/g, '<p className="text-xl md:text-3xl text-brand-cream/80');

// Hero button
c = c.replace(/<button onClick=\{\(\) => onRouteChange\('demo'\)\} className="bg-\[#0A61C9\] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-blue-500\/20 hover:bg-\[#064089\] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">/g, '<button onClick={() => onRouteChange(\'demo\')} className="bg-brand-cream text-brand-slate px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-black/20 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">');

// Hero bird icon (needs invert mix-blend-screen because background is dark)
// We already have `mix-blend-multiply`, let's just do a specific replace for the hero bird:
c = c.replace(/<img src="\/standalone-bird\.png" alt="Lutix Bird" className="h-7 w-7 object-contain mix-blend-multiply" \/>/g, '<img src="/standalone-bird.png" alt="Lutix Bird" className="h-7 w-7 object-contain invert mix-blend-screen" />');


// Other Sections (Light)
// Trusted by
c = c.replace(/<section className="py-24 bg-white border-y border-slate-100">/g, '<section className="py-24 bg-brand-cream border-y border-brand-slate/10">');
// Services
c = c.replace(/<section className="py-32 bg-white">/g, '<section className="py-32 bg-brand-cream">');
c = c.replace(/text-\[#07326A\]/g, 'text-brand-slate'); // e.g. Intelligent Solutions heading
c = c.replace(/bg-\[#F1F7F9\]/g, 'bg-white'); // Custom web & software card
c = c.replace(/bg-\[#0A61C9\]/g, 'bg-brand-slate'); // Intelligent Systems card
c = c.replace(/text-\[#567C8D\]/g, 'text-brand-slate/80'); 

// How it works
c = c.replace(/<section className="py-32 bg-\[#F8FAFC\]">/g, '<section className="py-32 bg-brand-cream">');

fs.writeFileSync('src/components/HomePage.tsx', c);
