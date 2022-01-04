package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages= {"com.ibs.demo"})
public class PageBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PageBackendApplication.class, args);
	}

}
