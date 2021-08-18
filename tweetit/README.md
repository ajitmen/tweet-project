### Project setup

A sample spring boot project to demonstrate a very minimal Twitter like API. The POC focuses only a light implementation for a couple of hours development.
In real use cases, a scalable design would be appropriate.

In the project directory, you can run:

```
./mvnw clean package -DskipTests
./mvnw spring-boot:start

```
Note: There are no tests in this POC version. However, it is highly recommended to start building java applications starting with tests, aka following TDD.

Use below commands to create a docker image

```
docker build -t ajitmen/tweetit:v0.1 .  # change the specifics
```

To run the docker image

```
docker run  -d -it  -p 8080:8080 --name tweetit ajitmen/tweetit:v0.1
```