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
        rule.selector = rule.selector.replace /&/, ref
      else
        ref = rule.selector

module.exports = namespace
