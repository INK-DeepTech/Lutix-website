const fs = require('fs');
let c = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

c = c.replace(/src="\/cto\.jpg"\s+alt="Nithishkumar"/, 'src="/coo.jpg" alt="Nithishkumar"');
c = c.replace(/src="\/coo\.jpg"\s+alt="Karthik Balaji"/, 'src="/cto.jpg" alt="Karthik Balaji"');

fs.writeFileSync('src/components/HomePage.tsx', c);
