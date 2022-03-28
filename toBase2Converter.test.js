const toBase2Converter = require('./toBase2Converter');

test('5 -> 101', () => {
    expect(toBase2Converter(5)).toBe('101');
});

test('10 -> 1010', () => {
    expect(toBase2Converter(10)).toBe('1010');
});

test('1023 -> 1111111111', () => {
    expect(toBase2Converter(1023)).toBe('1111111111');
});

test('1024 -> throw exception', () => {
    expect(() => toBase2Converter(1024)).toThrow;
});