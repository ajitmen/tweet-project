### Project

A sample react with spring boot project to demonstrate a very minimal Twitter like app. The POC focuses only a light implementation for a 2 days of development. In real use cases, a scalable design would be appropriate.

Backend API: tweetit 

Frontend: tweet-ui

The project is deployed in AWS EC2 as docker containers as it is the simplest option to get POC running in cloud.

Ideally this use case have good opportunities to host as a Kubernetes workload behind an API Gateway with caching and separate databases with replication (read/write) for scalability.


#### Postman collections

[Import File](./Tweetit.postman_collection.json)

#### Demo App
https://tweet.gonova.uk/

#### Swagger Link
http://localhost:8080/swagger-ui/  (Not enabled publicly)