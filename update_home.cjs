const fs = require('fs');

let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Replace "Why Us" gradient with bg-brand-ice
home = home.replace(
  /bg-gradient-to-br from-blue-50 via-white to-indigo-50/g,
  'bg-brand-ice'
);

// Remove the old blue/indigo gradients from the icon containers
home = home.replace(
  /bg-gradient-to-br from-blue-100 to-indigo-100/g,
  'bg-brand-mint'
);

// Services cards background
home = home.replace(
  /bg-\[#f8fcf8\] dark:bg-slate-800 rounded-3xl/g,
  'bg-white/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl'
);

// Also fix any residual old colors
home = home.replace(/hover:border-\[#3525cd\]\/30/g, 'hover:border-brand-cyan/30');

// "Accents: Use the brand-rust (#964734) sparingly as an accent color—such as for small subheadings..."
// For example, "Executive Leadership" subheading
home = home.replace(
  /<span className="text-sm font-bold text-brand-teal dark:text-\[#8b80f9\] uppercase tracking-widest">\s*Executive Leadership\s*<\/span>/,
  '<span className="text-sm font-bold text-brand-rust dark:text-brand-rust uppercase tracking-widest">\n            Executive Leadership\n          </span>'
);

home = home.replace(
  /<span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal\/10 text-brand-teal dark:text-\[#8b80f9\] rounded-full text-sm font-semibold">/,
  '<span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 text-brand-navy dark:text-brand-ice rounded-full text-sm font-semibold">'
);

fs.writeFileSync('src/components/HomePage.tsx', home);
