// Synchronise les contenus du PDF avec les données TypeScript du site.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('../frontend/node_modules/typescript');
const root = path.resolve(__dirname, '..');
const data = {};
for (const [file, key] of [['projects','projects'],['about','about'],['experience','experiences'],['education','education'],['skills','skills']]) {
  const source = fs.readFileSync(path.join(root, 'frontend/src/data', file + '.ts'), 'utf8');
  const compiled = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText;
  const exports = {};
  new Function('exports', compiled)(exports);
  data[key] = exports[key];
}
fs.writeFileSync(path.join(__dirname, 'contenu-pdf.json'), JSON.stringify(data, null, 2) + '\n');
console.log('Contenus du PDF synchronisés avec les cinq fichiers de données du site.');
