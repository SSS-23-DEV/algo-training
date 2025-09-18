function sumMul(n,m){
  let res = 0;
  if(m<=n) return 'INVALID';

  for(let i = n ; i<m; i+=n){
    res += i;
  }
  return res;
};

console.log(sumMul(33, 6534));