import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Pet {
  name: string;
  identificationCode: string;
  type: string;
  furColor: string;
  country: string;
}

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {
  pet: Pet[] = [];

  constructor(private http: HttpClient) {}

  // Loads pets from API
  ngOnInit() {
    this.http.get<Pet[]>('http://localhost:8080/pet').subscribe(pet => {
      this.pet = pet;
    });
  }

  // Add new pet to Array
  onPetAdded(newPet: Pet) {
    this.pet.push(newPet);
  }
}

