const fs = require('fs');
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// The encoding issue is ?"
// Let's replace the whole sentence to be safe
const oldSentenceRegex = /Whether you are scaling a modern tech startup or running a <span className="text-brand-cyan dark:text-cyan-400 font-bold">traditional local business<\/span>.*?we bridge the gap\./g;

const newSentence = 'Whether you are scaling a modern tech startup or running a <span className="text-brand-cyan dark:text-cyan-400 font-bold">traditional local business</span> &mdash; like a wholesale dhal trader &mdash; we bridge the gap.';

home = home.replace(oldSentenceRegex, newSentence);

fs.writeFileSync('src/components/HomePage.tsx', home);
