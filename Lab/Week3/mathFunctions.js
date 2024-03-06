function add(number1, number2) {
  return number1 + number2;
}

function minus(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 == 0) {
    throw new Error("Divide by zero error");
  }
  return number1 / number2;
}
function calculate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return minus(number1, number2);
    case "x":
      return multiply(number1, number2);
    case "/":
      try {
        return divide(number1, number2);
      } catch (error) {
        throw error; // Burada zaten "Divide by zero error" hatası fırlatılıyor.
      }
    default:
      throw new Error("Unsupported operator. Please use +, -, x, or /");
  }
}

module.exports = {
  calculate,
};
