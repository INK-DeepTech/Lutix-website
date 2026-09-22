const fs = require('fs');
let path = 'a:/Website lutix/src/data/content.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/image: IMAGES\.iswarya/g, "image: '/ceo.jpg'");
content = content.replace(/image: IMAGES\.nithishkumar/g, "image: '/cto.jpg'");
content = content.replace(/image: IMAGES\.office/g, "image: '/coo.jpg'");

fs.writeFileSync(path, content);
console.log("content.ts updated with local image paths.");
