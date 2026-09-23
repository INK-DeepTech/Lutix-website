const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Fix Footer Logo Blend
footer = footer.replace(
  'brightness-0 invert',
  'invert mix-blend-screen'
);

// Widen the layout in Footer too
footer = footer.replace(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  'max-w-[1400px] w-full mx-auto px-6 md:px-12'
);

fs.writeFileSync('src/components/Footer.tsx', footer);

let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Hero Content & Massive Typography
home = home.replace(
  'Braid – AI SaaS Business Automation Platform',
  'Lutix DeepTech'
);

home = home.replace(
  'text-4xl md:text-5xl lg:text-6xl font-bold',
  'text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight'
);

// Subheadline update
home = home.replace(
  'To build a smarter, sustainable and future through technology and innovation.',
  'Imagine, Innovate, and Impact. An intelligent technology solutions company.'
);

home = home.replace(
  'text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed',
  'text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed'
);

// Fix the Badge
home = home.replace(
  'automate your needs',
  'Automate Your Needs'
);

home = home.replace(
  '<span className="text-[18px]">bolt</span>',
  '' // wait, it might be <img src="/bird-icon.png"... Let's replace the whole span
);

const oldBadgeRegex = /<img src="\/bird-icon\.png" alt="Lutix Icon" className="w-4 h-4 object-contain" \/>/;
home = home.replace(oldBadgeRegex, '<img src="/standalone-bird.png" alt="Lutix Icon" className="h-6 w-6 object-contain mix-blend-multiply bg-transparent" />');

home = home.replace(
  /text-sm font-semibold/,
  'text-base md:text-lg font-bold'
);

// Widen Layout
home = home.replace(/max-w-7xl/g, 'max-w-[1400px] w-full');
home = home.replace(/max-w-4xl/g, 'max-w-[1400px] w-full');
home = home.replace(/px-4 sm:px-6 lg:px-8/g, 'px-6 md:px-12');

fs.writeFileSync('src/components/HomePage.tsx', home);

// Widen Header
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', 'max-w-[1400px] w-full mx-auto px-6 md:px-12');
fs.writeFileSync('src/components/Header.tsx', header);

