# snake-to-camel-converter

A simple npm package for converting object keys from snake_case to camelCase.

## Installation

```bash
npm install snake-to-camel-converter
```

### Usage

```javascript
const snakeToCamelConverter = require('snake-to-camel-converter');

// String Case Conversions
const inputString = "this_is_a_test_string";

const camelCaseString = snakeToCamelConverter.convertToCamelCase(inputString);
console.log(camelCaseString);

const snakeCaseString = snakeToCamelConverter.convertToSnakeCase(camelCaseString);
console.log(snakeCaseString);

const pascalCaseString = snakeToCamelConverter.convertToPascalCase(snakeCaseString);
console.log(pascalCaseString);

const kebabCaseString = snakeToCamelConverter.convertToKebabCase(pascalCaseString);
console.log(kebabCaseString);

// Object Key Conversions
const inputObject = {
  first_name: 'John',
  last_name: 'Doe',
  contact_info: {
    email_address: 'john@example.com',
    phone_number: '123-456-7890'
  }
};

const camelCaseObject = snakeToCamelConverter.convertToCamelCase(inputObject);
console.log(camelCaseObject);

const snakeCaseObject = snakeToCamelConverter.convertToSnakeCase(camelCaseObject);
console.log(snakeCaseObject);

const pascalCaseObject = snakeToCamelConverter.convertToPascalCase(snakeCaseObject);
console.log(pascalCaseObject);

const kebabCaseObject = snakeToCamelConverter.convertToKebabCase(pascalCaseObject);
console.log(kebabCaseObject);

```
## Example 

### Input

```javascript
const inputObject = {
  my_key: 'value',
  nested_object: {
    another_key: 'another_value'
  }
};
```

### Output

```javascript
{
  myKey: 'value',
  nestedObject: {
    anotherKey: 'another_value'
  }
}
```

### Input with array

```javascript
const inputObject = {
  my_key: 'value',
  nested_object: {
    another_key: 'another_value'
  },
  my_array: [
    {
      my_key: 'value',
      nested_object: {
        another_key: 'another_value'
      }
    },
    {
      my_key: 'value',
      nested_object: {
        another_key: 'another_value'
      }
    }
  ]
};
```

### Output with array

```javascript
 {
  myKey: 'value',
  nestedObject: {
    anotherKey: 'another_value'
  },
  myArray: [
    {
      myKey: 'value',
      nestedObject: {
        anotherKey: 'another_value'
      }
    },
    {
      myKey: 'value',
      nestedObject: {
        anotherKey: 'another_value'
      }
    }
  ]
};

```
### Example with JSON


```json
{
  "first_name": "John",
  "last_name": "Doe",
  "contact_info": {
    "email_address": "john@example.com",
    "phone_number": "123-456-7890"
  }
}

```

### Output with JSON

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "contactInfo": {
    "emailAddress": "john@example.com",
    "phoneNumber": "123-456-7890"
  }
}
  
  ```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)