const matrix = require('./matrixMultiplication');

test('matrix1, matrix2 -> multipliedMatrix', () => {
    let a = [
        [1, 2, 3, 4],
        [4, 3, 2, 1],
        [4, 2, 9, 1],
        [3, 1, 2, 1]

    ];
    let b = [
        [1, 2, 1, 3, 4, 2],
        [1, 5, 3, 7, 4, 2],
        [3, 2, 1, 6, 5, 8],
        [1, 4, 3, 2, 3, 7]
    ];
    let c = [
        [16, 34, 22, 43, 39, 58],
        [14, 31, 18, 47, 41, 37],
        [34, 40, 22, 82, 72, 91],
        [11, 19, 11, 30, 29, 31]

    ];
    expect(matrix(a, b)).toStrictEqual(c);
});

test('matrix1, matrix2 -> multipliedMatrix', () => {
    let a = [
        [1, 2],
        [2, 1]
    ];
    let b = [
        [4, 3],
        [1, 1]
    ];
    let c = [
        [6, 5],
        [9, 7]
    ];
    expect(matrix(a, b)).toStrictEqual(c);
});