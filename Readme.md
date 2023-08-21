# snake-to-camel-converter

A simple npm package for converting object keys from snake_case to camelCase.

## Installation

```bash
npm install snake-to-camel-converter
```

### Usage

```javascript
const snakeToCamelConverter = require('snake-to-camel-converter');

const inputObject = {
  my_key: 'value',
  nested_object: {
    another_key: 'another_value'
  }
};

const camelCaseObject = snakeToCamelConverter(inputObject);
console.log(camelCaseObject);
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