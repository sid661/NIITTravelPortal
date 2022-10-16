package com.niit.userserviceusingjwt.repository;

import com.niit.userserviceusingjwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {

    User findByEmailAndPassword(String email, String password);
}
