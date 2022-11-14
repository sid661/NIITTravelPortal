package com.stackroute.RegisterService.repository;

import com.stackroute.RegisterService.model.ServiceProvider;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServiceProviderRepository extends MongoRepository<ServiceProvider,String> {
    ServiceProvider findByEmail(String email);
}
