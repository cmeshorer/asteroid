/**
 * Gets an average from an array of values
 * @param  {number[]} values The values
 * @return {number} The computed average
 */
export const getAverage = (values: number[]) => {
  return values.reduce((a, b) => a + b) / values.length;
};

/**
 * Shortens a value with 2 decimal places
 * @param  {number|string} value The value
 * @return {string} The shortened value
 */
export const shortenValue = (value: number | string) => {
  return Number(value).toFixed(2);
};
