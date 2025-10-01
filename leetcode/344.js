var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        [s[left], s[right]] =  [s[right], s[left]] 
        left+=1;
        right-=1;
    };
};

let result = reverseString(["h","e","l","l","o"]);
console.log(result);