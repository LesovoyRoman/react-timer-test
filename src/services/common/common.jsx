/**
 * Set property to object
 * @param object
 * @param option
 * @param value
 * @returns {*}
 */
export const setOption = (object, option, value) => {
  Object.defineProperty(object, option, {
    value: value,
    writable: true,
  });
  return object;
};
