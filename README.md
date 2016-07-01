# postcss-preref

[![npm version](https://badge.fury.io/js/postcss-preref.svg)](https://badge.fury.io/js/postcss-preref)
[![Build Status](https://travis-ci.org/totora0155/postcss-preref.svg)](https://travis-ci.org/totora0155/postcss-preref)
[![Code Climate](https://codeclimate.com/github/totora0155/postcss-preref/badges/gpa.svg)](https://codeclimate.com/github/totora0155/postcss-preref)
[![Coverage Status](https://coveralls.io/repos/totora0155/postcss-preref/badge.svg?branch=master&service=github)](https://coveralls.io/github/totora0155/postcss-preref?branch=master)

<p><img width="20" src="https://camo.githubusercontent.com/2ec260a9d4d3dcc109be800af0b29a8471ad5967/687474703a2f2f706f73746373732e6769746875622e696f2f706f73746373732f6c6f676f2e737667"> <a href="https://github.com/postcss/postcss">PostCSS</a> plugin that to refer previous selector by &</p>
## Install

```
npm i -D postcss-preref
```

## Usage

Add a new rule to css.
This is possible to write so as `&:hover`. instead of previous selector.
(e.g. input.css)
```css
.item {}
&:hover {}
&:hover span {}
&:visited {}
& + & {}

.link span {}

img {}
&:hover {}

.selector-1 .child,
.selector-2 .child {}
&:hover {}


```

Use postcss-preref plugin in PostCSS
(e.g.)
```js
const fs = require('fs');
const postcss = require('postcss');
const preref = require('..');

const css = fs.readFileSync('./sample.css', 'utf-8');

postcss([preref])
  .process(css)
  .then(result => console.log(result.css));

```

output like this

```css
.item {}
.item:hover {}
.item:hover span {}
.item:visited {}
.item + .item {}

.link span {}

img {}
img:hover {}

.selector-1 .child,
.selector-2 .child {}
.selector-1 .child:hover,
.selector-2 .child:hover {}

```

## Change log

|version|log|
|:-:|:--|
|1.0.1|Fix `& + &`|
|1.0.0|Rewrite with es2015|
