# Fin

![](https://github.com/pinkdragon1000/Fin/actions/workflows/node.js.yml/badge.svg)
![](https://github.com/pinkdragon1000/Fin/actions/workflows/java.yml/badge.svg)
![](http://online.swagger.io/validator?url=https%3A%2F%2Fpinkdragon1000.github.io%2Ffin-api-spec%2Fswagger.yaml)


- Angular application with Java backend to keep track of financial account transactions and deposits
- This project uses [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4. The Java portion of this application uses Java 14 and Spring Boot.

- End User Goal: An application to keep track of account transactions for checking and savings accounts.
- End Technical Goal: Create a Java API that will be consumed by the Angular frontend application. Use technologies including Angular, Java Spring Boot, AWS ECS, MySQL, Firebase Hosting and Docker.

**Zenhub board:** https://github.com/pinkdragon1000/Fin#workspaces/fin-5fef3b7ee371a2001164b41b/board?repos=270075836
### Architecture Diagram:

![](https://github.com/pinkdragon1000/Fin/blob/master/architectureDiagram.drawio.png)

### Angular Application
![](https://github.com/pinkdragon1000/Fin/blob/master/angularBuildDeployDiagram.drawio.png)

<b>Viewing the production deployed Angular Application:</b>

https://finaccounts.web.app/

<b>Running the Angular Application Locally:</b>

```
cd angularfrontend
ng serve
```

<b>Deploying the Angular Application:</b>

The frontend is deployed using [Firebase Hosting](https://firebase.google.com/).  By default new code is pushed to Firebase through a Github Actions workflow.  If I want to manually deploy I do the following:

```
cd angularfrontend
ng build --prod
firebase deploy
```

<b> Code scaffolding </b>

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<b> Running unit tests </b>

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<b> Running end-to-end tests </b>

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Java API


View the API Spec Here: https://pinkdragon1000.github.io/fin-api-spec/

<b>Running the Java API Locally (Without Docker):</b>

```
Ensure the MySQL local database is running
In IntelliJ or similar IDE
Open the folder src->main->java->com.javabackend.fin
Find FinApplication.java-> Right Click-> Run 'FinApplication.main()'
Wait to see that the Tomcat server has started
Open localhost:8080 in a browser
```

<b>Docker Setup</b>

1. Creating the jar
   `./mvnw package && java -jar target/fin-0.0.1-SNAPSHOT.jar`

2. Building a Docker Container
   First ensure you have the Docker Desktop app open and are signed in. Then run the following to create the container:
   `docker build -t springio/fin .`

3. To view Docker Images: `docker images`

4. Login with DockerHub credentials in terminal:
   `docker login --username=sitarobinson`

5. Pushing to DockerHub repository

```
docker tag springio/fin:latest sitarobinson/fin:firsttry
docker push sitarobinson/fin:firsttry
```

<b>Running the Java API Locally (With Docker).  Open on port 8081:</b>
`docker-compose up`

[API Docker Hub Link](https://hub.docker.com/repository/docker/sitarobinson/fin)

<b>Viewing the production Java API:</b>

```
TODO
```

Resources

- https://angular.io/docs
- https://firebase.google.com/docs/hosting
- https://spring.io/guides/gs/spring-boot/
- https://spring.io/guides/gs/spring-boot-docker/
- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-parent/2.5.4
