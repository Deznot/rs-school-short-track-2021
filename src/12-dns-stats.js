/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains;
  const obj = {};
  let temp = '';
  arr.forEach((el) => {
    const elem = el.split('.').reverse();
    const len = elem.length;
    for (let i = 0; i < len; i++) {
      temp = (i === 0) ? `.${elem[i]}` : `${elem[i]}`;
      elem[i + 1] = `${temp}.${elem[i + 1]}`;
      if (obj[temp]) {
        obj[temp]++;
      } else {
        obj[temp] = 1;
      }
    }
  });
  return obj;
}
module.exports = getDNSStats;
