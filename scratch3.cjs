const fs = require('fs');

let contentPath = 'a:/Website lutix/src/data/content.ts';
let contentFile = fs.readFileSync(contentPath, 'utf8');

// We can just add Karthik to FOUNDERS in content.ts by replacing the array.
contentFile = contentFile.replace(/export const FOUNDERS: LeaderProfile\[\] = \[[\s\S]*?\];/, `export const FOUNDERS: LeaderProfile[] = [
  {
    name: 'Iswarya',
    role: 'Co-Founder & Chief Executive Officer',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.iswarya,
  },
  {
    name: 'Nithishkumar',
    role: 'Co-Founder & Chief Technology Officer',
    badge: '',
    bio: '',
    focus: '',
    image: IMAGES.nithishkumar,
  },
  {
    name: 'Karthik Balaji',
    role: 'Chief Operating Officer',
    badge: 'Operations, Documentation & Finance',
    bio: '',
    focus: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3XWqF15PtUweWAR-1WD4YKTEAG6nDjn34mA_z9zOvNKYf3gTSDOFuDiDhZv1z8my3NbVHCqk4Dy01-BZlI_j6pZUAl7rgJWAmXlb_aQYrOIzlgrV6_ic7uMZwi5I_Seewi8R_uCkdNIfzIuCTslSGTwKF1D540xEYsT2ygof12_m7Cmee0T6CSdzz1PmLDoPvQRZov8kejrnkt9zY5ClDHHQiJUihIT8ssrr-h75ZbBWDo7P7CQFH', // dummy image, same as office
  },
];`);

fs.writeFileSync(contentPath, contentFile);

// Now CompanyPage.tsx
let companyPath = 'a:/Website lutix/src/components/CompanyPage.tsx';
let company = fs.readFileSync(companyPath, 'utf8');

// 1. Remove sub-text and bio from founders
company = company.replace(/<span className=\"text-xs text-\[\#464555\] mt-1 block font-medium\">\s*\{leader\.badge\}\s*<\/span>/g, '<span className="text-xs text-[#464555] mt-1 block font-medium">{leader.badge}</span>'); 
company = company.replace(/<p className=\"text-sm text-\[\#464555\] leading-relaxed\">\s*\{leader\.bio\}\s*<\/p>/g, '{leader.bio && <p className="text-sm text-[#464555] leading-relaxed">{leader.bio}</p>}');
company = company.replace(/<div className=\"flex items-center gap-2 pt-4 border-t border-\[\#e2e7ff\] text-xs text-\[\#464555\]\">\s*<span className=\"font-semibold text-\[\#131b2e\]\">Focus:<\/span>\s*<span>\{leader\.focus\}<\/span>\s*<\/div>/g, '{leader.focus && <div className="flex items-center gap-2 pt-4 border-t border-[#e2e7ff] text-xs text-[#464555]"><span className="font-semibold text-[#131b2e]">Focus:</span><span>{leader.focus}</span></div>}');
company = company.replace(/\{leader\.badge\}/g, '{leader.badge && <span>{leader.badge}</span>}'); // fix badge conditionally

// Flatten Technical Support section
// The section has:
/*
          <div className="max-w-5xl mx-auto w-full pt-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f2f3ff] border border-[#e2e7ff]">
              <div>
                <span className="text-sm font-semibold text-[#131b2e] block">Technical Architecture Council</span>
                <span className="text-xs text-[#464555]">Infrastructure and engineering leadership</span>
              </div>
              <button 
                onClick={() => setShowExtendedTeam(!showExtendedTeam)}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-white text-[#3525cd] border border-[#dae2fd] hover:bg-[#e2e7ff] transition-all"
                aria-expanded={showExtendedTeam}
              >
                {showExtendedTeam ? 'Hide Advisory Council' : 'View Engineering Council (3)'}
              </button>
            </div>

            {showExtendedTeam && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 animate-in fade-in duration-200">
                {EXTENDED_LEADERSHIP.map((leader) => (
*/
// Replace this logic
company = company.replace(/<button[\s\S]*?<\/button>/, ''); // removes the toggle button
company = company.replace(/\{showExtendedTeam && \(/g, '('); // removes the conditional
company = company.replace(/<div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 animate-in fade-in duration-200\">\s*\{EXTENDED_LEADERSHIP\.map\(\(leader\) => \([\s\S]*?\}\s*<\/div>\s*\)\}/, (match) => {
  return match.replace(/animate-in fade-in duration-200/, '').slice(0, -3) + '</div>'; // slice out the `)}` at the end
});

// Since we replaced the first button, let's make sure it worked perfectly. It's better to just manually edit `CompanyPage.tsx` using a direct string replacement block for the Technical Support section.

fs.writeFileSync(companyPath, company);

console.log('done script creation');
