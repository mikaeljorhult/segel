import test from 'ava';
import Cast from '../src/helpers/cast';

test('that date objects are converted to an integer', function (t) {
  t.is(Cast.date(new Date(2017, 0, 1)), 1483225200);
});

test('that unix timestamps are passed through', function (t) {
  t.is(Cast.date(1483225200), 1483225200);
  t.is(Cast.date('1483225200'), 1483225200);
  t.is(Cast.date(1483225200.123), 1483225200);
});

test('that milliseconds unix timestamps are converted to seconds', function (t) {
  t.is(Cast.date(1483225200000), 1483225200);
  t.is(Cast.date('1483225200000'), 1483225200);
});

test('that properties of a booking are cast to correct types', function (t) {
  let booking = Cast.booking({
    id: 1,
    object: 1,
    start: new Date(2017, 0, 1),
    end: '1483225200'
  });

  // Timestamps should be cast/converted to integers.
  t.is(typeof booking.start, 'number');
  t.is(typeof booking.end, 'number');

  // Timestamps should be Unix Epoch.
  t.is(booking.start, 1483225200);
  t.is(booking.end, 1483225200);

  // Other properties should be left unaltered.
  t.is(booking.id, 1);
  t.is(booking.object, 1);
});

test('that properties of an object are cast to correct types', function (t) {
  let object = Cast.object({
    id: 1,
    name: 'Conference Room 1'
  });

  // All properties should be unaltered.
  t.is(object.id, 1);
  t.is(object.name, 'Conference Room 1');
});
