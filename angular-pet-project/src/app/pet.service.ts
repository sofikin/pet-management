import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pet} from "./pet-table/pet-table.component";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petsUrl: string;

  constructor(private http: HttpClient) {
    this.petsUrl = 'http://localhost:8080/pets';
  }

  public findAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  public save(pet: Pet) {
    return this.http.post<Pet>(this.petsUrl, pet);
  }
}

