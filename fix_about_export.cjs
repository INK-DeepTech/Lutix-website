const fs = require('fs');

let about = fs.readFileSync('src/components/AboutPage.tsx', 'utf8');
about = about.replace(/export const AboutPage: React\.FC<AboutPageProps> = /, 'const AboutPage: React.FC<AboutPageProps> = ');
if (!about.includes('export default AboutPage;')) {
    about += '\nexport default AboutPage;\n';
}
fs.writeFileSync('src/components/AboutPage.tsx', about);

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(/import \{ AboutPage \} from '\.\/components\/AboutPage';/, "import AboutPage from './components/AboutPage';");
fs.writeFileSync('src/App.tsx', app);
