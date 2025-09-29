function highAndLow(numbers){
  let arrNumbers = numbers
                        .split(' ')
                        .map(value => +value)
                        .sort((a,b) => a-b);

  return `${arrNumbers[arrNumbers.length-1]} ${arrNumbers[0]}`;
}