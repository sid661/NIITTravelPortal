package com.niit.userserviceusingjwt.controller;

import com.niit.userserviceusingjwt.changed_Service.AuthrizationService;
import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.rabbitMq.Producer;
import com.niit.userserviceusingjwt.rabbitMq.UserDto;
import com.niit.userserviceusingjwt.service.SecurityTokenGenerator;
import com.niit.userserviceusingjwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private ResponseEntity responseEntity;
    private UserService userService;

    private AuthenticationManager authenticationManager;
    private SecurityTokenGenerator securityTokenGenerator;

    private AuthrizationService authrizationService;
    @Autowired
    public UserController( UserService userService, AuthenticationManager authenticationManager, SecurityTokenGenerator securityTokenGenerator, AuthrizationService authrizationService) {

        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.securityTokenGenerator = securityTokenGenerator;
        this.authrizationService = authrizationService;
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserDto userDto) {

        Authentication authentication = authenticationManager.
                authenticate(new UsernamePasswordAuthenticationToken
                        (userDto.getEmail(), userDto.getPassword()));
        if (authentication.isAuthenticated()) {
           return authrizationService.generateToken(userDto.getEmail());
        }else{
            throw new RuntimeException("invalid acess");
        }


    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        /*   service.validateToken(token);*/
        return "Token is valid";
    }

    /*@GetMapping("/api/v1/userService/users")
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
    }*/
}
