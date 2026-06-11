package com.luci.Helpdesk_Jang.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.luci.Helpdesk_Jang.model.TicketUpdate;

public interface TicketUpdateRepository
        extends MongoRepository<TicketUpdate, String> {

    List<TicketUpdate> findByTicketIdOrderByCreatedAtDesc(
        String ticketId
    );
}
