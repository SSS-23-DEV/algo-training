function sortArray(array) {
    let oddArr = array.filter((num)=> num % 2 !== 0).sort((a,b) => a-b);
    let oddIndex = 0;

    let result = [];

    for(let i=0; i < array.length; i+=1){
        if(array[i] % 2 === 0){
            result.push(array[i]);
        }else{
            result.push(oddArr[oddIndex]);
            oddIndex+=1;
        }
    }

    return result;
}

console.log(sortArray([5, 8, 6, 3, 4]));