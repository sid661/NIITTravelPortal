package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    User saveUser(User user);
    User findByEmailAndPassword(String email,String password) throws UserNotFoundException;

  List<User> getAllUsers();
}
