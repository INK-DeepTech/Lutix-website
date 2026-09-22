const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('a:/Website lutix/src/components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace large dark background blocks with white
  content = content.replace(/bg-\[#131b2e\] text-white (p-\d+|px-\d+ py-\d+) rounded-3xl/g, 'bg-white text-slate-900 border border-slate-200 $1 rounded-3xl');
  content = content.replace(/bg-\[#3525cd\] text-white rounded-3xl/g, 'bg-slate-50 text-slate-900 border border-slate-200 rounded-3xl');
  content = content.replace(/bg-\[#3525cd\] rounded-3xl/g, 'bg-slate-50 text-slate-900 border border-slate-200 rounded-3xl');
  content = content.replace(/bg-\[#131b2e\]\/70/g, 'bg-slate-900/30'); 
  content = content.replace(/bg-\[#131b2e\]\/60/g, 'bg-slate-900/30'); 
  content = content.replace(/bg-\[#131b2e\]\/40/g, 'bg-slate-900/30'); 
  
  // Update inner text inside these converted sections
  content = content.replace(/text-white\/80/g, 'text-slate-600');
  content = content.replace(/text-white\/70/g, 'text-slate-500');
  content = content.replace(/text-white\/50/g, 'text-slate-400');
  content = content.replace(/border-white\/10/g, 'border-slate-200');
  content = content.replace(/border-white\/20/g, 'border-slate-200');
  
  // OverviewPage specific large section texts
  content = content.replace(/text-white relative overflow-hidden/g, 'text-slate-900 relative overflow-hidden');
  content = content.replace(/text-white text-3xl/g, 'text-[#3525cd] text-3xl');
  content = content.replace(/text-white p-6 rounded-3xl shadow-xl/g, 'text-slate-900 p-6 rounded-3xl shadow-xl border border-slate-200');
  
  // Generic labels
  content = content.split('<span className="font-semibold text-white">').join('<span className="font-semibold text-slate-900">');
  content = content.split('<span className="text-xs font-bold text-white">').join('<span className="text-xs font-bold text-slate-900">');
  
  // Mini icon cards in SolutionsMatrix
  content = content.replace(/bg-\[#3525cd\] text-white p-4 rounded-xl shadow-md w-36/g, 'bg-white text-slate-900 border border-[#3525cd]/20 p-4 rounded-xl shadow-md w-36');
  content = content.replace(/bg-\[#006a61\] text-white p-4 rounded-xl shadow-md w-36/g, 'bg-white text-slate-900 border border-[#006a61]/20 p-4 rounded-xl shadow-md w-36');
  content = content.replace(/bg-\[#5c6164\] text-white p-4 rounded-xl shadow-md w-36/g, 'bg-white text-slate-900 border border-[#5c6164]/20 p-4 rounded-xl shadow-md w-36');
  
  // Dark mode text in tooltip
  content = content.replace(/bg-\[#131b2e\] text-white text-\[11px\]/g, 'bg-white text-slate-900 text-[11px] border border-slate-200');

  // Fix the overview page button inside the formerly dark section
  content = content.split('bg-[#4f46e5] text-white rounded-xl text-sm font-semibold hover:bg-[#4f46e5]/80 transition-all border border-white/20').join('bg-[#3525cd] text-white rounded-xl text-sm font-semibold hover:bg-[#4d44e3] transition-all shadow-md');
  content = content.split('bg-[#4f46e5] text-white font-semibold text-sm rounded-xl hover:bg-[#4f46e5]/80 transition-all border border-white/20').join('bg-[#3525cd] text-white font-semibold text-sm rounded-xl hover:bg-[#4d44e3] transition-all shadow-md');

  fs.writeFileSync(file, content);
});
console.log('Done');
