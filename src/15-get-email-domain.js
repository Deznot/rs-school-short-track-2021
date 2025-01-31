/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let mail = email;
  mail = mail.match(/@[^.][\d\w-]*\.\w*/gi);
  return `${mail}`.slice(1);
}
module.exports = getEmailDomain;
