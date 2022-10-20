package com.niit.userserviceusingjwt.controller;

import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserAlreadyExistException;
import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.service.EmailService;
import com.niit.userserviceusingjwt.service.SecurityTokenGenerator;
import com.niit.userserviceusingjwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
@RestController
@CrossOrigin
public class UserController {

    private ResponseEntity responseEntity;
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;
    @Autowired
    private EmailService service;
    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }
    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotFoundException, ServiceProviderAlreadyExist {

        Map<String,String> map=null;
        try{

            User user1=userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
            ServiceProvider serviceProvider=userService.findByServiceEmailAndPassword(user.getEmail(), user.getPassword());
            if(user1.getEmail().equals(user.getEmail())){
                map=securityTokenGenerator.generateToken(user);
            } else if (serviceProvider.getEmail().equals(user.getEmail())) {
                map=securityTokenGenerator.generateToken(user);
            }
            responseEntity=new ResponseEntity<>(map, HttpStatus.OK);
        }catch (UserNotFoundException e)
        {
            throw e;
        }catch (ServiceProviderAlreadyExist e)
        {
            throw e;
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>("Try after Sometime!!",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
//    @PostMapping("/register")
//    public ResponseEntity saveUser(@RequestBody User user) throws UserAlreadyExistException {
//        User userCreated=userService.saveUser(user);
//       String status= service.sendSimpleEmail(user);
//        return responseEntity=new ResponseEntity<>(status,HttpStatus.CREATED);
//    }
    @GetMapping("/api/v1/userService/users")
    public ResponseEntity getAllUser(HttpServletRequest request)
    {
        List<User> list=userService.getAllUsers();
        responseEntity=new ResponseEntity<>(list,HttpStatus.FOUND);
        return responseEntity;
    }
}
