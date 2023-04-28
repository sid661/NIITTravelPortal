package com.stackroute.informationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient
public class InformationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InformationServiceApplication.class, args);
	}

}
