package com.luci.Helpdesk_Jang.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Document(collection = "owners")
public class Owner {

    @Id
    private String ownerId;

    @NotBlank(message = "Owner name is required")
    private String name;

    private String email;

    private String phone;

    private String password;

    private String userName;
}