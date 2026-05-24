package com.luci.Helpdesk_Jang.service;

import java.util.Arrays;
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

    public Ticket updateTicket(String ticketId, Ticket updatedTicket) {

        List<String> validStatuses = Arrays.asList(
            "Open",
            "In Progress",
            "Resolved",
            "Closed"
        );

        List<String> validPriorities = Arrays.asList(
            "Low",
            "Medium",
            "High",
            "Critical"
        );

        if (!validStatuses.contains(updatedTicket.getStatus())) {

            throw new IllegalArgumentException(
                "Invalid status value"
            );
        }

        if (!validPriorities.contains(updatedTicket.getPriority())) {

            throw new IllegalArgumentException(
                "Invalid priority value"
            );
        }

        return ticketRepository.findById(ticketId)
            .map(existingTicket -> {

                existingTicket.setTitle(
                    updatedTicket.getTitle()
                );

                existingTicket.setDescription(
                    updatedTicket.getDescription()
                );

                existingTicket.setStatus(
                    updatedTicket.getStatus()
                );

                existingTicket.setPriority(
                    updatedTicket.getPriority()
                );

                existingTicket.setOwnerId(
                    updatedTicket.getOwnerId()
                );

                existingTicket.setOwnerName(
                    updatedTicket.getOwnerName()
                );

                existingTicket.setOwnerEmail(
                    updatedTicket.getOwnerEmail()
                );

                existingTicket.setOwnerPhone(
                    updatedTicket.getOwnerPhone()
                );

                existingTicket.setUpdatedAt(new Date());

                return ticketRepository.save(existingTicket);

            })
            .orElseThrow(() ->
                new RuntimeException("Ticket not found"));
    }

    public void deleteTicket(String ticketId) {

        ticketRepository.deleteById(ticketId);
    }
}