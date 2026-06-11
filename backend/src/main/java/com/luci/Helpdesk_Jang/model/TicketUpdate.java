package com.luci.Helpdesk_Jang.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "ticket_updates")
public class TicketUpdate {

    @Id
    private String ticketUpdateId;

    private String ticketId;

    private String updateType;

    private String message;

    private String createdByOwnerId;

    private String createdByOwnerName;

    private Date createdAt;
}