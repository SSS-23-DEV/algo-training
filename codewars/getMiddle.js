function getMiddle(s) {
    let strLength = Math.floor(s.length / 2);

    return s.length % 2 === 0 ? s[strLength-1] + s[strLength] : s[strLength];
};

console.log(getMiddle('test')); // es
console.log(getMiddle('testing')); // es
console.log(getMiddle('middle')); // es
console.log(getMiddle('A')); // es