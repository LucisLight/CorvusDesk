package com.luci.Helpdesk_Jang.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.luci.Helpdesk_Jang.model.Ticket;

public interface TicketRepository extends MongoRepository<Ticket, String> {

}
