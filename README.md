# Fin
![Build Status](https://travis-ci.com/pinkdragon1000/Fin.svg?token=q5n1Rmswxjw88tYJB7A8&branch=master)
* Angular application with Java backend to keep track of financial account transactions and deposits
* This project uses [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.  The Java portion of this application uses Java 14 and Spring Boot. 

* End User Goal: An application to keep track of account transactions for checking and savings accounts.
* End Technical Goal: Create a Java API that will be consumed by the Angular frontend application.  Use technologies including Angular, Java Spring Boot, AWS ECS, MySQL, Firebase Hosting and Docker.    

### Angular Application

<b>Viewing the Angular Application:</b>

https://finaccounts.web.app/

<b>Deploying the Angular Application:</b>

The frontend is deployed using [Firebase Hosting](https://firebase.google.com/).  

```
cd angularfrontend
ng build --prod
firebase deploy
```

<b>Running the Angular Application:</b>
```
cd angularfrontend
ng serve
```

<b> Code scaffolding </b>

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<b> Running unit tests </b>

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<b> Running end-to-end tests </b>

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


### Java API

<b>Running the Java API Locally:</b>
```
In IntelliJ or similar IDE
Open the folder src->main->java->com.javabackend.fin
Find FinApplication.java-> Right Click-> Run 'FinApplication.main()'
Wait to see that the Tomcat server has started
Open localhost:8080 in a browser
```

<b>Viewing the Java API:</b>
```
TODO
```

Resources
* https://angular.io/docs
* https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-angular-app-with-java-backend-87fb603c6e17
* https://spring.io/guides/gs/spring-boot/
* https://firebase.google.com/docs/hosting
