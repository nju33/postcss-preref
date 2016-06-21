import postcss from 'postcss';
import _ from 'lodash';

export default postcss.plugin('postcss-preref', () => {
  return css => {
    let ref = null;
    css.walkRules(rule => {
      if (rule.selector && /^&/.test(rule.selector)) {
        rule.selector = _.map(ref.split(','), selector => {
          return rule.selector.replace('&', selector);
        }).join(',');
      } else {
        ref = rule.selector;
      }
    });
  };
});
