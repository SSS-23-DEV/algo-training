function expandedForm(num) {
    let stringNumbersArray = [...String(num)].reverse();
    let rankNumbersArray = [];

    for(let i=0; i<stringNumbersArray.length; i+=1){
        rankNumbersArray.push(stringNumbersArray[i] + '0'.repeat(i));
    }


    return rankNumbersArray.filter(x => !x.startsWith(0)).reverse().join(' + ');
};

console.log(expandedForm(424002));