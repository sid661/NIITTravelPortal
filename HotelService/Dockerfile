FROM openjdk:11
ADD ./target/api-gateway-0.0.1-SNAPSHOT.jar /usr/src/HotelService-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "HotelService-0.0.1-SNAPSHOT.jar"]