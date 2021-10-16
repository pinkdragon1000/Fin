package com.javabackend.fin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FinApplication {
	public static void main(String[] args) {
		SpringApplication.run(FinApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/users").allowedOrigins("http://localhost:4200");
				registry.addMapping("/accounts").allowedOrigins("http://localhost:4200");
				registry.addMapping("/addUser").allowedOrigins("http://localhost:4200");
				registry.addMapping("/addAccount").allowedOrigins("http://localhost:4200");
				registry.addMapping("/transactions").allowedOrigins("http://localhost:4200");
				registry.addMapping("/addTransaction").allowedOrigins("http://localhost:4200");
			}
		};
	}
}
