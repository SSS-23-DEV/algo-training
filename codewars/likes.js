function likes(names) {
    const formats = {
        0: () => `no one likes this`,
        1: ([a]) => `${a} likes this`,
        2: ([a, b]) => `${a} and ${b} like this`,
        3: ([a, b, c]) => `${a}, ${b} and ${c} like this`,
        default: (arr) => `${arr[0]}, ${arr[2]} and ${arr.length-2} others like this`,
    };

    let res = formats[names.length] || formats['default'];

    return res(names);
};

console.log(likes(['Sagyndyk', 'Asyl']));