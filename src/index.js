/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var totalTriangles = 0, // счетчик для количества треугольников
      startEdge = 0, // значение стартовой грани
      edge, // текущая грань треугольника-претендента
      tempArray, // массив значений треугольника-претендента
      edgeCount, // счетчик граней в треугольнике-претенденте
      prefLength = preferences.length;
  var isLoved = Array(prefLength).fill(0); // массив, отображающий состояние жителя(1 - состоит в треугольнике, 0 - свободен)
  for (var i = 0; i < prefLength; i++) {
    edge = 0;
    edgeCount = 0;
    tempArray = [];
    if ((i + 1) == preferences[i]) continue; // проверка на то, чтобы поле не было равно позиции
    if (isLoved[preferences[i] - 1] == 1) continue; //проверка на то, чтобы это поле уже не было в треугольнике
    edge = preferences[i];
    startEdge = preferences[i];
    while (edgeCount < 3) {
      if (edge == preferences[edge - 1]) break; // проверка на то, чтобы поле не было равно позиции
      edge = preferences[edge - 1];
      if (edgeCount < 2 && (isLoved[edge - 1] == 1 || edge == startEdge)) break; //для всех граней, кроме последней(первой) проверка, чтобы они не были в др. треугольниках и чтобы их значение не равнялось начальному, т.к. замкнется треугольник(с двумя гранями)
      edgeCount++;
      if (edgeCount == 3 && isLoved[edge - 1] == 1) break; // проверка чтобы последний элемент не состоял в дрю треугольнике 
      isLoved[edge - 1] = 1;
      tempArray.push(edge);
    }
    if (edge == startEdge && edgeCount == 3) {
      totalTriangles++;
    }
    else { // зануляем массив состояний жителей для несложившегося треугольника-претендента 
      for (var j = 0; j < tempArray.length; j++) {
        isLoved[tempArray[j] - 1] = 0;
      }
    }
  }
  return totalTriangles;
};
