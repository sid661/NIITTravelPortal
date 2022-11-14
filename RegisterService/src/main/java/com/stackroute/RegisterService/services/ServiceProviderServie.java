package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.exception.ServiceProviderNotFoundException;
import com.stackroute.RegisterService.model.ServiceProvider;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import org.apache.catalina.UserDatabase;

public interface ServiceProviderServie
{
public ServiceProvider registerServiceProvider(ServiceProvider serviceProvider) throws ServiceProviderAlreadyException;
public ServiceProvider updateserviceprovider(ServiceProvider serviceProvider,String email) throws ServiceProviderNotFoundException;

ServiceProvider updateProvider(UserDTO userDTO);

ServiceProvider getProvider(String email);

    ServiceProvider getServiceProviderDetails(String email) throws ServiceProviderNotFoundException;
}
