/**
 * Math Utilities
 * Basic mathematical operations for learning JavaScript functions
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  // TODO: Implement addition
  // Hint: Return the sum of a and b
  let sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  return sum;
}

/**
 * Subtracts b from a
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  // TODO: Implement subtraction
  // Hint: Return a minus b
  let difference = a - b;
  console.log(`The difference of ${a} and ${b} is ${difference}`);
  return difference;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  // TODO: Implement multiplication
  // Hint: Return the product of a and b
  let product = a * b;
  console.log(`The product of ${a} and ${b} is ${product}`);
  return product;
}

/**
 * Divides a by b
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a and b
 */
function divide(a, b) {
  // TODO: Implement division
  // Hint: Check if b is zero first to avoid division by zero error
  // Return an appropriate value or throw an error if b is zero
  if (b === 0) {
    console.error("Error: Division by zero is not allowed.");
    return null; // or you could throw an error
  }
  let quotient = a / b;
  console.log(`The quotient of ${a} and ${b} is ${quotient}`);
  return quotient;
}

/**
 * Raises base to the power of exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the power of exponent
 */
function power(base, exponent) {
  // TODO: Implement exponentiation
  // Hint: Use Math.pow() or the ** operator
  let result = Math.pow(base, exponent);
  console.log(`The result of ${base} raised to the power of ${exponent} is ${result}`);
  return result;
}

function main() {
  let a = 1;
  let b = 0;

  add (a, b);
  subtract (a, b);
  multiply (a, b);
  divide (a, b);
  power (a, b);

}

// Export all functions
export { add, subtract, multiply, divide, power };

main();
