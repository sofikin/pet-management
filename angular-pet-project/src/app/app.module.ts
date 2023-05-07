import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetTableComponent } from './pet-table/pet-table.component';
import { PetFormComponent } from './pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetTableComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
