const fs = require('fs');

let appPath = 'a:/Website lutix/src/App.tsx';
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace(/import { DashboardPage } from '.\/components\/DashboardPage';\r?\n/g, '');
app = app.replace(/, 'dashboard'/g, '');
app = app.replace(/[ \t]*'dashboard': 'Lutix — Live Dashboard',\r?\n/g, '');
app = app.replace(/[ \t]*\{currentRoute === 'dashboard' && <DashboardPage onRouteChange=\{handleRouteChange\} \/>\}\r?\n/g, '');
fs.writeFileSync(appPath, app);

let headerPath = 'a:/Website lutix/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');
header = header.replace(/[ \t]*\{ route: 'dashboard', label: 'Dashboard', badge: 'Live' \},\r?\n/g, '');
header = header.replace(/[ \t]*<button[ \t\r\n]*onClick=\{\(\) => \{ setShowProfileMenu\(false\); onRouteChange\('dashboard'\); \}\}[ \t\r\n]*className="w-full text-left px-2\.5 py-1\.5 rounded-md text-xs hover:bg-\[#f2f3ff\] text-\[#131b2e\] flex items-center justify-between"[ \t\r\n]*role="menuitem"[ \t\r\n]*>[ \t\r\n]*<span>Live Dashboard<\/span>[ \t\r\n]*<span className="text-\[10px\] bg-\[#89f5e7\] text-\[#00201d\] px-1\.5 py-0\.5 rounded font-bold">ACTIVE<\/span>[ \t\r\n]*<\/button>\r?\n/g, '');
fs.writeFileSync(headerPath, header);

let footerPath = 'a:/Website lutix/src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer.replace(/[ \t]*<li>[ \t\r\n]*<button onClick=\{\(\) => onRouteChange\('dashboard'\)\} className="hover:text-\[#3525cd\] transition-colors text-left flex items-center gap-1">[ \t\r\n]*<span>Live Dashboard<\/span>[ \t\r\n]*<span className="text-\[10px\] px-1 py-0\.5 rounded bg-\[#89f5e7\] text-\[#00201d\] font-bold">LIVE<\/span>[ \t\r\n]*<\/button>[ \t\r\n]*<\/li>\r?\n/g, '');
fs.writeFileSync(footerPath, footer);

console.log('done');
