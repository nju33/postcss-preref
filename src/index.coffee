fs            = require 'fs'
path          = require 'path'
postcss       = require 'postcss'

namespace = postcss.plugin 'postcss-namespace', (opts) ->
  if not opts?
    opts = {token: '-'}

  (css) ->
    ref = null

    css.walkRules (rule) ->
      if /^&/.test rule.selector
        result = []
        for selector in ref.split /,/
          result.push rule.selector.replace /&/, selector
        rule.selector = result.join ","
      else
        ref = rule.selector

module.exports = namespace
