package com.wisercat.petmanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PetController {
    @Autowired
    private PetRepository petRepository;

    @GetMapping("/pets")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Pet>> getAllPets() {
        List<Pet> pets = petRepository.findAll();
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @PostMapping("/pets")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Pet> addPet(@RequestBody Pet newPet) {
        Pet pet = petRepository.save(newPet);
        return new ResponseEntity<>(pet, HttpStatus.CREATED);
    }
}
