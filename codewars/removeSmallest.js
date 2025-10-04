function removeSmallest(numbers) {
    let minElem = Math.min(...numbers); 
    let indexMinElem = numbers.indexOf(minElem);
    let newArr = [...numbers];

    newArr.splice(indexMinElem, 1);;
    return newArr;
};

console.log(removeSmallest([1,2,3,4,1]));