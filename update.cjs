const fs = require('fs');

// 1. Update Header.tsx
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(
  /className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"/,
  'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"'
);
header = header.replace(
  /className="h-10 w-auto object-contain dark:invert transition-all"/,
  'className="h-16 md:h-24 lg:h-28 w-auto object-contain dark:invert transition-all"'
);
fs.writeFileSync('src/components/Header.tsx', header);

// 2. Update Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /className="h-12 w-auto object-contain dark:invert"/,
  'className="h-24 md:h-32 w-auto object-contain dark:invert"'
);
fs.writeFileSync('src/components/Footer.tsx', footer);

// 3. Update HomePage.tsx
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// The new services section
const newServices = `      {/* Services We Offer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Monitor className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Custom Web Pages & Software</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Bespoke digital solutions tailored to your brand's specific needs, ensuring a unique and powerful online presence.
            </p>
          </button>
          
          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Mobile & Web Apps</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Cross-platform applications designed for performance, scalability, and seamless user experiences on any device.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Code className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Website Development</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern, responsive, and robust websites engineered with the latest frontend and backend technologies.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Supply Chain Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Intelligent logistics and inventory tracking software to optimize your entire operational pipeline.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Intelligent Systems</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              AI-driven analytics and automation tools designed to simplify complex decision making.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#3525cd] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-6 text-[#3525cd] dark:text-[#8b80f9]">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Portfolio Showcase</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Elegant and interactive digital portfolios to beautifully present your creative and professional work.
            </p>
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif-brand text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Why Us?
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            We know exactly what problems you face on the ground. Our mission is to make advanced AI and enterprise-grade software <span className="text-blue-700 dark:text-blue-400 font-semibold">accessible to absolutely everyone</span>. Whether you are scaling a modern tech startup or running a <span className="text-blue-700 dark:text-blue-400 font-semibold">traditional local business</span>—like a wholesale dhal trader—we bridge the gap. We turn complex technology into simple, powerful tools that actually work for you.
          </p>
        </div>
      </section>`;

// Replace the old Services section with the new Services + Why Us
home = home.replace(/{[\s\S]*?Services We Offer[\s\S]*?<\/section>/, newServices);

fs.writeFileSync('src/components/HomePage.tsx', home);
