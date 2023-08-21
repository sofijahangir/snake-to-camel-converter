function convertToCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => convertToCamelCase(item));
  } else if (typeof obj === 'object' && obj !== null) {
    let newObj = {};
    for (let key in obj) {
      let newKey = key.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
      newObj[newKey] = convertToCamelCase(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
}

module.exports = function (input) {
  if (Array.isArray(input)) {
    return input.map(item => convertToCamelCase(item));
  } else {
    return convertToCamelCase(input);
  }
};
