const fs = require('fs');

let demo = fs.readFileSync('a:/Website lutix/src/components/DemoRequestPage.tsx', 'utf8');
// Remove the first import { PageRoute } if there are two
demo = demo.replace("import { PageRoute } from '../types';\\n\\nimport { PageRoute }", "import { PageRoute }");
// Actually, it's easier to just strip all PageRoute imports and add one at the top.
demo = demo.replace(/import \{.*?PageRoute.*?\} from '\.\.\/types';/g, "");
demo = "import { PageRoute } from '../types';\n" + demo;
fs.writeFileSync('a:/Website lutix/src/components/DemoRequestPage.tsx', demo);

let pricing = fs.readFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', 'utf8');
pricing = pricing.replace(/import \{.*?PageRoute.*?\} from '\.\.\/types';/g, "");
pricing = "import { PageRoute, BillingCycle } from '../types';\n" + pricing;
// fix the demo-request routes
pricing = pricing.replace(/'demo-request'/g, "'demo'");
// also the duplicate BillingCycle import will break, so strip it first
pricing = pricing.replace(/import \{.*?BillingCycle.*?\} from '\.\.\/types';/g, "");
fs.writeFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', pricing);
