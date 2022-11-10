package com.stackroute.apigateway.controller;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration

public class config {
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder)
    {
        return builder.routes()
                .route(p->p.path("/user/**").uri("lb://user-service"))
                .route(p->p.path("/register/**").uri("lb://register-service"))
                .route(p->p.path("/cab/**").uri("lb://cab-service"))
                .route(p->p.path("/hotel/**").uri("lb://hotel-service"))
                .route(p->p.path("/package/**").uri("lb://package-service"))
                .route(p->p.path("/information/**").uri("lb://information-service")).

                build();
    }
}