package com.stackroute.RegisterService.config;

import com.stackroute.RegisterService.model.User;
import com.stackroute.RegisterService.rabbitmq.ServiceProviderDTO;
import com.stackroute.RegisterService.rabbitmq.UserDTO;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer
{
    private RabbitTemplate rabbitTemplate;
    private DirectExchange directExchange;
    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange directExchange) {
        this.rabbitTemplate = rabbitTemplate;
        this.directExchange = directExchange;
    }

    public void sendMessageToRabbitMqServer(UserDTO userDTO)
    {
        System.out.println(userDTO);
        rabbitTemplate.convertAndSend(directExchange.getName(),"user_routing",userDTO);
    }
//    public void sendMessageToRabbitMqServerServiceProvider(ServiceProviderDTO serviceProviderDTO)
//    {
//        rabbitTemplate.convertAndSend(directExchange.getName(),"serviceprovider_routing",serviceProviderDTO);
//    }

    public void sendMessageToRabbitMqServer1(UserDTO userDTO)
    {
        System.out.println(userDTO);
        rabbitTemplate.convertAndSend(directExchange.getName(),"email_routing",userDTO);
    }





}
