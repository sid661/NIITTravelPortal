package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.model.User;

public interface UserService
{
    public User registerUser(User user) throws UserAlreadyExistsException;
}
