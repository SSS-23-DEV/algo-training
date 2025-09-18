function getConsectiveItems(items, key){
  let arr = [...String(items)];

  let counterKey = arr.reduce((acc, value)=>{
    if(value == key){
        acc+=1;
    }

    return acc;
  }, 0);

  return counterKey;
};

console.log(getConsectiveItems(1345324242, 1));
