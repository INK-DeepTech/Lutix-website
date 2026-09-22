const fs = require('fs');
let content = fs.readFileSync('a:/Website lutix/src/data/content.ts', 'utf8');
content = content.replace(/nexusLogo:\s*'.*?'/, "nexusLogo: '/bird-icon.png'");
fs.writeFileSync('a:/Website lutix/src/data/content.ts', content);
console.log('updated content.ts nexusLogo');
