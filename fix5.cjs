const fs = require('fs');
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
home = home.replace(/\?"/g, '—');
home = home.replace(/—like a wholesale dhal trader—/g, '—like a wholesale dhal trader—'); // ensure it's exact
fs.writeFileSync('src/components/HomePage.tsx', home);
