import test from 'ava';
import Segel from '../../src/index';

test('that constructor is available', function (t) {
  t.is(typeof Segel, 'function');
});
