package com.luci.Helpdesk_Jang.service;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.luci.Helpdesk_Jang.model.Ticket;
import com.luci.Helpdesk_Jang.repository.TicketRepository;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket createTicket(Ticket ticket) {

        ticket.setTicketId(UUID.randomUUID().toString());

        ticket.setStatus("Open");

        ticket.setCreatedAt(new Date());
        ticket.setUpdatedAt(new Date());

        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {

        System.out.println("SERVICE METHOD CALLED");

        return ticketRepository.findAll();
    }

    public Ticket getTicketById(String ticketId) {

        return ticketRepository.findById(ticketId)
            .orElse(null);
    }
}