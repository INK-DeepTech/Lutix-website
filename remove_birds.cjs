const fs = require('fs');
const files = [
  'a:/Website lutix/src/components/Header.tsx',
  'a:/Website lutix/src/components/OverviewPage.tsx',
  'a:/Website lutix/src/components/CompanyPage.tsx',
  'a:/Website lutix/src/components/PricingCalculatorPage.tsx',
  'a:/Website lutix/src/components/DemoRequestPage.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove inline bird icons
    content = content.replace(/<img[^>]*src="\/bird-icon\.png"[^>]*>\s*/g, '');
    
    // Also remove the specific styling from CompanyPage images
    if (file.includes('CompanyPage.tsx')) {
      content = content.replace(/className="h-32 w-32 rounded-full object-cover shadow-md mx-auto mb-4 border border-\[#dae2fd\]"/g, 'className="h-32 w-32 rounded-full object-cover mx-auto mb-4 shadow-sm"');
    }
    
    fs.writeFileSync(file, content);
  }
});
console.log('Icons removed and styling updated.');
