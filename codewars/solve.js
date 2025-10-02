
function solve(s) {
    let regex = /[aeiou]/g;
    let arrStr = s.replace(regex, ' ').split('').map(el=> el !== ' ' ? el.charCodeAt() - 96 : '');

    let digits = [];
    let temp = 0;

    for(let i=0; i<arrStr.length; i+=1){
        if(arrStr[i] !== ''){
            temp += arrStr[i];
        }else{
            digits.push(temp);
            temp = 0;
        }
    };
    if(temp > 0){
        digits.push(temp);
    };
    
    return Math.max(...digits);
};

console.log(solve('az'));