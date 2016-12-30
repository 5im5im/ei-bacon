/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.parking.model;

import java.util.Date;
import lombok.Data;

/**
 * Ticket Bean
 *
 * @author Simon
 */
@Data
public class Ticket {

    /**
     * Ticket ID.
     */
    private int id;

    /**
     * Ticket owner's account ID.
     */
    private int accountId;

    /**
     * Name of the parking place (e.g. a car park).
     */
    private String parkingName;

    private Date parkingStartedAt;

    /**
     * Beacon Token ID from the entry barrier.
     */
    private String entryBeaconId;

    private Date parkingEndedAt;

    /**
     * Beacon Token ID from the exit barrier.
     */
    private String exitBeaconId;

    private float parkingFee;

    /**
     * After the ticket is paid, the ticket is completed.
     */
    private boolean isCompleted = false;
}
