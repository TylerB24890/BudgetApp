export const CurrencyFormat = (num) => {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
}
