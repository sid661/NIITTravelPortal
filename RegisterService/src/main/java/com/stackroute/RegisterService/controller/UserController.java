package com.stackroute.RegisterService.controller;

import com.stackroute.RegisterService.config.Producer;
import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.exception.ServiceProviderNotFoundException;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.exception.UserNotFoundException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.proxy.UserProxy;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import com.stackroute.RegisterService.services.ServiceProviderServie;
import com.stackroute.RegisterService.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/register/")
public class UserController {

    private ResponseEntity responseEntity;
    private ServiceProviderServie serviceProviderServie;
    private UserService userService;
    @Autowired
    Producer producer;
    @Autowired
    UserProxy proxy;

    @Autowired
    public UserController(UserService userService, ServiceProviderServie serviceProviderServie) {
        this.userService = userService;
        this.serviceProviderServie = serviceProviderServie;
    }

    @PostMapping("registeruser")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            userService.registerUser(user);
            responseEntity = new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (UserAlreadyExistsException userAlreadyExistsException) {
            throw userAlreadyExistsException;
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PostMapping("registerserviceprovider")
    public ResponseEntity<?> saveServiceProvider(@RequestBody ServiceProvider serviceProvider) throws ServiceProviderAlreadyException {
        try {
            serviceProviderServie.registerServiceProvider(serviceProvider);
            responseEntity = new ResponseEntity<>(serviceProvider, HttpStatus.CREATED);
        } catch (ServiceProviderAlreadyException serviceProviderAlreadyException) {
            throw serviceProviderAlreadyException;
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getuserdetails/{email}")
    public ResponseEntity<?> getUser(@PathVariable String email) throws UserNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity(userService.getUserDetails(email),HttpStatus.OK);
        }
        catch (UserNotFoundException userNotFoundException) {
            responseEntity = new ResponseEntity<>(userNotFoundException, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getserviceproviderdetails/{email}")
    public ResponseEntity<?> getServieProvider(@PathVariable String email) throws ServiceProviderNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(serviceProviderServie.getServiceProviderDetails(email),HttpStatus.OK);
        }
        catch (ServiceProviderNotFoundException serviceProviderNotFoundException) {
            responseEntity = new ResponseEntity<>(serviceProviderNotFoundException, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;

    }
    @PutMapping("updateuser/{email}")
    public ResponseEntity<?> updateuser(@RequestBody User user, @PathVariable String email) throws UserNotFoundException {
        try {
            responseEntity = new ResponseEntity(userService.updateUser(user, email), HttpStatus.OK);
        } catch (UserNotFoundException userNotFoundException) {
            responseEntity = new ResponseEntity<>(userNotFoundException, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("updateserviceprovider/{email}")
    public ResponseEntity<?> updateServiceProvider(@RequestBody ServiceProvider serviceProvider, @PathVariable String email) throws ServiceProviderNotFoundException {
        try {
            responseEntity = new ResponseEntity(serviceProviderServie.updateserviceprovider(serviceProvider, email), HttpStatus.OK);
        } catch (ServiceProviderNotFoundException serviceProviderNotFoundException) {
            responseEntity = new ResponseEntity<>(serviceProviderNotFoundException, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> getPassword(@RequestBody UserDTO userDto) throws UserNotFoundException{
        try {
            System.out.println("called");
            System.out.println(userDto);
            if (userDto.getRole().toString().equals("USER")) {

                responseEntity = new ResponseEntity(userService.getUser(userDto.getEmail()), HttpStatus.OK);
                return responseEntity;
            } else if((userDto.getRole().toString().equals("SERVICEPROVIDER"))) {

                responseEntity = new ResponseEntity(userService.getProvider(userDto.getEmail()), HttpStatus.OK);

                return responseEntity;
            }
        }
        catch (Exception e)
        {
            return   responseEntity=new ResponseEntity("Error!!! Try after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("/updatepassword")
    public ResponseEntity<?> updatePassword(@RequestBody UserDTO userDto)
    {
        System.out.println(userDto);
        if (userDto.getRole().toString().equals("USER")) {
                proxy.updateUser(userDto);
            responseEntity = new ResponseEntity(userService.updateUserPassword(userDto), HttpStatus.OK);
            return responseEntity;
        } else if((userDto.getRole().toString().equals("SERVICEPROVIDER"))) {
            proxy.updateUser(userDto);
            responseEntity = new ResponseEntity(serviceProviderServie.updateProvider(userDto), HttpStatus.OK);

            return responseEntity;
        }
        return responseEntity;
    }
}
