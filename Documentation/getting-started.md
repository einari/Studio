# Getting started

Studio is built on top of our own [Vanir](https://github.com/dolittle-entropy/vanir).

## Development Environment

There is a shared development environment for the microservices. You can find this in the [.dolittle](./.dolittle) folder.
Open a terminal and run:

```sh
cd .dolittle
docker-compose up
```

The environment consists of a shared MongoDB instance and runtimes for the different microservices configured to use this
with unique databases for the event stores. Each runtime is also configured appropriately for event horizon and consent
for connecting.

In addition to this there is an Nginx instance that acts like a composition layer, much like it will be handled when running
in a Kubernetes environment with an ingress controller composing it together.

### Local development
- start mongo
```sh
cd .dolittle
docker-compose up -d studio-mongo
```
- depending on the app your working in you might want to spin up a runtime, or not.

## Restoring all dependencies

This project leverages Yarn and its workspace capability. At the root of the project you'll find a [package.json](./package.json)
file that describes the common dependencies and also how to find the different projects. One of the benefits is that this will
give you a common `node_modules` folder at the root for common dependencies.

First thing we need to do is install all the packages. In your terminal, navigate to the [root](./) of the project and the following:

```sh
yarn
```

This should restore all dependencies and dev dependencies for all projects.

## Microservices

Within the [Source](../Source) folder there should be one directory per Microservice. Within each of these microservices you'll
typically find a Backend and/or a Web (frontend). The typical process of working with Microservices in this project is that you
start the things you need to work on and not all of the microservices.

### Backend

The backends can be run using

```sh
yarn start:dev
```

- this starts the backend of the microservice and watches for any changes of any TypeScript
files related to the project or from the shared projects it depends on. When a change occurs, it will restart it.

### Frontend / Web

The Web frontends leverages WebPack and its WebPack DevServer. To get started run:

```sh
yarn start:dev
```
and navigate to the port outputted in the terminal. As with the backend, it will watch for any changes and recompile the WebPack project.

> You will only see the frontend of your microservice doing this, and completely out of context from the portal it lives in. Read more on the composition.

### Frontend composition

The frontends belong to a larger application composition. In order for you to see it in context of this, you need to start the Portal Web.
Navigate to the [Source/Portal/Web](../Source/Portal/Web) and run:
```sh
yarn start:dev
```
from this. With the environment running as described at the top of this
document, you can now navigate the browser to [http://localhost:9000](http://localhost:9000). With the portal running, you can now chose to
start the frontend of the microservice you're working on.

Read more about how the composition works [here](https://github.com/dolittle-entropy/vanir/blob/main/Documentation/frontend/composition.md).
