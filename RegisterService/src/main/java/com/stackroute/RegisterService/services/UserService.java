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
    User getUser1(String email);

    boolean getProvider(String email);
    User getUserDetails(String email) throws UserNotFoundException;
    User updateUserPassword(UserDTO userDTO);

}
