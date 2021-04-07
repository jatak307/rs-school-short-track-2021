/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const inverted = [];
  for (let j = 0; j < cols; j++) {
    inverted[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      inverted[j][i] = matrix[i][j];
    }
  }

  let res = 0;
  for (let i = 0; i < inverted.length; i++) {
    if (inverted[i].indexOf(0) !== -1) {
      for (let j = 0; j < inverted[i].slice(0, inverted[i].indexOf(0)).length; j++) {
        res += inverted[i].slice(0, inverted[i].indexOf(0))[j];
      }
    }
    if (inverted[i].indexOf(0) === -1) {
      for (let j = 0; j < inverted[i].length; j++) {
        res += inverted[i][j];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
