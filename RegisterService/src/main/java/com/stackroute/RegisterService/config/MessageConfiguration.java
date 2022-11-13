package com.stackroute.RegisterService.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


@Configuration
public class MessageConfiguration
{
    private String exchangeName = "userxchange";
    private String exchangeName1 = "userxchange1";
    private String otpExchange="otpexhange";

    private String queueName = "userqueue";
    private String emailqueue="email";
    private String otpqueue="otp";

    @Bean
    public DirectExchange directExchange()
    {
        return new DirectExchange(exchangeName);
    }

    @Bean
    public DirectExchange directExchange1()
    {
        return new DirectExchange(exchangeName1);
    }


    @Bean

    public Queue registerQueue()
    {
        return new Queue(queueName);
    }
    @Bean

    public Queue emailQ()
    {
        return new Queue(emailqueue);
    }






    @Bean
    public Binding userBinding(@Qualifier("registerQueue") Queue queue, DirectExchange directExchange)
    {
        return BindingBuilder.bind(queue).to(directExchange).with("user_routing");
    }
    @Bean
    public Binding userBinding1(@Qualifier("emailQ")Queue queue, DirectExchange directExchange)
    {
        return BindingBuilder.bind(queue).to(directExchange).with("email_routing");
    }




    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory)
    {
        RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(producerConverter());
        return rabbitTemplate;
    }

    @Bean
    public RabbitTemplate rabbitTemplate1(ConnectionFactory connectionFactory)
    {
        RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(producerConverter1());
        return rabbitTemplate;
    }

    @Bean
    public Jackson2JsonMessageConverter producerConverter()
    {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public Jackson2JsonMessageConverter producerConverter1()
    {
        return new Jackson2JsonMessageConverter();
    }




}
