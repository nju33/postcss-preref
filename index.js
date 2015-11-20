// Generated by CoffeeScript 1.10.0
(function() {
  var fs, namespace, path, postcss;

  fs = require('fs');

  path = require('path');

  postcss = require('postcss');

  namespace = postcss.plugin('postcss-namespace', function(opts) {
    if (opts == null) {
      opts = {
        token: '-'
      };
    }
    return function(css) {
      var ref;
      ref = null;
      return css.walkRules(function(rule) {
        if (/^&/.test(rule.selector)) {
          return rule.selector = rule.selector.replace(/&/, ref);
        } else {
          return ref = rule.selector;
        }
      });
    };
  });

  module.exports = namespace;

}).call(this);
