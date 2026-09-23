const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(/<AboutPage onRouteChange=\{handleRouteChange\} \/>/g, '<AboutPage />');
fs.writeFileSync('src/App.tsx', app);
