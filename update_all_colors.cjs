const fs = require('fs');
const glob = require('fs').readdirSync('src/components');

const comprehensiveReplacements = [
  // Backgrounds
  { from: /bg-\[#faf8ff\]/g, to: 'bg-brand-mint' },
  { from: /bg-white/g, to: 'bg-brand-mint' },
  { from: /bg-slate-50/g, to: 'bg-brand-ice' },
  { from: /bg-\[#f8fcf8\]/g, to: 'bg-brand-mint' },
  
  // Specific instruction: use bg-[#f8fcf8] or bg-brand-mint for main backgrounds, let's stick to bg-brand-mint for all those and bg-brand-ice for sections
  
  // Colors
  { from: /text-\[#131b2e\]/g, to: 'text-brand-navy' },
  { from: /text-slate-900/g, to: 'text-brand-navy' },
  { from: /text-gray-900/g, to: 'text-brand-navy' },
  { from: /text-\[#464555\]/g, to: 'text-slate-600' }, // secondary text
  
  // Brand Teals and Cyans
  { from: /bg-\[#3525cd\]/g, to: 'bg-brand-teal' },
  { from: /bg-\[#4d44e3\]/g, to: 'bg-brand-cyan' },
  { from: /bg-\[#2b1da8\]/g, to: 'bg-brand-cyan' },
  
  { from: /text-\[#3525cd\]/g, to: 'text-brand-teal' },
  
  { from: /hover:bg-\[#4d44e3\]/g, to: 'hover:bg-brand-cyan' },
  { from: /hover:bg-\[#2b1da8\]/g, to: 'hover:bg-brand-cyan' },
  { from: /hover:text-\[#3525cd\]/g, to: 'hover:text-brand-cyan' },
  { from: /hover:border-\[#3525cd\]\/30/g, to: 'hover:border-brand-cyan/30' },
  { from: /hover:ring-\[#3525cd\]/g, to: 'hover:ring-brand-cyan' },
  { from: /focus:ring-\[#3525cd\]\/40/g, to: 'focus:ring-brand-teal/40' },
  
  { from: /bg-brand-teal\/10 text-brand-navy/g, to: 'bg-brand-teal/10 text-brand-teal' }, // Fix my earlier mistake in HomePage

  // Accents & Miscellaneous 
  { from: /text-blue-700/g, to: 'text-brand-teal' },
];

for (const file of glob) {
  if (file.endsWith('.tsx')) {
    const filePath = `src/components/${file}`;
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const r of comprehensiveReplacements) {
      content = content.replace(r.from, r.to);
    }
    
    // Services background explicit
    // In HomePage.tsx, we want services cards to be bg-white/80 backdrop-blur-sm
    if (file === 'HomePage.tsx') {
      content = content.replace(/className="text-left p-8 bg-brand-mint dark:bg-slate-800 rounded-3xl/g, 'className="text-left p-8 bg-white/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl');
    }

    fs.writeFileSync(filePath, content);
  }
}
