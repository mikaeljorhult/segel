import test from 'ava';
import Validation from '../src/helpers/validation';

test.beforeEach(function (t) {
  t.context = {
    bookings: [
      {id: 1, object: 1, start: new Date(2017, 0, 1, 10) / 1000, end: new Date(2017, 0, 1, 11) / 1000},
      {id: 2, object: 1, start: new Date(2017, 0, 1, 17) / 1000, end: new Date(2017, 0, 1, 19) / 1000},
      {id: 3, object: 2, start: new Date(2017, 0, 1, 11) / 1000, end: new Date(2017, 0, 1, 13) / 1000}
    ]
  };
});

test('that ID already in use is not considered unique', function (t) {
  t.false(Validation.isUnique(t.context.bookings, {id: 1}));
});

test('that ID not in use is considered unique', function (t) {
  t.true(Validation.isUnique(t.context.bookings, {id: 100}));
});

test('that object is considered available when there is no bookings', function (t) {
  t.true(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 1) / 1000,
    end: new Date(2017, 0, 1, 2) / 1000
  }));
});

test('that object is unavailable when it occupy same time as other booking', function (t) {
  t.false(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 10) / 1000,
    end: new Date(2017, 0, 1, 11) / 1000
  }));
});

test('that object is unavailable when it overlap start other booking', function (t) {
  t.false(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 9) / 1000,
    end: new Date(2017, 0, 1, 10, 15) / 1000
  }));
});

test('that object is unavailable when it overlap whole other booking', function (t) {
  t.false(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 9) / 1000,
    end: new Date(2017, 0, 1, 12) / 1000
  }));
});

test('that object is unavailable when it starts during other booking', function (t) {
  t.false(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 10, 45) / 1000,
    end: new Date(2017, 0, 1, 12) / 1000
  }));
});

test('that object is unavailable for booking inside time of other booking', function (t) {
  t.false(Validation.isAvailable(t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 10, 15) / 1000,
    end: new Date(2017, 0, 1, 10, 30) / 1000
  }));
});

test('that multiple rules method supports single rule', function (t) {
  t.false(Validation.multipleRules('isUnique', t.context.bookings, {id: 1}));
  t.false(Validation.multipleRules(['isUnique'], t.context.bookings, {id: 1}));

  t.true(Validation.multipleRules('isUnique', t.context.bookings, {id: 100}));
  t.true(Validation.multipleRules(['isUnique'], t.context.bookings, {id: 100}));
});

test('that multiple rules method supports multiple rules', function (t) {
  // false: isUnique should return false - isAvailable should return false.
  t.false(Validation.multipleRules(['isUnique', 'isAvailable'], t.context.bookings, {
    id: 1,
    object: 1,
    start: new Date(2017, 0, 1, 9) / 1000,
    end: new Date(2017, 0, 1, 12) / 1000
  }));

  // false: isUnique should return false - isAvailable should return true.
  t.false(Validation.multipleRules(['isUnique', 'isAvailable'], t.context.bookings, {
    id: 1,
    object: 1,
    start: new Date(2017, 0, 1, 1) / 1000,
    end: new Date(2017, 0, 1, 2) / 1000
  }));

  // true: isUnique should return true - isAvailable should return true.
  t.true(Validation.multipleRules(['isUnique', 'isAvailable'], t.context.bookings, {
    id: 100,
    object: 1,
    start: new Date(2017, 0, 1, 1) / 1000,
    end: new Date(2017, 0, 1, 2) / 1000
  }));
});
