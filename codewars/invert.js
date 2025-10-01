function invert(array) {
    let invertArray = array.map(elem => {
    return elem < 0 ? Math.abs(elem) : -elem;
  });

  return invertArray;
}