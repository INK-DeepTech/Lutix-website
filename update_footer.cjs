const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

c = c.replace(/bg-\[#0f172a\]/g, 'bg-brand-slate');
c = c.replace(/invert brightness-0/g, 'invert mix-blend-screen');

// Let's also check if there is the "bg-[#064089]" global CTA inside footer
c = c.replace(/bg-\[#064089\]/g, 'bg-brand-slate'); // Or maybe bg-brand-slate but slightly different? The global CTA is already bg-[#064089] maybe.
// Let's just make sure text and buttons in the CTA are correct.
// Global CTA button:
c = c.replace(/bg-white text-corp-navy hover:bg-slate-100/g, 'bg-brand-cream text-brand-slate hover:bg-white');

fs.writeFileSync('src/components/Footer.tsx', c);
