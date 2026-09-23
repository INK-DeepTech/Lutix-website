const fs = require('fs');
let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const mockup = `
    {/* Floating UI Mockup */}
    <div className="mt-20 w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer group">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
        <FileText className="w-8 h-8 text-[#0A61C9]" />
      </div>
      <div className="flex-1 space-y-3 w-full text-left">
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#07326A] text-lg">Shareholder Agreement.pdf</span>
          <span className="text-xs font-bold text-[#0A61C9] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">Review with AI</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full w-full overflow-hidden shadow-inner">
            <div className="h-full bg-[#0A61C9] w-3/4 rounded-full relative">
              <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
        </div>
        <div className="flex justify-between text-sm font-semibold text-[#567C8D]">
          <span>Analyzing clauses...</span>
          <span>75%</span>
        </div>
      </div>
    </div>
  </div>`;

c = c.replace(/<\/button>\s*<\/div>/, '</button>' + mockup);
fs.writeFileSync('src/components/HomePage.tsx', c);
