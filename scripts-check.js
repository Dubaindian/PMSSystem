const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'api')).filter((file) => file.endsWith('.js')).map((file) => path.join(__dirname, 'api', file));
for (const file of files) new Function(fs.readFileSync(file, 'utf8'));
console.log(`Module syntax checks passed (${files.length} API file${files.length === 1 ? '' : 's'})`);
