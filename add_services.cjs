const fs = require('fs');

const servicesHTML = `
      {/* Services Bento Box */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#07326A] mb-6">
              <img src="/bird-icon.png" alt="Lutix Bird" className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 object-contain mix-blend-multiply" />
              Intelligent Solutions for Every Scale
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From modern tech startups to traditional local businesses—like a wholesale dhal trader—we bridge the gap. We turn complex operations into simple, scalable tools that actually work for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            <div className="lg:col-span-2 bg-[#F1F7F9] rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#0A61C9] mb-6"><Code className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-[#07326A] mb-4">Custom Web & Software</h3>
                <p className="text-lg text-[#567C8D] leading-relaxed">End-to-end bespoke digital platforms designed specifically for your operational requirements.</p>
              </div>
            </div>
            <div className="bg-[#0A61C9] rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6"><Zap className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-white mb-4">Intelligent Systems</h3>
                <p className="text-lg text-blue-100 leading-relaxed">AI and intelligent automations integrated directly into your workflow.</p>
              </div>
            </div>
            <div className="lg:col-span-3 bg-slate-900 rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex items-end">
              <div className="relative z-10 w-full md:w-1/2">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6"><Truck className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-white mb-4">Supply Chain Solutions</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Advanced logistics, predictive routing, and comprehensive inventory intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Insert servicesHTML right before How It Works
c = c.replace(/\{\/\* How It Works \(Vertical Flow\) \*\/\}/, servicesHTML + '\n      {/* How It Works (Vertical Flow) */}');

fs.writeFileSync('src/components/HomePage.tsx', c);
