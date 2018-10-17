/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preference = []) {
  let count = 0;


  for (let i = 0, len = preference.length; i <= len; i++) {
    const firstPos = preference[i];
    const secondPos = preference[firstPos - 1];
    const thirdPos = preference[secondPos - 1];

    const conditionOne = thirdPos === i + 1;
    const conditionTwo = firstPos !== i + 1;

    if (conditionOne && conditionTwo) {
      count++;
    }
  }

  return count / 3;
}
