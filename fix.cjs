const fs = require('fs');

let header = fs.readFileSync('a:/Website lutix/src/components/Header.tsx', 'utf8');
header = header.replace('onRouteChange: (route: string) => void;', 'onRouteChange: (route: any) => void;');
fs.writeFileSync('a:/Website lutix/src/components/Header.tsx', header);

let overview = fs.readFileSync('a:/Website lutix/src/components/OverviewPage.tsx', 'utf8');
overview = overview.replace('onRouteChange: (route: string) => void;', 'onRouteChange: (route: any) => void;');
overview = overview.replace(/founder\.title/g, 'founder.role');
fs.writeFileSync('a:/Website lutix/src/components/OverviewPage.tsx', overview);

let company = fs.readFileSync('a:/Website lutix/src/components/CompanyPage.tsx', 'utf8');
company = company.replace('onRouteChange: (route: string) => void;', 'onRouteChange: (route: any) => void;');
company = company.replace(/founder\.title \|\| founder\.role/g, 'founder.role');
fs.writeFileSync('a:/Website lutix/src/components/CompanyPage.tsx', company);

let footer = fs.readFileSync('a:/Website lutix/src/components/Footer.tsx', 'utf8');
footer = footer.replace('onRouteChange: (route: string) => void;', 'onRouteChange: (route: any) => void;');
fs.writeFileSync('a:/Website lutix/src/components/Footer.tsx', footer);

let pricing = fs.readFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', 'utf8');
pricing = pricing.replace("import { Check, Info, Server, Shield, Sparkles } from 'lucide-react';", "import { Check, ArrowRight, Database, Sparkles } from 'lucide-react';");
fs.writeFileSync('a:/Website lutix/src/components/PricingCalculatorPage.tsx', pricing);
