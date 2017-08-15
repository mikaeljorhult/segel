import test from 'ava';
import Process from '../src/helpers/process';

test('that parameters are passed to callback', function (t) {
  Process(42, function (object) {
    t.is(object, 42);
  });
});

test('that array values are passed to callback', function (t) {
  Process([42], function (object) {
    t.is(object, 42);
  });
});
