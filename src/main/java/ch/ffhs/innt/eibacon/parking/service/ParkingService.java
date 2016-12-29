/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.parking.service;

import ch.ffhs.innt.eibacon.parking.model.Ticket;

/**
 * Service contract for parking.
 *
 * @author Simon
 */
public interface ParkingService {

    /**
     * When the car will enter the car park to open the barrier.
     *
     * @param beaconId iBeacon ID of the terminal for entering the car park.
     * @param accountId ID of the car owner's account.
     * @return Ticket
     */
    public Ticket startParking(String beaconId, int accountId);

    /**
     *
     * @param beaconId iBeacon ID of the terminal for leaving the car park.
     * @param ticketId
     * @return Ticket
     */
    public Ticket endParking(String beaconId, int ticketId);

    /**
     * Verify if the ticket was payed to open the barrier.
     *
     * @param ticketId
     * @return <code>true</code> if the payment was successful,
     * <code>false</code> otherwise.
     */
    public boolean verifyTicketPayment(int ticketId);
}
