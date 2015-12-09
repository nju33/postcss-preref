# postcss-preref

[![npm version](https://badge.fury.io/js/postcss-preref.svg)](https://badge.fury.io/js/postcss-preref)
[![Build Status](https://travis-ci.org/totora0155/postcss-preref.svg)](https://travis-ci.org/totora0155/postcss-preref)
[![Code Climate](https://codeclimate.com/github/totora0155/postcss-preref/badges/gpa.svg)](https://codeclimate.com/github/totora0155/postcss-preref)

[PostCSS](https://github.com/postcss/postcss) plugin that to refer previous selector by &

## Install

```
npm i -D postcss-preref
npm i -D postcss # if still
```

## Usage

Add a new rule to css.
This is possible to write so as `&:hover`. instead of previous selector.
(e.g. input.css)
```css
.link {
  transition: .25s linear;
  color: dimgray;
}

&:hover {
  color: indianred;
}

&:hover span {
  opacity: 1;
}

&:visited {
  color: slateblue;
}

.link span {
  opacity: .7;
}

img {
  transition: .25s linear;
  box-shadow: 0 2px 3px -1px transparent;
}

&:hover {
  box-shadow: 0 2px 3px -1px dimgray;
}

```

Use postcss-preref plugin in PostCSS
(e.g.)
```javascript
var fs = require('fs');
var postcss = require('postcss');
var preref = require('postcss-preref');
var css = fs.readFileSync('input.css', 'utf8');

var output = postcss()
  .use(preref())
  .process(css)
  .css;

console.log(output);
/* output:
 *
 *   .link {
 *     transition: .25s linear;
 *     color: dimgray;
 *   }
 *
 *   .link:hover {
 *     color: indianred;
 *   }
 *
 *   .link:hover span {
 *     opacity: 1;
 *   }
 *
 *   .link:visited {
 *     color: slateblue;
 *   }
 *
 *   .link span {
 *     opacity: .7;
 *   }
 *
 *   img {
 *     transition: .25s linear;
 *     box-shadow: 0 2px 3px -1px transparent;
 *   }
 *
 *   img:hover {
 *     box-shadow: 0 2px 3px -1px dimgray;
 *   }
 *
 */
```
