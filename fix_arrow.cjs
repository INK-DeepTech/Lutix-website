const fs = require('fs');
let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
c = c.replace(/Get Started <span className="text-2xl font-light">.*?<\/span>/g, 'Get Started <span className="text-2xl font-light">&#8594;</span>');
fs.writeFileSync('src/components/HomePage.tsx', c);
