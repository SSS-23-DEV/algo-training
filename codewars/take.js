function take(arr, n) {
  let res = [];

  for(let i=0; i<n; i++){
    res.push(arr[i]);
  }
  
  return res;
};

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));