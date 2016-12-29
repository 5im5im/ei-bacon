/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.parking.service;

import ch.ffhs.innt.eibacon.parking.model.Ticket;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

/**
 * Parking service.
 *
 * @author Simon
 */
@Service
public class ParkingServiceMock implements ParkingService {

    private List<Ticket> tickets = new ArrayList<>();

    @Override
    public Ticket startParking(String beaconId, int accountId) {
        Ticket ticket = new Ticket();
        ticket.setId(tickets.size());
        ticket.setParkingName("Mock car park");
        ticket.setEntryBeaconId(beaconId);
        ticket.setParkingStartedAt(new Date());
        ticket.setAccountId(accountId);

        tickets.add(ticket);
        return ticket;
    }

    @Override
    public Ticket endParking(String beaconId, int ticketId) {
        List<Ticket> matchingTickets = tickets.stream().filter(ticket -> ticket.getId() == ticketId).collect(Collectors.toList());
        if (CollectionUtils.isNotEmpty(matchingTickets) && matchingTickets.size() == 1) {
            Ticket ticket = matchingTickets.get(0);
            ticket.setExitBeaconId(beaconId);
            ticket.setParkingEndedAt(new Date());
            return ticket;
        } else {
            throw new IllegalArgumentException("No valid ticket with id " + ticketId + " found!");
        }
    }

    @Override
    public boolean verifyTicketPayment(int ticketId) {
        return true;
    }
}
