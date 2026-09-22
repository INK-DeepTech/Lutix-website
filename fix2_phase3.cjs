const fs = require('fs');

let demo = fs.readFileSync('a:/Website lutix/src/components/DemoRequestPage.tsx', 'utf8');
demo = demo.replace(/interface DemoRequestPageProps {[\s\S]*?}/, "import { PageRoute } from '../types';\n\ninterface DemoRequestPageProps {\n  onRouteChange: (route: PageRoute) => void;\n}");
fs.writeFileSync('a:/Website lutix/src/components/DemoRequestPage.tsx', demo);

let pricing = fs.readFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', 'utf8');
pricing = pricing.replace(/interface PricingCalculatorPageProps {[\s\S]*?}/, "import { PageRoute } from '../types';\n\ninterface PricingCalculatorPageProps {\n  onRouteChange: (route: PageRoute) => void;\n}");
// wait, PricingCalculatorPage already imports PageRoute from '../types'! Let's just do a safer replace
pricing = pricing.replace(/onRouteChange: \(route: any\) => void;/, "onRouteChange: (route: PageRoute) => void;");
pricing = pricing.replace(/onRouteChange: \(route: string\) => void;/, "onRouteChange: (route: PageRoute) => void;");
fs.writeFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', pricing);

console.log("Written Phase 3");
