# Tasks Service

Ensure that you have the following components running:

* mongodb
* ZSS Broker

Execute the following commands to get service running with data.

**Install service modules**

    $ npm install

**Install global seed module to populate mongodb**

    $ npm install -g node-mongo-seeds

**Populate mongo with tasks**

    $ seeds

**Start service instance**

    $ npm start

## Project structure

```
-- service
   |- configs -> service configuration provided by convict module
      |- schema.js -> defines the configuration schema used by convict
      |- development.json -> development specific configurations
      |- errors.json -> errors dictionary
   |- models  -> data transfer objects, used for serialization and as domain models
   |- repositories -> data access internal logic
      |- dao       -> data access objects modules
         |- task   -> mongoose task data access object model
      |- mongoose  -> mongoose connection instance configuration
      |- task      -> task repository
    |- seeds       -> seeds used to populate development db
    |- tests       -> service tests
    |- config.js   -> configuration module loader
    |- index.js    -> boot for service instance
    |- service.js  -> service implementation
    |- user_service.js  -> user sub service implementation
```

## Tools

* superagent - http request library
* mocha - test tool
* mocha-mongoose - utility library to reset mongo collections on each test
* chai - expectations library
* nock - mocking http requests


## Next Steps

1. Some code monkey let you a surprise, find it and fix it.
1. The same monkey didn't created tests for the external integration with github let's fix this.
1. Do you think the service interface for task user make sense? let's discuss it and fix it.
1. Let's create a new operation on a service! Where should you start? Have eard about TDD? So let's try it. Implement the endpoint to retrieve a list of tasks.
1. Identify service problems, trust me, it have a lot of issues!
