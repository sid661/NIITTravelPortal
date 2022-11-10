package com.stackroute.RegisterService.controller;

import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.services.ServiceProviderServie;
import com.stackroute.RegisterService.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/register/")
public class UserController
{
    private ResponseEntity responseEntity;
    private ServiceProviderServie serviceProviderServie;
    private UserService userService;
   @Autowired
    public UserController(UserService userService, ServiceProviderServie serviceProviderServie) {
        this.userService = userService;
        this.serviceProviderServie=serviceProviderServie;
    }

    @PostMapping("registeruser")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyExistsException
    {
        try
        {
            userService.registerUser(user);
            responseEntity=new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        catch (UserAlreadyExistsException userAlreadyExistsException)
        {
            throw userAlreadyExistsException;
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @PostMapping("registerserviceprovider")
    public ResponseEntity<?> saveServiceProvider(@RequestBody ServiceProvider serviceProvider) throws ServiceProviderAlreadyException
    {
        try
        {
           serviceProviderServie.registerServiceProvider(serviceProvider);
            responseEntity=new ResponseEntity<>(serviceProvider, HttpStatus.CREATED);
        }
        catch (ServiceProviderAlreadyException serviceProviderAlreadyException)
        {
            throw serviceProviderAlreadyException;
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

}
