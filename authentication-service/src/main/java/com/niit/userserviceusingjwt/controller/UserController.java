package com.niit.userserviceusingjwt.controller;

import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.rabbitMq.Producer;
import com.niit.userserviceusingjwt.rabbitMq.UserDto;
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
@RequestMapping("/user")
public class UserController {

    private ResponseEntity responseEntity;
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

//    @Autowired
//    Producer producer;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }
    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody UserDto userDto) throws UserNotFoundException, ServiceProviderAlreadyExist {
        try{
            System.out.println("called");
        Map<String,String> map=null;
        if(userDto.getRole().toString().equals("USER")) {
            User user1=userService.findByEmailAndPassword(userDto.getEmail(), userDto.getPassword());
            if(user1.getEmail().equals(userDto.getEmail())){
                map=securityTokenGenerator.generateToken(userDto);
            }

        }else if(userDto.getRole().toString().equals("SERVICEPROVIDER")) {
            ServiceProvider serviceProvider=userService.findByServiceEmailAndPassword(userDto.getEmail(), userDto.getPassword());
            if (serviceProvider.getEmail().equals(serviceProvider.getEmail())) {
                map=securityTokenGenerator.generateToken(userDto);
            }
        }

            responseEntity=new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e)
        {
            responseEntity=new ResponseEntity<>("Try after Sometime!!",HttpStatus.NOT_FOUND);
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

    @PostMapping("/forgot-password")
    public ResponseEntity<?> getPassword(@RequestBody UserDto userDto) throws UserNotFoundException{
        try {
            System.out.println("called");
            if (userDto.getRole().toString().equals("USER")) {
//                producer.sendMessageToRabbitMqServer(userDto.getEmail());
                responseEntity = new ResponseEntity(userService.getUser(userDto.getEmail()), HttpStatus.OK);
                return responseEntity;
            } else if((userDto.getRole().toString().equals("SERVICEPROVIDER"))) {

                responseEntity = new ResponseEntity(userService.getProvider(userDto.getEmail()), HttpStatus.OK);
//                producer.sendMessageToRabbitMqServer(userDto.getEmail());
                return responseEntity;
            }
        }
        catch (Exception e)
        {
          return   responseEntity=new ResponseEntity("Error!!! Try after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    return responseEntity;
    }
    @PutMapping("/update")
    public ResponseEntity updateUser(@RequestBody UserDto userDto) {
        if (userDto.getRole().toString().equals("USER")) {
//                producer.sendMessageToRabbitMqServer(userDto.getEmail());
            responseEntity = new ResponseEntity(userService.updateUser(userDto), HttpStatus.OK);
            return responseEntity;
        } else if ((userDto.getRole().toString().equals("SERVICEPROVIDER"))) {

            responseEntity = new ResponseEntity(userService.updateProvider(userDto), HttpStatus.OK);
//                producer.sendMessageToRabbitMqServer(userDto.getEmail());
            return responseEntity;

        }
        return responseEntity;
    }
}
