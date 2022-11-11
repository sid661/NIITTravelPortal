package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.config.Producer;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.exception.UserNotFoundException;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import com.stackroute.RegisterService.rabbitmq.UserRole;
import com.stackroute.RegisterService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    private Producer producer;
    private UserRepository userRepository;
@Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException
    {

        if(userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        else
        {
            userRepository.save(user);
             System.out.println("Data going to Save into Rabbit Server");
            UserDTO userDTO=new UserDTO();
            userDTO.setEmail(user.getEmail());
            userDTO.setPassword(user.getPassword());
            userDTO.setRole(UserRole.USER);
            producer.sendMessageToRabbitMqServer(userDTO);
        }
        return user;
    }

    @Override
    public User updateUser(User user, String email) throws UserNotFoundException
    {
        if(userRepository.findById(email).isEmpty())
        {
            throw new UserNotFoundException();
        }
        else
        {
            userRepository.save(user);
            UserDTO userDTO=new UserDTO();
            userDTO.setEmail(user.getEmail());
            userDTO.setPassword(user.getPassword());
            userDTO.setRole(UserRole.USER);
            producer.sendMessageToRabbitMqServer(userDTO);
        }
        return user;
    }
}
