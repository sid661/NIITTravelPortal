package com.stackroute.apigateway.controller;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.GenericFilterBean;



import java.io.IOException;

public class JwtFilter  {

   /* @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        final HttpServletRequest request=(HttpServletRequest) servletRequest;
        final HttpServletResponse response=(HttpServletResponse) servletResponse;
        final String authHeader=request.getHeader("Authorization");
        if("OPTION".equals(request.getMethod()))
        {
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request,response);
        } else if (authHeader==null || !authHeader.startsWith("Bearer ")) {

            throw new ServletException();
        }
        final   String token=authHeader.substring(7);
        final Claims claims= Jwts.parser().setSigningKey("secretKey").parseClaimsJws(token).getBody();
        request.setAttribute("claims",claims);
        filterChain.doFilter(request,response);
    }*/
}
