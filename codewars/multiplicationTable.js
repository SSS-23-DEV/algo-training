function multiplicationTable(size) {
    let matrix = [];
    let temp = [];

    for(let i = 1; i<=size; i+=1){
        for(let j = 1; j<=size; j+=1){
            temp.push(i * j);

            if(temp.length === size){
                matrix.push(temp);
                temp = [];
            }
        }
    };

    return matrix;
};

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]