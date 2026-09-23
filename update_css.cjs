const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Add the custom brand colors to the @theme block
const themeAdditions = `  --color-brand-mint: #dbe8d8;
  --color-brand-teal: #01949a;
  --color-brand-navy: #003135;
  --color-brand-cyan: #0fa4af;
  --color-brand-ice: #afdde5;
  --color-brand-rust: #964734;
`;

css = css.replace('@theme {', '@theme {\n' + themeAdditions);
fs.writeFileSync('src/index.css', css);
