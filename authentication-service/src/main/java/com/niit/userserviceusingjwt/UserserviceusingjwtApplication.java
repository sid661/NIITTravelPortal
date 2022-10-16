package com.niit.userserviceusingjwt;

import com.niit.userserviceusingjwt.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UserserviceusingjwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserserviceusingjwtApplication.class, args);
	}
	@Bean
	public FilterRegistrationBean jwtFilter()
	{
		FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/api/v2/*");
		return filterRegistrationBean;

	}

}
