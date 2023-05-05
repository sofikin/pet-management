package com.wisercat.petmanagement;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

@Configuration
@DependsOn("entityManagerFactory")
public class LiquibaseConfig {

}
