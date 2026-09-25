const fs = require('fs');
let c = fs.readFileSync('src/components/AboutPage.tsx', 'utf8');

c = c.replace(/bg-\[#F1F7F9\]/g, 'bg-brand-cream');
c = c.replace(/text-\[#07326A\]/g, 'text-brand-slate');
c = c.replace(/text-\[#0A61C9\]/g, 'text-brand-slate');
c = c.replace(/text-\[#567C8D\]/g, 'text-brand-slate/80');

fs.writeFileSync('src/components/AboutPage.tsx', c);
