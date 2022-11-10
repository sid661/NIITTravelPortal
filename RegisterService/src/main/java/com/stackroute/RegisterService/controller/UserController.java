package com.stackroute.RegisterService.controller;

import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.exception.ServiceProviderNotFoundException;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.exception.UserNotFoundException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.services.ServiceProviderServie;
import com.stackroute.RegisterService.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/registerservice/")
public class UserController {
    private ResponseEntity responseEntity;
    private ServiceProviderServie serviceProviderServie;
    private UserService userService;

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
}
