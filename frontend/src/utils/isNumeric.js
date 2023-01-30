/**
 * Description - Checks if the provided stirng is a number.
 * @param {string} str - The string to be checked to seeif it is a number
 * @returns {boolean} - Returns true if the string is a number, false otherwise
 */
function isNumeric(str) {
  // meant to be used only for strings
  if (typeof str != "string") throw new Error("isNumeric expects a string");

  return !isNaN(str) && !isNaN(parseFloat(str));
}

export default isNumeric;
