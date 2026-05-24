package com.luci.Helpdesk_Jang.service;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
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

    // --------------------------------------------------
    // PREVIOUS TESTS
    // --------------------------------------------------

    /*
    // Tests that a ticket can be created successfully
    @Test
    void testCreateTicketSuccessfully() {

        Ticket ticket = new Ticket();

        ticket.setTitle("Printer Issue");

        ticket.setDescription("Printer offline");

        ticket.setRequesterName("Luci");

        when(ticketRepository.save(any(Ticket.class)))
            .thenReturn(ticket);

        Ticket createdTicket =
            ticketService.createTicket(ticket);

        assertNotNull(createdTicket);

        assertEquals(
            "Open",
            createdTicket.getStatus()
        );
    }

    // Tests that newly created tickets default to Open status
    @Test
    void testDefaultStatusAssignment() {

        Ticket ticket = new Ticket();

        ticket.setTitle("WiFi Problem");

        ticket.setDescription("Internet not working");

        ticket.setRequesterName("Luci");

        when(ticketRepository.save(any(Ticket.class)))
            .thenReturn(ticket);

        Ticket createdTicket =
            ticketService.createTicket(ticket);

        assertEquals(
            "Open",
            createdTicket.getStatus()
        );
    }

    // Tests retrieval of all tickets
    @Test
    void testGetAllTickets() {

        Ticket ticket1 = new Ticket();

        Ticket ticket2 = new Ticket();

        when(ticketRepository.findAll())
            .thenReturn(Arrays.asList(ticket1, ticket2));

        List<Ticket> tickets =
            ticketService.getAllTickets();

        assertEquals(2, tickets.size());
    }

    // Tests retrieval of a ticket by ID
    @Test
    void testGetTicketById() {

        Ticket ticket = new Ticket();

        ticket.setTicketId("123");

        when(ticketRepository.findById("123"))
            .thenReturn(Optional.of(ticket));

        Ticket foundTicket =
            ticketService.getTicketById("123");

        assertNotNull(foundTicket);

        assertEquals(
            "123",
            foundTicket.getTicketId()
        );
    }

    // Tests creation behavior when title is missing
    @Test
    void testCreateTicketWithMissingTitle() {

        Ticket ticket = new Ticket();

        ticket.setDescription("Missing title");

        ticket.setRequesterName("Luci");

        assertNull(ticket.getTitle());
    }
    */

    // --------------------------------------------------
    // NEW VALIDATION TESTS FOR CURRENT ASSIGNMENT
    // --------------------------------------------------

    // Tests updating a ticket with a valid status
    @Test
    void testValidStatusUpdate() {

        Ticket existingTicket = new Ticket();

        existingTicket.setTicketId("1");

        existingTicket.setStatus("Open");

        existingTicket.setPriority("Low");

        when(ticketRepository.findById("1"))
            .thenReturn(Optional.of(existingTicket));

        when(ticketRepository.save(any(Ticket.class)))
            .thenReturn(existingTicket);

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Resolved");

        updatedTicket.setPriority("Low");

        Ticket result =
            ticketService.updateTicket(
                "1",
                updatedTicket
            );

        assertEquals(
            "Resolved",
            result.getStatus()
        );
    }

    // Tests assigning a valid priority to a ticket
    @Test
    void testValidPriorityAssignment() {

        Ticket existingTicket = new Ticket();

        existingTicket.setTicketId("1");

        existingTicket.setStatus("Open");

        existingTicket.setPriority("Low");

        when(ticketRepository.findById("1"))
            .thenReturn(Optional.of(existingTicket));

        when(ticketRepository.save(any(Ticket.class)))
            .thenReturn(existingTicket);

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Open");

        updatedTicket.setPriority("High");

        Ticket result =
            ticketService.updateTicket(
                "1",
                updatedTicket
            );

        assertEquals(
            "High",
            result.getPriority()
        );
    }

    // Tests updating an existing ticket priority
    @Test
    void testValidPriorityUpdate() {

        Ticket existingTicket = new Ticket();

        existingTicket.setTicketId("1");

        existingTicket.setStatus("Open");

        existingTicket.setPriority("Medium");

        when(ticketRepository.findById("1"))
            .thenReturn(Optional.of(existingTicket));

        when(ticketRepository.save(any(Ticket.class)))
            .thenReturn(existingTicket);

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Open");

        updatedTicket.setPriority("Critical");

        Ticket result =
            ticketService.updateTicket(
                "1",
                updatedTicket
            );

        assertEquals(
            "Critical",
            result.getPriority()
        );
    }

    // Tests rejection of invalid status values
    @Test
    void testInvalidStatusHandling() {

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Banana");

        updatedTicket.setPriority("Low");

        assertThrows(
            IllegalArgumentException.class,
            () -> ticketService.updateTicket(
                "1",
                updatedTicket
            )
        );
    }

    // Tests rejection of invalid priority values
    @Test
    void testInvalidPriorityHandling() {

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Open");

        updatedTicket.setPriority("UltraMega");

        assertThrows(
            IllegalArgumentException.class,
            () -> ticketService.updateTicket(
                "1",
                updatedTicket
            )
        );
    }

    // Tests updating a ticket that does not exist
    @Test
    void testUpdateNonExistentTicket() {

        when(ticketRepository.findById("999"))
            .thenReturn(Optional.empty());

        Ticket updatedTicket = new Ticket();

        updatedTicket.setStatus("Open");

        updatedTicket.setPriority("Low");

        assertThrows(
            RuntimeException.class,
            () -> ticketService.updateTicket(
                "999",
                updatedTicket
            )
        );
    }
}