# Dockerized Application Deployment Template

You can use this project as template for deploying any dockerized application in a server without much pain.
Just need to replace sample projects (frontend, backend, third-party) relevant way.

As the sample code,
```
Frontend --> Backend(calculate function) --> ThirdParty(response decorate function)
```

And also, update the docker images names in the `docker-compose.yaml` file as necessary.


## Project Structure

```
|
|- frontend-app -> React
|   |
|   |- development env - PORT 3000 (host machine)
|   |- production env - PORT 80 (docker container)
|
|- backend-app -> Express.js
|   |
|   |- development env - PORT 3001 (host machine)
|   |- production env - PORT 80 (docker container)
|
|- third-party-app -> Express.js
|   |
|   |- development env - PORT 3002 (host machine)
|   |- production env - PORT 80 (docker container)
|
|- reverse-proxy -> Docker/Nginx
    |
    |- production env - PORT 80 (docker container)
        |
        |- frontend-app -> PORT 80 (host machine) "localhost"
        |- backend-app -> PORT 80 (host machine) "localhost/api/"
```

## Setup

- clone the project

### Development Environment

- run `npm install` for backend-app, third-part-app and front-end application
- run `npm start` in frontend-app (PORT 3000)
- run `npm start-nodemon` in backend-app (PORT 3001)
- run `npm start-nodemon` in third-party-app (PORT 3002)

### Production Environment

- run `docker-compose build` from root folder
- run `docker-compose up -d` for starting containers (PORT 80 / localhost)
- run `docker-compose down` for stopping containers
