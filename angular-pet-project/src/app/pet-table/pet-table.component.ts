import { Component } from '@angular/core';

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
export class PetTableComponent {

}
