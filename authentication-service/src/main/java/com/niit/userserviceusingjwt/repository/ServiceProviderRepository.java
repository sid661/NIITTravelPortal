package com.niit.userserviceusingjwt.repository;

import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider,String > {

    ServiceProvider findByEmailAndPassword(String email, String password);
    ServiceProvider findByEmail(String email);
}
