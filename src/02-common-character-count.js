/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  let s3 = '';
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      if (s3.length === 0) {
        s3 = s2.replace(s1[i], '');
        if (s1[1] === s2[1]) count++;
      } else {
        s3 = s3.replace(s1[i], '');
        count++;
      }
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
