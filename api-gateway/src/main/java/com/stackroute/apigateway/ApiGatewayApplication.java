package com.stackroute.apigateway;

import com.stackroute.apigateway.controller.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.servlet.Filter;


@SpringBootApplication
@EnableEurekaClient

public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}


	@Bean
	public FilterRegistrationBean jwtFilter()
	{
		System.out.println("hi");
		FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter( new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/hotel/*");
		return filterRegistrationBean;

	}

}
