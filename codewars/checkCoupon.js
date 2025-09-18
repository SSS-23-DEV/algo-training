function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let isCorrectCode = enteredCode === correctCode;
  
  let months = ['January', 
                'February', 
                'March', 
                'April', 
                'May', 
                'June', 
                'July', 
                'August', 
                'September', 
                'October', 
                'November',
                'December'];

    function parseDate(str){
        let [month, day, year] = str.replace(',', '').split(' ');
        return new Date(+year, months.indexOf(month), +day);
    };

    let current = parseDate(currentDate);
    let expiration = parseDate(expirationDate);

    return isCorrectCode && current <= expiration;
};

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));