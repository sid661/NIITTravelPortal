package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.rabbitMq.UserDto;

import java.util.Map;

public interface SecurityTokenGenerator {

    Map<String,String> generateToken(UserDto userDto);
}
