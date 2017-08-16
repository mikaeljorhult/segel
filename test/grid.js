import test from 'ava';
import Grid from '../src/helpers/grid';

test.beforeEach(function (t) {
  t.context = {
    duration: new Date(2017, 0, 2, 0) / 1000 - new Date(2017, 0, 1, 0) / 1000,
    steps: 48
  };
});

test('that even hours are not altered', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 0) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 11, 0) / 1000);
});

test('that even half hours are not altered', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 30) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 11, 30) / 1000);
});

test('that quarter past is rounded up to closest half hour', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 15) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 11, 30) / 1000);
});

test('that quarter to is rounded up to closest full hour', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 45) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 12, 0) / 1000);
});

test('that less than quarter past is rounded down to full hour', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 7) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 11, 0) / 1000);
});

test('that more than quarter past is rounded up to closest half hour', function (t) {
  let rounded = Grid.round(
    new Date(2017, 0, 1, 11, 20) / 1000,
    t.context.duration,
    t.context.steps
  );

  t.is(rounded, new Date(2017, 0, 1, 11, 30) / 1000);
});
