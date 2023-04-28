package com.stackroute.apigateway.config;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;
@Component
public class RouteValidator {
    public static final List<String> openApiEndPoints=
            List.of("/register/registeruser",
                    "/user/login",
                    "eureka");

    Predicate<ServerHttpRequest> isSecured=
            serverHttpRequest -> openApiEndPoints.stream().
                    noneMatch(uri-> serverHttpRequest.getURI().getPath().contains(uri));
}
