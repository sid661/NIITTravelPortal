FROM openjdk:11
ADD ./target/api-gateway-0.0.1-SNAPSHOT.jar /usr/src/RegisterService-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "RegisterService-0.0.1-SNAPSHOT.jar"]