function alphabet_order(str)
  {
    return str.toLowerCase().split('').sort().join('').trim();
  }
  console.log(alphabet_order("Unit Testing"))
  module.exports = alphabet_order;