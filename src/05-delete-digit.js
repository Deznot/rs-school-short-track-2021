/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const digit = [];
  let n = num;
  while (n > 0) {
    digit.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  let remIndx = -1;
  let flag = true;
  for (let i = 0; i < digit.length - 1; i++) {
    if (digit[i] < digit[i + 1] && flag) {
      remIndx = i;
      flag = false;
    }
  }
  if (flag) {
    remIndx = digit.length - 1;
  }
  digit.splice(remIndx, 1);
  const result = parseInt(digit.join(''), 10);
  return Number.isNaN(result) ? 0 : result;
}
module.exports = deleteDigit;
