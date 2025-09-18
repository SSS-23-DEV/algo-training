function sumOfMinimums(arr) {
    let sumMinimumElements = [];

    for(let i=0; i<arr.length; i+=1){
        let minimumVal = arr[i][0];

        for(let j=0; j<arr[i].length; j+=1){
            if(arr[i][j] < minimumVal){
                minimumVal = arr[i][j];
            }
        }
        sumMinimumElements.push(minimumVal);
        
    }
    return sumMinimumElements.reduce((acc, x) => acc += x, 0);
};

console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));