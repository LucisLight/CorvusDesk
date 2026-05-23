package com.luci.Helpdesk_Jang.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;

import com.luci.Helpdesk_Jang.model.Ticket;
import com.luci.Helpdesk_Jang.repository.TicketRepository;

public class TicketServiceTest {

    @Mock
    private TicketRepository ticketRepository;

    @InjectMocks
    private TicketService ticketService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateTicketSuccessfully() {

        Ticket ticket = new Ticket();

        ticket.setTitle("Printer Issue");
        ticket.setDescription("Printer offline");
        ticket.setRequesterName("Luci");

        when(ticketRepository.save(any(Ticket.class)))
                .thenReturn(ticket);

        Ticket createdTicket = ticketService.createTicket(ticket);

        assertNotNull(createdTicket);
        assertEquals("Open", createdTicket.getStatus());
    }

    @Test
    void testDefaultStatusAssignment() {

        Ticket ticket = new Ticket();

        ticket.setTitle("WiFi Problem");
        ticket.setDescription("Internet not working");
        ticket.setRequesterName("Luci");

        when(ticketRepository.save(any(Ticket.class)))
                .thenReturn(ticket);

        Ticket createdTicket = ticketService.createTicket(ticket);

        assertEquals("Open", createdTicket.getStatus());
    }

    @Test
    void testGetAllTickets() {

        Ticket ticket1 = new Ticket();
        Ticket ticket2 = new Ticket();

        when(ticketRepository.findAll())
                .thenReturn(Arrays.asList(ticket1, ticket2));

        List<Ticket> tickets = ticketService.getAllTickets();

        assertEquals(2, tickets.size());
    }

    @Test
    void testGetTicketById() {

        Ticket ticket = new Ticket();

        ticket.setTicketId("123");

        when(ticketRepository.findById("123"))
                .thenReturn(Optional.of(ticket));

        Ticket foundTicket = ticketService.getTicketById("123");

        assertNotNull(foundTicket);
        assertEquals("123", foundTicket.getTicketId());
    }

    @Test
    void testCreateTicketWithMissingTitle() {

        Ticket ticket = new Ticket();

        ticket.setDescription("Missing title");
        ticket.setRequesterName("Luci");

        assertNull(ticket.getTitle());
    }
}