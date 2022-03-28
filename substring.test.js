const substring = require('./substring');

test('a, test it => must be 0', () => {
    expect(substring('a', 'test it')).toBe(0);
});

test('t, test it => must be 3', () => {
    expect(substring('t', 'test it')).toBe(3);
});

test('T, test it => must be 3', () => {
    expect(substring('T', 'test it')).toBe(3);
});