'use strict';

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    let aNumRows = matrix1.length;
    let aNumCols = matrix1[0].length;
    let bNumCols = matrix2[0].length;
    let result = new Array(aNumRows);

    for (let r = 0; r < aNumRows; r++) {
        result[r] = new Array(bNumCols);
        for (let c = 0; c < bNumCols; c++) {
            result[r][c] = 0;
            for (let i = 0; i < aNumCols; i++) {
                result[r][c] += matrix1[r][i] * matrix2[i][c];
            }
        }
    }
    return result;
}

module.exports = matrixMultiplication;