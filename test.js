const { Remarkable } = require('remarkable');
const NumlPlugin = require('./index.js');

const md = new Remarkable();

md.use(NumlPlugin);

console.log(md.render(`# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Maybe something other link \`mark\` or **bold text**.

## Heading 2

Some text

---

Another text`));
