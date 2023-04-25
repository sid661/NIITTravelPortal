package com.niit.userserviceusingjwt.repository;

import com.niit.userserviceusingjwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    User findByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String username);
}
