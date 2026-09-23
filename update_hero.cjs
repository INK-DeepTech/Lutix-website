const fs = require('fs');

const replacement = `      <div className="relative bg-gradient-to-b from-[#E8F2F8] to-[#FFFFFF] min-h-[80vh] pt-32 pb-20 px-6 overflow-hidden flex items-center justify-center">
  {/* Braid Background Plus Pattern */}
  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#749DC8 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
  
  <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">
    
    {/* Automate Your Needs Badge */}
    <div className="inline-flex items-center gap-3 bg-[#D9EAF5] px-6 py-2.5 rounded-full mb-12 shadow-sm border border-white/60">
       {/* Note: Ensure 'bird-icon.png' is the transparent bird-only file in the public folder */}
       <img src="/standalone-bird.png" alt="Lutix Bird" className="h-7 w-7 object-contain mix-blend-multiply" />
       <span className="text-[#0A61C9] font-bold tracking-wide text-sm md:text-base uppercase">Automate Your Needs</span>
    </div>

    {/* Massive Braid Typography */}
    <h1 className="text-6xl md:text-[8rem] leading-[1.1] font-extrabold text-[#07326A] tracking-tighter mb-8 font-serif w-full">
      Lutix DeepTech
    </h1>
    
    {/* Subtitle */}
    <p className="text-xl md:text-3xl text-[#567C8D] max-w-4xl mx-auto mb-14 font-medium leading-relaxed">
      Imagine, Innovate, and Impact. An intelligent technology solutions company.
    </p>

    {/* Braid Pill Button */}
    <button onClick={() => onRouteChange('demo')} className="bg-[#0A61C9] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-blue-500/20 hover:bg-[#064089] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
      Get Started <span className="text-2xl font-light">→</span>
    </button>
  </div>
</div>`;

let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
c = c.replace(/\{\/\* Hero Section \*\/\}[\s\S]*?<\/section>/, replacement);
fs.writeFileSync('src/components/HomePage.tsx', c);
