package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.config.Producer;
import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.exception.ServiceProviderNotFoundException;
import com.stackroute.RegisterService.exception.UserAlreadyExistsException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.rabbitmq.ServiceProviderDTO;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import com.stackroute.RegisterService.rabbitmq.UserRole;
import com.stackroute.RegisterService.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceProviderServiceImpl implements ServiceProviderServie
{
    @Autowired
    private Producer producer;
private ServiceProviderRepository serviceProviderRepository;
@Autowired
    public ServiceProviderServiceImpl(ServiceProviderRepository serviceProviderRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
    }

    @Override
    public ServiceProvider registerServiceProvider(ServiceProvider serviceProvider) throws ServiceProviderAlreadyException
    {
        if(serviceProviderRepository.findById(serviceProvider.getEmail()).isPresent())
        {
            throw new ServiceProviderAlreadyException();
        }
        else
        {
            serviceProviderRepository.save(serviceProvider);
            System.out.println("Data going to Save into Rabbit Server");
//            ServiceProviderDTO serviceProviderDTO=new ServiceProviderDTO();
//            serviceProviderDTO.setEmail(serviceProvider.getEmail());
//            serviceProviderDTO.setPassword(serviceProvider.getPassword());
//           producer.sendMessageToRabbitMqServerServiceProvider(serviceProviderDTO);

            UserDTO userDTO=new UserDTO();
            userDTO.setEmail(serviceProvider.getEmail());
            userDTO.setPassword(serviceProvider.getPassword());
            userDTO.setRole(UserRole.SERVICEPROVIDER);
            producer.sendMessageToRabbitMqServer(userDTO);
        }
        return serviceProvider;
    }

    @Override
    public ServiceProvider updateserviceprovider(ServiceProvider serviceProvider, String email) throws ServiceProviderNotFoundException
    {
        if(serviceProviderRepository.findById(email).isEmpty())
        {
            throw new ServiceProviderNotFoundException();
        }
        else
        {
            serviceProviderRepository.save(serviceProvider);
            UserDTO userDTO=new UserDTO();
            userDTO.setEmail(serviceProvider.getEmail());
            userDTO.setPassword(serviceProvider.getPassword());
            userDTO.setRole(UserRole.SERVICEPROVIDER);
            producer.sendMessageToRabbitMqServer(userDTO);

        }
        return serviceProvider;
    }
}
