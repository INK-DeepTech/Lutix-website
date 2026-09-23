const fs = require('fs');

let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Hero changes
home = home.replace(
  /<span className="material-symbols-outlined text-\[18px\]">bolt<\/span>/,
  '<img src="/bird-icon.png" alt="Lutix Icon" className="w-4 h-4 object-contain" />'
);

home = home.replace(
  'Run Your Organization Smarter — With Less Manual Work',
  'Braid – AI SaaS Business Automation Platform'
);

// Add Mission and Core Values sections right before the final </div> (which closes the main component div)
const missionAndValuesHTML = `
      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-corp-navy dark:text-white">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-corp-light/50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Develop Intelligent Technologies</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Create intelligent and innovative technologies that turn ideas into practical solutions.</p>
            </div>
            <div className="p-8 bg-corp-light/50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Build Sustainable Solutions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Develop sustainable products and solutions that address present and future needs.</p>
            </div>
            <div className="p-8 bg-corp-light/50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Solve Real-World Challenges</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Solve meaningful real-world problems through effective, scalable, and impactful solutions.</p>
            </div>
            <div className="p-8 bg-corp-light/50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Create Lasting Value</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Deliver lasting value to people, businesses, organizations, and society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-corp-light dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-corp-navy dark:text-white">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-corp-navy dark:text-white mb-2">Innovation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We build technology that solves meaningful real-world problems.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-corp-navy dark:text-white mb-2">Integrity</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We act with honesty, transparency and accountability.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-corp-navy dark:text-white mb-2">Customer-First Thinking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We listen, understand and build around real customer needs.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-corp-navy dark:text-white mb-2">Sustainability</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We create solutions designed for lasting economic, social and environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>`;

home = home.replace(/\s*<\/div>\s*(\);\s*};\s*)$/, '\n' + missionAndValuesHTML + '\n$1');
fs.writeFileSync('src/components/HomePage.tsx', home);
