/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.parking.service;

import ch.ffhs.innt.eibacon.parking.model.Ticket;
import java.util.ArrayList;
import java.util.Calendar;
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

    private static List<Ticket> TICKETS = new ArrayList<>();

    @Override
    public Ticket startParking(String beaconId, int accountId) {
        Ticket ticket = new Ticket();
        ticket.setId(TICKETS.size());
        ticket.setParkingName("Mock car park");
        ticket.setEntryBeaconId(beaconId);
        ticket.setParkingStartedAt(new Date());
        ticket.setAccountId(accountId);

        TICKETS.add(ticket);
        return ticket;
    }

    @Override
    public Ticket endParking(String beaconId, int ticketId) {
        List<Ticket> matchingTickets = TICKETS.stream().filter(ticket -> ticket.getId() == ticketId).collect(Collectors.toList());
        if (CollectionUtils.isNotEmpty(matchingTickets) && matchingTickets.size() == 1) {
            Ticket ticket = matchingTickets.get(0);
            ticket.setExitBeaconId(beaconId);
            ticket.setParkingEndedAt(new Date());
            ticket.setParkingFee(calculatePrice(ticket));
            return ticket;
        } else {
            throw new IllegalArgumentException("No valid ticket with id " + ticketId + " found!");
        }
    }

    @Override
    public boolean verifyTicketPayment(int ticketId) {
        return true;
    }

    private float calculatePrice(Ticket ticket) {
        Calendar start = Calendar.getInstance();
        start.setTime(ticket.getParkingStartedAt());
        Calendar end = Calendar.getInstance();
        end.setTime(ticket.getParkingStartedAt());

        if (ticket.getParkingStartedAt() == null || ticket.getParkingStartedAt() == null) {
            throw new IllegalArgumentException("Start (" + start + ") and end (" + end + ")of the parking period has to be defined!");
        }
        long parkingTimeInSeconds = (end.getTimeInMillis() - start.getTimeInMillis()) / 1000;

        if (parkingTimeInSeconds < 50) {
            return 0.5f;
        } else {
            return parkingTimeInSeconds * 0.01f;
        }
    }
}
