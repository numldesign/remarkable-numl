## remarkable-numl

A remarkable plugin for Numl syntax.

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
