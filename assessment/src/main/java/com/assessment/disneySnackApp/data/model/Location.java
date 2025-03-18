package com.assessment.disneySnackApp.data.model;


import jakarta.persistence.*;

import java.util.StringJoiner;

@Entity
@Table(name = "Location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int locationId;
    String parkLocation;

    public Location() {
    }

    public Location(int locationId, String parkLocation) {
        this.locationId = locationId;
        this.parkLocation = parkLocation;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public String getParkLocation() {
        return parkLocation;
    }

    public void setParkLocation(String parkLocation) {
        this.parkLocation = parkLocation;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Location.class.getSimpleName() + "[", "]")
                .add("locationId=" + locationId)
                .add("parkLocation='" + parkLocation + "'")
                .toString();
    }
}

