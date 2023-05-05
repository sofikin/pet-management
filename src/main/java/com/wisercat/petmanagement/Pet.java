package com.wisercat.petmanagement;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Pet {
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String identificationCode;
    private String type;
    private String furColor;
    private String country;

    public Pet(String name, String identificationCode, String type, String furColor, String country) {
        this.name = name;
        this.identificationCode = identificationCode;
        this.type = type;
        this.furColor = furColor;
        this.country = country;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


}
