
function deleteNth(arr, n){
    let counts = {};
    let res = [];

    for(let value of arr){
        counts[value] = (counts[value] || 0);

        if(counts[value] < n){
            res.push(value);
            counts[value]++;
        }
    };
    return res;
};

console.log(deleteNth([20,37,20,21], 1)); // 1), [20,37,21])