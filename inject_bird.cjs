const fs = require('fs');

const birdHTML = '<img src="/bird-icon.png" alt="Lutix Bird" className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 object-contain mix-blend-multiply" />';

function injectBird(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('w-8 h-8 md:w-10 md:h-10 inline-block mr-3')) {
        content = content.replace(/(<h2[^>]*>)/g, '$1' + birdHTML);
        fs.writeFileSync(filePath, content);
    }
}

injectBird('src/components/HomePage.tsx');
injectBird('src/components/AboutPage.tsx');
injectBird('src/components/AcademicOSPage.tsx');
