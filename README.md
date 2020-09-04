## remarkable-numl

A [Remarkable](https://github.com/jonschlinkert/remarkable) plugin for [Numl](https://github.com/tenphi/numl) syntax.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save remarkable-numl
```

## Usage

```js
const { Remarkable } = require('remarkable')
const NumlPlugin = require('remarkable-numl');

const md = new Remarkable();

md.use(NumlPlugin);

md.render('# Your markdown content');
```
