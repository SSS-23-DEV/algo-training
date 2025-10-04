
function encode(string) {
    let vowels = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5',
    }
    let res = '';

    for(let i=0; i<string.length; i+=1){
        if('aeiou'.includes(string[i])){
            res+=vowels[string[i]];
        }else{
            res+=string[i];
        }
    }
    return res;
};

function decode(string) {
  let vowels = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u',
    };
    let res = '';

     for(let i=0; i<string.length; i+=1){
        if('12345'.includes(string[i])){
            res+=vowels[string[i]];
        }else{
            res+=string[i];
        }
    }
    return res;
};

console.log(decode('h2ll4'));