package com.niit.userserviceusingjwt.rabbitMq;

import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserAlreadyExistException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.service.EmailService;
import com.niit.userserviceusingjwt.service.UserService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    EmailService service;

    @Autowired
    private UserService userService;

    @RabbitListener(queues = "userqueue")
    public void getDtoAndAddToDbOfGuestUser(UserDto userDto) throws UserAlreadyExistException, ServiceProviderAlreadyExist {
        if(userDto.getRole().toString().equals("USER")) {
            User user=new User(userDto.getEmail(), userDto.getPassword());
            //String status= service.sendSimpleEmail(user);
            userService.saveUser(user);
        }else if(userDto.getRole().toString().equals("SERVICEPROVIDER")) {
            ServiceProvider serviceProvider=new ServiceProvider(userDto.getEmail(), userDto.getPassword());
        // String status= service.sendSimpleEmail(user);
            userService.saveServiceProvider(serviceProvider);
        }


    }



}
