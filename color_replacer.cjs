const fs = require('fs');
const glob = require('fs').readdirSync('src/components');

const replacements = [
  // Backgrounds
  { from: /bg-white/g, to: 'bg-[#f8fcf8]' },
  { from: /bg-slate-50/g, to: 'bg-brand-mint' },
  
  // Text
  { from: /text-slate-900/g, to: 'text-brand-navy' },
  { from: /text-gray-900/g, to: 'text-brand-navy' },
  
  // Blues to Teals/Cyans
  { from: /bg-\[#3525cd\]/g, to: 'bg-brand-teal' },
  { from: /text-\[#3525cd\]/g, to: 'text-brand-teal' },
  { from: /hover:text-\[#3525cd\]/g, to: 'hover:text-brand-cyan' },
  { from: /hover:bg-\[#2b1da8\]/g, to: 'hover:bg-brand-cyan' },
  { from: /hover:ring-\[#3525cd\]/g, to: 'hover:ring-brand-cyan' },
  { from: /text-blue-700/g, to: 'text-brand-teal' },
];

for (const file of glob) {
  if (file.endsWith('.tsx')) {
    const filePath = `src/components/${file}`;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First apply basic replacements
    for (const r of replacements) {
      content = content.replace(r.from, r.to);
    }

    fs.writeFileSync(filePath, content);
  }
}
console.log('Replacements done');
