package com.luci.Helpdesk_Jang.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Document(collection = "tickets")
public class Ticket {

    @Id
    private String ticketId;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    private String category;
    private String status;
    private String priority;

    @NotBlank(message = "Requester name is required")
    private String requesterName;
    private String requesterEmail;
    private String requesterPhone;

    private Date createdAt;
    private Date updatedAt;

    private String ownerId;
    private String ownerName;
    private String ownerEmail;
    private String ownerPhone;
}