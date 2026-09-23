const fs = require('fs');

// 1. Update types.ts
let types = fs.readFileSync('src/types.ts', 'utf8');
types = types.replace(/export type PageRoute = 'home' \| 'academic-os' \| 'pricing' \| 'demo';/, "export type PageRoute = 'home' | 'academic-os' | 'pricing' | 'demo' | 'about';");
fs.writeFileSync('src/types.ts', types);

// 2. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace("import { DemoRequestPage } from './components/DemoRequestPage';", "import { DemoRequestPage } from './components/DemoRequestPage';\nimport { AboutPage } from './components/AboutPage';");
app = app.replace(/\['home', 'academic-os', 'pricing', 'demo'\]/g, "['home', 'academic-os', 'pricing', 'demo', 'about']");
app = app.replace(/{currentRoute === 'demo' && <DemoRequestPage onRouteChange={handleRouteChange} \/>}/g, "{currentRoute === 'demo' && <DemoRequestPage onRouteChange={handleRouteChange} />}\n        {currentRoute === 'about' && <AboutPage onRouteChange={handleRouteChange} />}");
fs.writeFileSync('src/App.tsx', app);
