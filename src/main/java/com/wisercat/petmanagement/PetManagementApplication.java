package com.wisercat.petmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;

@SpringBootApplication(exclude = LiquibaseAutoConfiguration.class)
public class PetManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetManagementApplication.class, args);
	}

}
