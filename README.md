# Resultados-Futbol Node API
Node.js implementation for the
[Resultados Futbol](http://www.resultados-futbol.com) API

## Installation
```
npm i --save resultados-futbol-api
```

## Usage

Require the library and initialize it with your account key:

```js
const RF = require('resultados-futbol-api')

const rf = new RF('your-api-key')
```

#### Get Leagues Data

```js
rf.getLeagues()
  .then((leagues) => {
    console.log(leagues)
  })
  .catch(console.error)
```

*More methods coming soon*

## Running Tests
In order to run the tests, the integration tests require to create a `secrets.js` file
from the provided `secrets.js.example` example, and fill it in with a valid access key.

Then just `mocha`.

## License
MIT

