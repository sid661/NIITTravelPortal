FROM openjdk:11
ADD ./target/api-gateway-0.0.1-SNAPSHOT.jar /usr/src/email-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "email-service-0.0.1-SNAPSHOT.jar"]