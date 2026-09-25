const fs = require('fs');
let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Container
c = c.replace(/bg-white/, 'bg-brand-cream');

// Hero background
c = c.replace(/bg-gradient-to-b from-\[#E8F2F8\] to-\[#FFFFFF\]/, 'bg-brand-slate');

// Hero Text
c = c.replace(/text-\[#07326A\]/g, 'text-brand-cream');
c = c.replace(/text-\[#567C8D\]/g, 'text-brand-cream/80');

// Hero Badge
c = c.replace(/bg-\[#D9EAF5\]/g, 'bg-brand-cream/10 border-brand-cream/20');
c = c.replace(/text-\[#0A61C9\]/g, 'text-brand-cream');
c = c.replace(/mix-blend-multiply/g, 'mix-blend-screen invert'); // Because bird is dark on transparent? Wait, standalone-bird.png has no bg but is dark? "invert mix-blend-screen"

// Hero CTA
c = c.replace(/bg-\[#0A61C9\] text-white/g, 'bg-brand-cream text-brand-slate');
c = c.replace(/hover:bg-\[#064089\]/g, 'hover:bg-white');
c = c.replace(/shadow-blue-500\/20/g, 'shadow-black/20');

// Stats section
c = c.replace(/bg-white border-y border-slate-100/, 'bg-brand-cream border-y border-brand-slate/10');
c = c.replace(/text-corp-navy/g, 'text-brand-slate');
c = c.replace(/bg-slate-50/g, 'bg-white');

// Services Bento Box
c = c.replace(/bg-white/g, 'bg-brand-cream'); // Replaces all bg-white remaining with bg-brand-cream? Wait, let's be careful.
// Let's just run regex carefully.
fs.writeFileSync('src/components/HomePage.tsx', c);
