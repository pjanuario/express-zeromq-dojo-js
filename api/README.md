# Tasks API

Ensure that you have the following components are running:

* mongodb
* ZSS Broker
* Task Service

Execute the following commands to get API running.

**Install API module**

    $ npm install

**Start API**

    $ npm start

## Project structure

```
-- service
   |- configs -> service configuration provided by convict module
      |- schema.js -> defines the configuration schema used by convict
      |- development.json -> development specific configurations
      |- errors.json -> errors dictionary
   |- controllers -> http controllers, should be used to retrieve information from http req
   |- models  -> data transfer objects, used for serialization and as domain models
   |- repositories -> data access internal logic
      |- task      -> task repository
      |- user      -> user repository
   |- tests       -> API tests
   |- config.js   -> configuration module loader
   |- index.js    -> boot for the api
   |- logger.js   -> logger module loader
   |- routes.js   -> API routes declaration
```

## Tools

In the following exercise tasks we will use the following tools.

* supertest - http test library built on top of superagent
* mocha - test tool
* chai - expectations library

## Endpoints

Available endpoints and cURL requests.

*GET /tasks/:id*

    curl -i http://localhost:8081/tasks/0

*GET /tasks/:id/user*

    curl -i http://localhost:8081/tasks/0/user

## Next Steps

1. Create a endpoint to list all tasks (with tests included)
