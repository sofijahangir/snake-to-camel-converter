function convertToCamelCase(input) {
  if (typeof input === 'string') {
    return input.replace(/([-_]\w)/g, match => match.charAt(1).toUpperCase());
  } else if (Array.isArray(input)) {
    return input.map(item => convertToCamelCase(item));
  } else if (typeof input === 'object' && input !== null) {
    let newObj = {};
    for (let key in input) {
      let newKey = key.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
      newObj[newKey] = convertToCamelCase(input[key]);
    }
    return newObj;
  } else {
    return input;
  }
}

function convertToSnakeCase(input) {
  if (typeof input === 'string') {
    return input.replace(/([A-Z])/g, '_$1').toLowerCase();
  } else if (Array.isArray(input)) {
    return input.map(item => convertToSnakeCase(item));
  } else if (typeof input === 'object' && input !== null) {
    let newObj = {};
    for (let key in input) {
      let newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      newObj[newKey] = convertToSnakeCase(input[key]);
    }
    return newObj;
  } else {
    return input;
  }
}

function convertToPascalCase(input) {
  if (typeof input === 'string') {
    return input.replace(/[-_ ](\w)/g, match => match.charAt(1).toUpperCase());
  } else if (Array.isArray(input)) {
    return input.map(item => convertToPascalCase(item));
  } else if (typeof input === 'object' && input !== null) {
    let newObj = {};
    for (let key in input) {
      let newKey = key.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
      newObj[newKey] = convertToPascalCase(input[key]);
    }
    return newObj;
  } else {
    return input;
  }
}

function convertToKebabCase(input) {
  if (typeof input === 'string') {
    return input.replace(/_/g, '-').toLowerCase();
  } else if (Array.isArray(input)) {
    return input.map(item => convertToKebabCase(item));
  } else if (typeof input === 'object' && input !== null) {
    let newObj = {};
    for (let key in input) {
      let newKey = key.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
      newObj[newKey] = convertToKebabCase(input[key]);
    }
    return newObj;
  } else {
    return input;
  }
}

module.exports = {
  convertToCamelCase,
  convertToSnakeCase,
  convertToPascalCase,
  convertToKebabCase
};
