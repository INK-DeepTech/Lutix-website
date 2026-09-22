const fs = require('fs');

let contentPath = 'a:/Website lutix/src/data/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

// Replace FOUNDERS
content = content.replace(/export const FOUNDERS: LeaderProfile\[\] = \[[\s\S]*?\];/, `export const FOUNDERS: LeaderProfile[] = [
  {
    name: 'Karthik Balaji',
    role: 'COO - Operations, Documentation & Finance',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.office,
  },
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
];`);

content = content.replace(/export const EXTENDED_LEADERSHIP: LeaderProfile\[\] = \[[\s\S]*?\];/, 'export const EXTENDED_LEADERSHIP: LeaderProfile[] = [];');

fs.writeFileSync(contentPath, content);
console.log('content.ts updated');

// CompanyPage.tsx
let companyPath = 'a:/Website lutix/src/components/CompanyPage.tsx';
let company = fs.readFileSync(companyPath, 'utf8');

// 1. Remove EXTENDED_LEADERSHIP display logic entirely.
company = company.replace(/\{\/\* Extended Advisory & Engineering Council \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, '</div>\n        </div>\n      </section>');

// 2. Make the founders grid exactly 3 equal cards, centered and elegant
company = company.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">/, '<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">');

// We also need to fix the founder card rendering to only display Name and Title, removing badge, bio, focus.
// Wait, I already changed it to conditionally render in the previous step: `{leader.badge && ...}`
// Let's just rip out the card HTML and replace it with a clean minimalist card.
company = company.replace(/\{FOUNDERS\.map\(\(leader\) => \([\s\S]*?\}\s*<\/div>\s*\)\)\}/, `{FOUNDERS.map((leader) => (
              <div 
                key={leader.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e7ff] flex flex-col items-center text-center gap-4 hover:shadow-md transition-all"
              >
                <div 
                  className="w-24 h-24 rounded-full bg-cover bg-center shadow-md border border-[#dae2fd]"
                  style={{ backgroundImage: \`url('\${leader.image}')\` }}
                  role="img"
                  aria-label={leader.name}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-[#131b2e] font-serif">{leader.name}</h3>
                  <p className="text-sm text-[#3525cd] font-semibold">{leader.role}</p>
                </div>
              </div>
            ))}`);

fs.writeFileSync(companyPath, company);
console.log('CompanyPage.tsx updated');
