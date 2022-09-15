# C/CD with Docker and CircleCI demo app

In this demo app, I built a simple Hello World Node.js REST API, dockerized it, and made a CI/CD pipeline with CircleCI.

I use DockerHub to deploy the docker image and a Linode instance running a docker container to host the dockerized app. The workflows for testing the app, building the Docker Image, and deploying to DockerHub and Linode are all automated via CI/CD pipelines built with CircleCI. Every commit to this repo triggers those workflows.

The docker image exposes `PORT 3000` to serve the API. Use this on port mapping.

This repo is part of my article for ContentLab where I talked about implementing a CI/CD pipeline for a dockerized app.
