const fs = require('fs');
let home = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
home = home.replace(/Whether you are scaling a modern tech startup or running a <span className="text-blue-700 dark:text-blue-400 font-semibold">traditional local business<\/span>.*?we bridge the gap\./g, 
'Whether you are scaling a modern tech startup or running a <span className="text-blue-700 dark:text-blue-400 font-semibold">traditional local business</span>—like a wholesale dhal trader—we bridge the gap.');
fs.writeFileSync('src/components/HomePage.tsx', home);
