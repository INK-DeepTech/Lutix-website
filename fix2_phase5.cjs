const fs = require('fs');
let pricing = fs.readFileSync('src/components/PricingCalculatorPage.tsx', 'utf8');
pricing = "import { PageRoute, BillingCycle } from '../types';\n" + pricing;
fs.writeFileSync('src/components/PricingCalculatorPage.tsx', pricing);

let demo = fs.readFileSync('src/components/DemoRequestPage.tsx', 'utf8');
if (!demo.includes("import { PageRoute }")) {
  demo = "import { PageRoute } from '../types';\n" + demo;
  fs.writeFileSync('src/components/DemoRequestPage.tsx', demo);
}
