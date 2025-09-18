function flattenAndSort(array) {
  let res = array.flat().sort((a,b) => a - b);
  return res;
};

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));