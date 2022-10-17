package com.stackroute.RegisterService.services;

import com.stackroute.RegisterService.exception.ServiceProviderAlreadyException;
import com.stackroute.RegisterService.model.ServiceProvider;

public interface ServiceProviderServie
{
public ServiceProvider registerServiceProvider(ServiceProvider serviceProvider) throws ServiceProviderAlreadyException;
}
