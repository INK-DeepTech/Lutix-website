const fs = require('fs');
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
home = home.replace(/\?"/g, '—');
fs.writeFileSync('src/components/HomePage.tsx', home);
