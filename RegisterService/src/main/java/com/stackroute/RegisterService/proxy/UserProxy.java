package com.stackroute.RegisterService.proxy;

import com.stackroute.RegisterService.rabbitmq.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "authentication-service")
public interface UserProxy {
    @PutMapping("/user/update")
    public ResponseEntity updateUser(@RequestBody UserDTO user);

}
