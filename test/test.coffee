fs           = require 'fs'
path         = require 'path'
chai         = require 'chai'
expect       = chai.expect
postcss      = require 'postcss'

preref = require '..'

set = (dir) ->
  stylePath = path.join 'test/cases/', dir, 'style.css'
  answerPath = path.join 'test/cases/', dir, 'answer.css'

  style: fs.readFileSync stylePath, 'utf-8'
  answer: fs.readFileSync answerPath, 'utf-8'

describe 'postcss-preref', ->
  it 'expect replace global', ->
    {style, answer} = set 'global'

    result = postcss([preref]).process(style)
    expect(result.css).to.equal(answer)

  it 'expect replace multi selector', ->
    {style, answer} = set 'multi-selector'

    result = postcss([preref]).process(style)
    expect(result.css).to.equal(answer)
