import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface NewPet {
  name: string;
  identificationCode: string;
  type: string;
  furColor: string;
  country: string;
}

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
  newPet: NewPet = {
    name: '',
    identificationCode: '',
    type: '',
    furColor: '',
    country: ''
  };
  @Output() petAdded = new EventEmitter<NewPet>();

  constructor(private http: HttpClient) {}

  // Add new pet to API
  onSubmit() {
    this.http.post<NewPet>('http://localhost:8080/pet', this.newPet).subscribe(newPet => {
      this.petAdded.emit(newPet);
      // Reset form
      this.newPet = {
        name: '',
        identificationCode: '',
        type: '',
        furColor: '',
        country: ''
      }
    });
  }
}
