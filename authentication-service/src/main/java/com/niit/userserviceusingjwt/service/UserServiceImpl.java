package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserAlreadyExistException;
import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.rabbitMq.Consumer;
import com.niit.userserviceusingjwt.rabbitMq.UserDto;
import com.niit.userserviceusingjwt.repository.ServiceProviderRepository;
import com.niit.userserviceusingjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    @Autowired
    private Consumer consumer;
    @Autowired
    private ServiceProviderRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistException {
            Optional<User> user1=userRepository.findById(user.getEmail());
            if(user1.isPresent())
            {
                throw new UserAlreadyExistException();
            }



        return userRepository.save(user);
    }

    @Override
    public User findByEmailAndPassword(String email, String password) throws UserNotFoundException {
        User user=userRepository.findByEmailAndPassword(email,password);
        if(user==null)
        {
            throw new UserNotFoundException();
        }

        return user;
    }

    @Override
    public User  getUser(String email) {
        return userRepository.findById(email).get();

    }

    @Override
    public ServiceProvider getProvider(String email) {
        return repository.findById(email).get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public ServiceProvider findByServiceEmailAndPassword(String email, String password) throws ServiceProviderAlreadyExist {
        ServiceProvider user=repository.findByEmailAndPassword(email,password);
        if(user==null)
        {
            throw new ServiceProviderAlreadyExist();
        }

        return user;
    }

    public ServiceProvider saveServiceProvider(ServiceProvider user) throws ServiceProviderAlreadyExist {
        Optional<ServiceProvider> user1=repository.findById(user.getEmail());
        if(user1.isPresent())
        {
            throw new ServiceProviderAlreadyExist();
        }



        return repository.save(user);
    }

}
