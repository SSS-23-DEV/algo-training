var isPalindrome = function(x) {
    let original = x.toString();
    let reverse = [...original].reverse().join('');

    for(let i = 0; i<original.length; i+=1){
        if(original[i] !== reverse[i]) return false;
    }

    return true;
};

console.log(isPalindrome(12213));




var createHelloWorld = function() {

    return function(...args) {
        
    }
};


const f = createHelloWorld();
f(); // "Hello World"
