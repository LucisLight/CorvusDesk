package com.luci.Helpdesk_Jang.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.luci.Helpdesk_Jang.model.TicketUpdate;
import com.luci.Helpdesk_Jang.repository.TicketUpdateRepository;

@Service
public class TicketUpdateService {

    private final TicketUpdateRepository ticketUpdateRepository;

    public TicketUpdateService(
            TicketUpdateRepository ticketUpdateRepository) {

        this.ticketUpdateRepository = ticketUpdateRepository;
    }

    public TicketUpdate createUpdate(
            TicketUpdate ticketUpdate) {

        ticketUpdate.setTicketUpdateId(
            UUID.randomUUID().toString()
        );

        ticketUpdate.setCreatedAt(
            new Date()
        );

        return ticketUpdateRepository.save(
            ticketUpdate
        );
    }

    public List<TicketUpdate> getUpdatesByTicketId(
            String ticketId) {

        return ticketUpdateRepository
            .findByTicketIdOrderByCreatedAtDesc(
                ticketId
            );
    }
}