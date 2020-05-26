# Udagram Image Filtering Microservice
[![Build Status](https://travis-ci.com/omerfarukakdag/cloud-developer.svg?branch=master)](https://travis-ci.com/omerfarukakdag/cloud-developer)

Udagram is a simple cloud application developed alongside the Udacity Cloud Developer Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](/udacity-c3-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI Feed Backend](/udacity-c3-restapi-feed), a Node-Express feed microservice.
3. [The RestAPI User Backend](/udacity-c3-restapi-user), a Node-Express user microservice.

## Getting Setup

> _tip_: this frontend is designed to work with the RestAPI backends). It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate.

### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### Installing Ionic Cli
The Ionic Command Line Interface is required to serve and build the frontend. Instructions for installing the CLI can be found in the [Ionic Framework Docs](https://ionicframework.com/docs/installation/cli).

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located at the root directory of a Node.js project. 

1. Clone this repository
2. Open your terminal
3. Run **npm install** for the frontend and backend projects.

- Example: 

```bash
cd ./udacity-c3-restapi-feed
npm install
```

### Configure The Backend Endpoint
Ionic uses enviornment files located in `./src/enviornments/enviornment.*.ts` to load configuration variables at runtime. By default `environment.ts` is used for development and `enviornment.prod.ts` is used for produciton. The `apiHost` variable should be set to your server url either locally or in the cloud.

***
### Running the Development Server
Ionic CLI provides an easy to use development server to run and autoreload the frontend. This allows you to make quick changes and see them in real time in your browser. To run the development server, open terminal and run:

```bash
ionic serve
```
***

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the **udacity-c3-deployment/docker** directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

### Deploy on Kubernetes

1. Navigate to the  **udacity-c3-deployment/k8s** directory
2. Set AWS credentials and configs
3. Run:

```bash
kubectl apply -f ./config
```
```bash
kubectl apply -f ./service
```
```bash
kubectl apply -f ./deployment
```
4. Forward local ports for the reverseproxy and frontend services
```bash
kubectl port-forward service/reverseproxy 8080:8080
```
```bash
kubectl port-forward service/frontend 8100:8100
```