package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.config.Producer;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.exception.UserNotFoundException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import com.stackroute.RegisterService.rabbitmq.UserRole;
import com.stackroute.RegisterService.repository.ServiceProviderRepository;
import com.stackroute.RegisterService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    private Producer producer;
    private UserRepository userRepository;
    private ServiceProviderRepository repository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository, ServiceProviderRepository repository) {
        this.userRepository = userRepository;
        this.repository = repository;
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
    @Override
    public boolean  getUser(String email) {
        Optional<User> user=userRepository.findById(email);
        if(user.isEmpty())
        {
            return false;
        }
        return true;

    }
    @Override
    public User getUserDetails(String email) throws UserNotFoundException
    {
        if(userRepository.findById(email).isEmpty())
        {
            throw new UserNotFoundException();
        }
        else
        {
            return userRepository.findByEmail(email);
        }

    }
    @Override
    public User getUser1(String email) {
        return userRepository.findById(email).get();
    }

    @Override
    public boolean getProvider(String email) {

        Optional<ServiceProvider> user=repository.findById(email);
        if(user.isEmpty())
        {
            return false;
        }
        return true;
    }

    @Override
    public User updateUserPassword(UserDTO userDTO) {
        Optional<User> user=userRepository.findById(userDTO.getEmail());
        User user1=new User();
        user1.setEmail(userDTO.getEmail());
        user1.setName(user.get().getName());
        user1.setPhoneNo(user.get().getPhoneNo());
        user1.setPremiumMember(user.get().isPremiumMember());
                user1.setPassword(userDTO.getPassword());

        userRepository.save(user1);
        return user1;
    }
}
