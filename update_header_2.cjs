const fs = require('fs');
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

// 1. Navbar background to vibrant gradient
header = header.replace(
  'className="w-full bg-brand-mint dark:bg-slate-900 text-brand-navy',
  'className="w-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:bg-slate-900 text-brand-navy'
);

// 2. Mix-blend-multiply for logo
header = header.replace(
  'className="h-16 md:h-24 lg:h-28 w-auto object-contain dark:invert transition-all"',
  'className="h-16 md:h-24 lg:h-28 w-auto object-contain mix-blend-multiply dark:invert transition-all"'
);

fs.writeFileSync('src/components/Header.tsx', header);
