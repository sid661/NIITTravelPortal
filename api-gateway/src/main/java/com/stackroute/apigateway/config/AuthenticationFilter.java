package com.stackroute.apigateway.config;

import org.apache.commons.httpclient.Header;
import org.apache.http.HttpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;


@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    @Autowired
    private JwtUtil util;
    @Autowired
    private RouteValidator validator;


    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())){
                if(!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    throw new RuntimeException("not authorised");
                }
                else{
                    String authHeader= exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                    if (authHeader != null && authHeader.startsWith("Bearer ")) {
                        authHeader = authHeader.substring(7);
                    }
                    try{
                        util.validateToken(authHeader);
                    }catch (Exception e){
                        throw new RuntimeException("invalid acess");
                    }
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {

    }
}
