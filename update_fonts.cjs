const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('a:/Website lutix/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/font-serif(?!-)/g, 'font-serif-brand');
  fs.writeFileSync(file, content);
});

let css = fs.readFileSync('a:/Website lutix/src/index.css', 'utf8');
css = css.replace(/\.font-serif, h1, h2, h3, h4 \{\s*font-family: 'Playfair Display', serif;\s*\}/, `h1, h2, h3 {
  font-family: var(--font-serif-brand);
}`);
fs.writeFileSync('a:/Website lutix/src/index.css', css);
console.log('done font updates');
