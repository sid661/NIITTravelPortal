package com.niit.userserviceusingjwt;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.cloud.netflix.eureka.EnableEurekaClient;



@SpringBootApplication
@EnableEurekaClient

public class UserserviceusingjwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserserviceusingjwtApplication.class, args);
	}




}
