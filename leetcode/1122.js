



function relativeSortArray(arr1, arr2) {
    let result = [];

    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if(arr1[j] === arr2[i]){
                result.push(arr1[j]);
            }
        }
    }
    
    let remaining = arr1.filter(elem => !result.includes(elem)).sort((a,b) => a-b);
    
    result.push(...remaining);
    
    return result;
};


console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));

// 2,2,2,1,4,3,3,9,6,7,19]

// 2 arr задает правило сортивровки 1 arr (-> 1);
