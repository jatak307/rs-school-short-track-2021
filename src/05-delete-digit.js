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
function deleteDigit(n) {
  const arr = String(n).split('');
  let res = null;
  if (arr.indexOf('0') !== -1) {
    arr.splice(arr.indexOf('0'), 1);
    res = Number(arr.join(''));
  } else {
    let min = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        min = i;
      }
    }
    arr.splice(min, 1);
    res = Number(arr.join(''));
  }
  return res;
}

module.exports = deleteDigit;
