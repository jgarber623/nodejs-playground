# express-typescript-api

A simple JSON API built using [Node.js](https://nodejs.org), [Express](https://expressjs.com), and [TypeScript](https://www.typescriptlang.org).

## Usage

```sh
npm install
npm start
```

Using tools like [curl](https://curl.se) and [fx](https://github.com/antonmedv/fx):

```sh
curl --silent http://localhost:8080/photos | fx
curl --silent http://localhost:8080/photos/1 | fx

curl --silent http://localhost:8080/categories | fx
curl --silent http://localhost:8080/categories/art | fx
```
