package com.niit.userserviceusingjwt.config;

import com.niit.userserviceusingjwt.model.User;
import com.niit.userserviceusingjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;


public class CustomUserDetailService implements UserDetailsService {
    @Autowired
   private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> credentials = userRepository.findByEmail(username);
        return credentials.map(CustomUserDetail::new).orElseThrow
                (()->new UsernameNotFoundException("not found with vaild email"+username));


    }
}
