const fs = require('fs');
const postcss = require('postcss');
const preref = require('..');

const css = fs.readFileSync('./sample.css', 'utf-8');

postcss([preref])
  .process(css)
  .then(result => console.log(result.css));
