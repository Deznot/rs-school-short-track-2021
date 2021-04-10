/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const s = str;
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else if (count > 1) {
      res += `${count}${s[i]}`;
      count = 1;
    } else {
      res += `${s[i]}`;
    }
  }
  return res;
}

module.exports = encodeLine;
