# docker-microservices

## Usage

```sh
# Run `docker-compose up`
bin/start

# Connect to the running example container
bin/exec docker-microservices/example /bin/sh

# Install a package
bin/exec docker-microservices/example npm install --save-dev nodemon
```

## Resources

The following articles, repositories, etc. were useful in developing this demo:

- [BretFisher/node-docker-good-defaults](https://github.com/BretFisher/node-docker-good-defaults)
