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
