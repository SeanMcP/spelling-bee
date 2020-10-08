/**
 * Creates a new element with given attributes and properties
 * @param   {String} tag        The type of element to create
 * @param   {Object} attributes An object of attributes to be applied
 * @returns {Node}              A new node with applied attributes
 */
export function el(tag, attributes = {}) {
  if (typeof document === undefined) return;

  let element = document.createElement(tag);

  for (let key in attributes) {
    const value = attributes[key]
    if (element[key] != null) {
      element[key] = value
    } else {
      element.setAttribute(key, value);
    }
  }

  return element;
}

/**
 * Returns a shuffled shallow copy of an array
 * @param {Array} array An array to shuffle
 */
export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
