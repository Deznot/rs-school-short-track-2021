/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== -1) {
      let smallest = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] !== -1) {
          if (array[j] < array[smallest]) {
            smallest = j;
          }
        }
      }
      [array[i], array[smallest]] = [array[smallest], array[i]];
    }
  }
  return array;
}

module.exports = sortByHeight;
