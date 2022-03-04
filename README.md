# [![image](https://avatars2.githubusercontent.com/u/18479455?s=60&v=4)](https://cimonitor.readthedocs.io) CIMonitor

[![release](https://img.shields.io/github/release/CIMonitor/CIMonitor.svg)](https://github.com/CIMonitor/CIMonitor/releases)
[![MIT](https://img.shields.io/github/license/CIMonitor/CIMonitor.svg)](https://github.com/CIMonitor/CIMonitor/)
[![docker pulls](https://img.shields.io/docker/pulls/cimonitor/server.svg)](https://hub.docker.com/u/cimonitor/)
[![stars](https://img.shields.io/github/stars/CIMonitor/CIMonitor.svg)](https://github.com/CIMonitor/CIMonitor/stargazers)
[![read-the-docs](https://readthedocs.org/projects/cimonitor/badge/?version=latest)](https://cimonitor.readthedocs.io)
[![travis-ci](https://travis-ci.org/CIMonitor/CIMonitor.svg?branch=master)](https://travis-ci.org/CIMonitor/CIMonitor)

CIMonitor is a place where all your CI statuses come together. Check if all tests have passed, and if
deployments are successful. All in one overview. This is all done via webhooks, so no complex configuration.

The time that deployments were scary is over, lets make them FUN!

Full support for the following webhooks:

-   GitLab:
    -   Pipeline events
    -   job events
-   GitHub:
    -   Action workflows

## Running CIMonitor

The easiest and quickest way to run CIMonitor is via docker. Running the command below will
start CIMonitor on [localhost:3030](http://localhost:3030):

```shell
docker run \
    --publish 3030:3030 \
    --detach \
    --restart unless-stopped \
    cimonitor/server:4.0.0
```

It is possible to run CIMonitor on Kubernetes too of course.

## Development

To start development, run the following commands on your terminal:

-   `make`: See all availabe make commands.
-   `make init`: The first time you want to run the project locally.
-   `make start`: Run the development server.
-   `make production`: Build and run a production build of the project.
