const fs = require('fs');
let c = fs.readFileSync('src/components/Header.tsx', 'utf8');

c = c.replace(/bg-white\/80 backdrop-blur-md text-corp-navy sticky top-0 z-50 border-b border-slate-200/, 'bg-brand-slate/95 backdrop-blur-md text-brand-cream sticky top-0 z-50 border-b border-white/10');
c = c.replace(/mix-blend-multiply/g, 'invert mix-blend-screen');
c = c.replace(/text-slate-600/g, 'text-brand-cream/80');
c = c.replace(/text-corp-navy/g, 'text-brand-cream');
c = c.replace(/border-corp-navy/g, 'border-brand-cream');
c = c.replace(/hover:text-corp-vibrant/g, 'hover:text-white');
c = c.replace(/bg-\[#1e3b70\]/g, 'bg-brand-slate');
c = c.replace(/border-\[#2a4d8c\]/g, 'border-brand-cream/20');
c = c.replace(/bg-corp-vibrant text-white rounded-full text-sm font-bold hover:bg-corp-soft transition-colors shadow-sm/, 'bg-brand-cream text-brand-slate rounded-full text-sm font-bold hover:bg-white transition-colors shadow-sm');

fs.writeFileSync('src/components/Header.tsx', c);
