const secondsToDate = require('./secondsToDate');

test('31536000 -> 01.06.2021', () => {
    expect(secondsToDate(31536000)).toEqual(new Date(2021, 6, 1, 0, 0, 0));
});

test('0 -> 01.06.2020', () => {
    expect(secondsToDate(0)).toEqual(new Date(2020, 6, 1, 0, 0, 0));
});

test('86400 -> 02.06.2020', () => {
    expect(secondsToDate(86400)).toEqual(new Date(2020, 6, 2, 0, 0, 0));
});