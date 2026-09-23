const fs = require('fs');

// App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace('bg-brand-mint dark:bg-slate-900', 'bg-slate-50 dark:bg-slate-900');
fs.writeFileSync('src/App.tsx', app);

// HomePage.tsx
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Services Grid classes
home = home.replace(
  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'
);

// Card Paddings and Icon Sizes
home = home.replace(/p-8 bg-brand-mint\/80/g, 'p-3 md:p-4 bg-brand-mint/80');
home = home.replace(/w-14 h-14/g, 'w-10 h-10');
home = home.replace(/w-7 h-7/g, 'w-5 h-5');
home = home.replace(/mb-6 text-brand-teal/g, 'mb-3 text-brand-teal');
home = home.replace(/text-2xl font-bold/g, 'text-base md:text-lg font-bold');
home = home.replace(/mb-3">/g, 'mb-2">');

// Description Text Size
home = home.replace(
  /<p className="text-slate-600 dark:text-slate-400 leading-relaxed">/g,
  '<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">'
);

// "Why Us?" section container
home = home.replace(
  'py-32 px-4 sm:px-6 lg:px-8 bg-brand-ice dark:from-slate-900',
  'py-12 md:pb-16 h-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-slate-900'
);

// Highlights in "Why Us?"
home = home.replace(
  /<span className="text-brand-teal dark:text-blue-400 font-semibold">/g,
  '<span className="text-brand-cyan dark:text-cyan-400 font-bold">'
);

// Fix the encoding artifact in "Why Us?"
home = home.replace(/\?"/g, '—');

// Also Core Capabilities bg-brand-mint -> bg-slate-50
home = home.replace(
  'bg-brand-mint dark:bg-slate-900/50 py-24',
  'bg-slate-50 dark:bg-slate-900/50 py-24'
);
// Core capabilities cards inner background
home = home.replace(/p-8 bg-brand-mint dark:bg-slate-800 rounded-2xl/g, 'p-8 bg-white dark:bg-slate-800 rounded-2xl');

fs.writeFileSync('src/components/HomePage.tsx', home);
