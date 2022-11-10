package com.niit.userserviceusingjwt.service;


import com.niit.userserviceusingjwt.rabbitMq.UserDto;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class JwtSecurityTokenGenerator implements SecurityTokenGenerator{
    @Override
    public Map<String, String> generateToken(UserDto userDto) {

        String jwtToken=null;
        jwtToken= Jwts.builder().setSubject(userDto.getEmail()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"secretKey").compact();
        Map<String,String> map=new HashMap<>();
        map.put("token",jwtToken);
        map.put("message","user successfully logged in");
        map.put("role",userDto.getRole().toString());
        return map;
    }
}
