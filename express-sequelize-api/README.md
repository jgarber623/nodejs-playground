# express-sequelize-api

A simple JSON API built using Node.js](https://nodejs.org), [Express](https://expressjs.com), [Sequelize](https://sequelize.org), and [PostgreSQL](https://www.postgresql.org).

```sh
# Install dependencies
brew install postgresql
npm install

# Run PostgreSQL
brew services run postgresql

# Copy the sample .env file and update its values
cp .env{.sample,}

# Create, migrate, and seed the development database
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all

# Run the thing
npm start
```

## Resources

The following articles, repositories, etc. were useful in developing this demo:

- Chinedu Orie's three-part series (and [the accompanying GitHub repository](https://github.com/nedssoft/sequelize-with-postgres-tutorial)):
	- [Getting Started with Sequelize and Postgres](https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp)
	- [Performing CRUD with Sequelize](https://dev.to/nedsoft/performing-crud-with-sequelize-29cf)
	- [Testing NodeJs/Express API with Jest and Supertest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)
- Victor Steven's [Restful API with NodeJS, Express, PostgreSQL, Sequelize, Travis, Mocha, Coveralls and Code Climate](https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014) and [the accompanying GitHub repository](https://github.com/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate)
- Jay Gould's [Testing on Node.js with Jest and a Sequelize test database](https://www.jaygould.co.uk/2020-07-28-jest-sequelize-testing-dedicated-database/) and [the accompanying GitHub repository](https://github.com/jaygould/nextjs-typescript-jwt-boilerplate)
- [bezkoder/node-express-sequelize-postgresql](https://github.com/bezkoder/node-express-sequelize-postgresql)
- [zrpaplicacoes/node-functional-boilerplate](https://github.com/zrpaplicacoes/node-functional-boilerplate)
