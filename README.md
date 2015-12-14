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
ZeroMQ is a dependency for ZSS Broker as described in the project.

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

## Tasks

Each project will have the it's own readme with information about the tasks to execute and module details.
