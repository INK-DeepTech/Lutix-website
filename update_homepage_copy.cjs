const fs = require('fs');

let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// 1. Remove Leadership section
home = home.replace(/{\/\* Leadership \*\/}[\s\S]*?<\/section>/g, '');

// 2. Remove FOUNDERS import
home = home.replace(/import { FOUNDERS } from '\.\.\/data\/content';\n/g, '');

// 3. Replace text
home = home.replace(
  'Smart Automation for Your Whole Organization',
  'automate your needs'
);

// 4. Replace Hero Subtitle
home = home.replace(
  'Bring your engineering, finance, and operations teams onto one platform. Automate approvals, reduce busywork, and grow without needing to hire more people.',
  'To build a smarter, sustainable and future through technology and innovation.'
);

fs.writeFileSync('src/components/HomePage.tsx', home);
