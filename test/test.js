import fs from 'fs';
import test from 'ava';
import postcss from 'postcss';
import preref from '..';

const css = fs.readFileSync('../examples/sample.css', 'utf-8');
const expect = fs.readFileSync('./expect.css', 'utf-8');

function transform() {
  return new Promise(resolve => {
    postcss([preref])
      .process(css)
      .then(result => resolve(result.css));
  });
}

test('preref', async t => {
  t.is(await transform(), expect);
});
