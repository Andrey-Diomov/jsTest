const tower = require('./towerHanoi');

test('3 -> 2^n - 1 (7)', () => {
    expect(tower(3)).toBe(7);
});

test('8 -> 255', () => {
    expect(tower(8)).toBe(255);
});

test('9 -> 511', () => {
    expect(tower(9)).toBe(511);
});