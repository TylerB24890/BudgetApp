const numeral = require('numeral')

export const CurrencyFormat = (num) => {
  return numeral(num).format('$0,0.00')
}
