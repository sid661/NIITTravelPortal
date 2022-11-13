package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.exception.UserNotFoundException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.rabbitmq.UserDTO;

public interface UserService
{
    public User registerUser(User user) throws UserAlreadyExistsException;
    public User  updateUser(User user,String email) throws UserNotFoundException;
    boolean  getUser(String email);

    boolean getProvider(String email);

    User updateUserPassword(UserDTO userDTO);

}
