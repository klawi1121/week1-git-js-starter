/**
 * String Utilities
 * Functions for string manipulation and analysis
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  // TODO: Implement capitalize
  // Hint: Get the first character with str[0] or str.charAt(0)
  // Convert it to uppercase, then concatenate with the rest of the string
  // Don't forget to handle empty strings!
  if(str.length === 0) {
    return '';
  }
  const capitalized = str[0].toUpperCase() + str.slice(1);
  return capitalized;

  //or should i change it into str.charAt(0).toUpperCase() so it safely return an empty string?
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  // TODO: Implement reverse
  // Hint: Convert string to array with split(''), reverse it, join back
  // Or you can use a loop to build the reversed string
  let word = str.split('');
  let reversedword = word.reverse();
  let combinedletters = reversedword.join('');
  return combinedletters;
}

/**
 * Checks if a string is a palindrome (reads same forwards and backwards)
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  // TODO: Implement palindrome checker
  // Hint: Convert to lowercase first for case-insensitive comparison
  // Compare the string with its reversed version
  // You can use the reverse function you just wrote!
  let convertword = str.toLowerCase();
  return convertword === reverse(convertword);
}

/**
 * Counts the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Number of words
 */
function wordCount(str) {
  // TODO: Implement word counter
  // Hint: Trim whitespace first, then split by spaces
  // Don't forget to handle empty strings!
  // Be careful with multiple spaces between words
  if(str.trim() === '') {
    return 0;
  }   
  let word = str.trim().split(/\s+/);
  return word.length; 

  // or i put split on return statement?
  
}

// Export all functions
export { capitalize, reverse, isPalindrome, wordCount };
