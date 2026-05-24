package com.luci.Helpdesk_Jang.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luci.Helpdesk_Jang.model.Ticket;
import com.luci.Helpdesk_Jang.service.TicketService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "*")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping("/create")
    public Ticket createTicket(@Valid @RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }


    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/{ticketId}")
    public Ticket getTicketById(@PathVariable String ticketId) {
        return ticketService.getTicketById(ticketId);
    }

    @DeleteMapping("/{ticketId}")
    public void deleteTicket(@PathVariable String ticketId) {
        ticketService.deleteTicket(ticketId);
    }
}
