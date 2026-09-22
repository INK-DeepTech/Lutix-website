const fs = require('fs');

let path = 'a:/Website lutix/src/data/content.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/export const FOUNDERS: LeaderProfile\[\] = \[[\s\S]*?\];/, `export const FOUNDERS: LeaderProfile[] = [
  {
    name: 'Iswarya',
    role: 'CEO & Co-Founder',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.iswarya,
  },
  {
    name: 'Nithishkumar',
    role: 'CTO & Co-Founder',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.nithishkumar,
  },
  {
    name: 'Karthik Balaji',
    role: 'COO',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.office,
  },
];`);

fs.writeFileSync(path, content);
console.log('updated content.ts');
