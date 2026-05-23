package com.luci.Helpdesk_Jang.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tickets")
public class Ticket {

    @Id
    private String ticketId;

    private String title;
    private String description;
    private String category;
    private String status;
    private String priority;

    private String requesterName;
    private String requesterEmail;

    private Date createdAt;
    private Date updatedAt;
}