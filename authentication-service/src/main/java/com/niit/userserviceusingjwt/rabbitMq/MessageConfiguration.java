package com.niit.userserviceusingjwt.rabbitMq;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguration {
    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

//
//    private String exchangeName = "userxchange";
//    private String queueName = "otpqueue";
//    // private String serviceProviderQueue="serviceProviderQueue";
//    @Bean(name="directExchangeUser")
//    public DirectExchange directExchange()
//    {
//        return new DirectExchange(exchangeName);
//    }
//
//    @Bean(name="queueUser")
//
//    public Queue registerQueue()
//    {
//        return new Queue(queueName);
//    }
//
//
//
//
//    @Bean(name="bindingUser")
//    public Binding userBinding(Queue queue, DirectExchange directExchange)
//    {
//        return BindingBuilder.bind(queue).to(directExchange).with("email_routing");
//    }
//
//
//    @Bean(name="rabbittemplateUser")
//    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory)
//    {
//        RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
//        rabbitTemplate.setMessageConverter(producerConverter());
//        return rabbitTemplate;
//    }
//    @Bean(name="producerConverterUser")
//    public Jackson2JsonMessageConverter producerConverter()
//    {
//        return new Jackson2JsonMessageConverter();
//    }
//

}


