const fs = require('fs');

// Remove CTA from HomePage
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
home = home.replace(/{\/\* Massive Bottom CTA \(Dark UI Card\) \*\/}[\s\S]*?(?=<\/div>\n  \);\n};)/, '');
fs.writeFileSync('src/components/HomePage.tsx', home);

// Add CTA to Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
const cta = `
      {/* Massive CTA for all pages */}
      <div className="bg-[#064089] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-12 max-w-4xl">
            Ready to build a smarter future?
          </h2>
          <button 
            onClick={() => onRouteChange('demo')}
            className="bg-white text-[#064089] hover:bg-slate-100 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Book Your Free Demo
          </button>
        </div>
      </div>
`;
footer = footer.replace(/<footer className="bg-\[\#0f172a\] text-white py-24 border-t border-slate-800">/, '<footer className="bg-[#0f172a] text-white flex flex-col w-full">\n' + cta + '\n      <div className="py-24 border-t border-[#1e293b] w-full">');
// We need an extra closing div at the end before </footer>
footer = footer.replace(/<\/footer>/, '      </div>\n    </footer>');

fs.writeFileSync('src/components/Footer.tsx', footer);
