/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.parking.restlet;

import ch.ffhs.innt.eibacon.parking.model.Ticket;
import ch.ffhs.innt.eibacon.parking.service.ParkingService;
import javax.inject.Inject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Restlet {@link ParkingService}.
 *
 * @author Simon
 */
@RestController
@RequestMapping(value = "/parkingService", produces = "application/json")
public class ParkingServiceRestlet {

    @Inject
    private ParkingService parkingService;

    @RequestMapping("/startParking")
    public Ticket startParking(String beaconId, int accountId) {
        return parkingService.startParking(beaconId, 0);
    }

    @RequestMapping("/endParking")
    public Ticket endParking(String beaconId, int ticketId) {
        return parkingService.endParking(beaconId, 0);
    }

    @RequestMapping("/verifyTicketPayment")
    public boolean verifyTicketPayment(int ticketId) {
        return parkingService.verifyTicketPayment(ticketId);
    }

}