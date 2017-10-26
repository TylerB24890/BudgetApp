/*export const CurrencyFormat = (num) => {
  var p = num.toFixed(2).split(".");
  return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  }, "") + "." + p[1];
}*/

export const CurrencyFormat = (num) => {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
}
