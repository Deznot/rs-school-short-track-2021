/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const step = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const N = matrix.length;
  const M = matrix[0].length;
  const map = [];
  for (let i = 0; i < N; i++) {
    map.push(new Array(M).fill(0));
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let t = 0; t < step.length; t++) {
        const x = i + step[t][0];
        const y = j + step[t][1];
        if (x >= 0 && x < N && y >= 0 && y < M) {
          map[i][j] += matrix[x][y] ? 1 : 0;
        }
      }
    }
  }
  return map;
}

module.exports = minesweeper;
