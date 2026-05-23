package com.luci.Helpdesk_Jang;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ConfigCheck implements CommandLineRunner {

    @Value("${spring.data.mongodb.uri:NOT_FOUND}")
    private String mongoUri;

    @Override
    public void run(String... args) {
        System.out.println("MONGO URI LOADED = " + mongoUri);
    }
}
