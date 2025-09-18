function rowWeights(array){
  let group1 = array.reduce((acc, val, index) => {
    if(index % 2 === 0){
      acc+=val;
    };
    return acc;
  }, 0);

  let group2 = array.reduce((acc, val, index) => {
    if(index % 2 !== 0){
      acc+=val;
    };
    return acc;
  }, 0);
  
  return [group1,group2];
};

console.log(rowWeights([70,58,75,34,91]));


{ // 2 способ (интересный)
var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}