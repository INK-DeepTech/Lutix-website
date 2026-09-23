const fs = require('fs');
let c = fs.readFileSync('src/components/AboutPage.tsx', 'utf8');

c = c.replace(/<img src="\/cto\.jpg" alt="Nithishkumar"/, '<img src="/coo.jpg" alt="Nithishkumar"');
c = c.replace(/<img src="\/coo\.jpg" alt="Karthik Balaji"/, '<img src="/cto.jpg" alt="Karthik Balaji"');

fs.writeFileSync('src/components/AboutPage.tsx', c);
