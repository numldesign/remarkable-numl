import RemarkableModule from 'remarkable';
import NumlPlugin from './index.js';

const md = new RemarkableModule.Remarkable();

md.use(NumlPlugin);

console.log(md.render(`# Heading\nMaybe something other link \`mark\` or **bold text**.\n\n## Heading 2\n\nSome text\n\n---\n\nAnother text`));
