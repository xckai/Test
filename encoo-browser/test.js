var fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.resolve(__dirname, './src/ui/Pages'));
files.map((file) => file.split('.')[0]).forEach(console.log);
