package com.assessment.disneySnackApp.data.model;


import jakarta.persistence.*;

import java.util.StringJoiner;

@Entity
@Table(name = "Snacks")
public class Snacks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int snacksId;
    String title;
    String imagePath;
    String description;
    double price;
    int locationId;


    public Snacks() {
    }

    public Snacks(int snacksId, String title, String imagePath, String description, double price, int locationId) {
        this.snacksId = snacksId;
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.price = price;
        this.locationId = locationId;
    }

    public int getSnacksId() {
        return snacksId;
    }

    public void setSnacksId(int snacksId) {
        this.snacksId = snacksId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Snacks.class.getSimpleName() + "[", "]")
                .add("snacksId=" + snacksId)
                .add("title='" + title + "'")
                .add("imagePath='" + imagePath + "'")
                .add("description='" + description + "'")
                .add("price=" + price)
                .add("locationId=" + locationId)
                .toString();
    }
}
