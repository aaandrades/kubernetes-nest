# :rocket: Kubernetes practice with NestJs

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

## Description

Small project to practice Kubernetes on Local through MiniKube

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the Cluster
First you have to install [Kubectl](https://kubernetes.io/docs/tasks/tools/) (Kubernetes CLI) and [Minikube](https://minikube.sigs.k8s.io/docs/start/). Then execute

```bash
# Create and start the cluster
$ minikube start

# Get info of current cluster
$ kubectl cluster-info

# Open dashboard of K8s
$ minikube dashboard

# Load local image of docker (You have to create it first)
$ minikube image load <IMAGE_NAME>

# Check Minikube status
$ minikube status

# Apply configuration of kube/ directory
$ kubectl apply -f kube

# Watcher of Pods Status
$ kubectl get pods --watch

# Show url and start service
$ minikube service knote --url

Or run directly the container

# Run container
$ kubectl port-forward deployment/nestkube 8080:3000

# When you are done, you can delete all the implementation with:
$ kubectl delete -f kube
```

## Stay in touch

- Author - Andres Andrade
