package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {

    Map<String,String> generateToken(User user);
}
