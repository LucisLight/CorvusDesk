package com.luci.Helpdesk_Jang.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luci.Helpdesk_Jang.model.TicketUpdate;
import com.luci.Helpdesk_Jang.service.TicketUpdateService;

@RestController
@RequestMapping("/ticket-updates")
@CrossOrigin(origins = "*")
public class TicketUpdateController {

    private final TicketUpdateService ticketUpdateService;

    public TicketUpdateController(
            TicketUpdateService ticketUpdateService) {

        this.ticketUpdateService = ticketUpdateService;
    }

    @PostMapping("/create")
    public TicketUpdate createUpdate(
            @RequestBody TicketUpdate ticketUpdate) {

        return ticketUpdateService.createUpdate(
            ticketUpdate
        );
    }

    @GetMapping("/ticket/{ticketId}")
    public List<TicketUpdate> getUpdatesByTicketId(
            @PathVariable String ticketId) {

        return ticketUpdateService.getUpdatesByTicketId(
            ticketId
        );
    }
}