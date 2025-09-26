function usdcny(usd) {
  const CNY = 6.75;
  let convert = usd * CNY;
  
  return `${convert.toFixed(2)} Chinese Yuan`;
}