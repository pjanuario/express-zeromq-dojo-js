# Workshop with Node.js and ZeroMQ Service Suite
This repository contains information for a workshop on Express and ZeroMQ Service Suite (ZSS) using a dojo style.

## Goals

* Write asyncronous code using Node.js error first callback pattern
* Write asyncronous code using promises
* Write api endpoints using express
* Write ZSS client
* Write ZSS service
* Write unit&integration tests
* Use test libraries such as: supertest, nock, mocha, chai

## Requirements

*ZeroMQ*
[ZeroMQ](http://zeromq.or) is a dependency for ZSS Broker as described in the project.

*ZSS Broker*

To run the service you need to download and run the ZSS service broker.

https://github.com/pjanuario/zmq-service-suite-broker-js

## Project Structure

The project is a simple todo list where tasks can be assigned to github users.

A task contains the following properties:
* id: unique identifier
* createdAt: timestamp from creation date;
* updatedAt: timestamp from last update;
* title: a title associated to the task;
* completed: identifies if the task is completed;
* userId: github unique identifier;

A task contains the following a user subresource with the following properties:
* id: github unique identifier;
* name: user name;
* email: user email address;

Available resources on the API:
* GET /tasks -> retrieve the list of tasks available
* GET /tasks/:id -> retrieve a specific task
* GET /tasks/:id/user -> retrieve the user associated with the task
* POST /tasks -> create a new task
* DELETE /tasks/:id -> delete the specified task
* PUT /tasks/:id -> save specified task

The some project will contain the API and service modules, the service will contain all business logic.

### API

The API is built using express.

### Service

The service is implemented and exposed using ZSS service.

## Starting the modules

**0MQ Install**

You need to have [0MQ installed](http://zeromq.org/area:download).

If you use MacOS just do

    $ brew install zeromq

**Run ZSS Broker**

    $ git clone git@github.com:pjanuario/zmq-service-suite-broker-js.git
    $ npm install
    $ npm start

**Run The API**

    $ cd api
    $ npm install
    $ npm start
    $ curl -i http://localhost:8081/
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Headers: Content-Type
    Access-Control-Allow-Methods: GET,POST,PATCH,DELETE
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 39
    ETag: W/"27-+FvXRSx6O6KB96HTEAPcow"
    Date: Fri, 18 Dec 2015 10:55:07 GMT
    Connection: keep-alive

    {"status":"API is running properly..."}%

**Run The Service**

    $ cd service
    $ npm install
    $ npm install -g node-mongo-seeds
    $ seeds
    $ npm start

With the previous script we installed the service dependencies and loaded some data in mongodb. Now let's retrieve mongodb object identifier for the model.

    $ mongo
    $ use todo-dojo
    $ db.tasks.find()

Now, let's get data from the API using the model id retrieved on this step (replace it in URL).

    $ curl -i http://localhost:8081/tasks/5673e800f1384b3c8b58db84
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Headers: Content-Type
    Access-Control-Allow-Methods: GET,POST,PATCH,DELETE
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 181
    ETag: W/"b5-h0hshYjiL6h8zvUh9vEhKw"
    Date: Fri, 18 Dec 2015 11:07:46 GMT
    Connection: keep-alive

    {"id":"5673e800f1384b3c8b58db84","createdAt":"2015-12-14T14:51:06+00:00","updatedAt":"2015-12-15T14:51:06+00:00","title":"this is a test task","completed":true,"userId":"pjanuario"}%

## Tasks

Each project will have the it's own readme with information about the tasks to execute on each module and module specific details.

We will use the following order:

* ``service/README.md``
* ``api/README.md``
