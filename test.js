const { Remarkable } = require('remarkable');
const NumlPlugin = require('./index.js');

const md = new Remarkable();

md.use(NumlPlugin);

console.log(md.render(`# Heading\nMaybe something other link \`mark\` or **bold text**.\n\n## Heading 2\n\nSome text\n\n---\n\nAnother text`));
