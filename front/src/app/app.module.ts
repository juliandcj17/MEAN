import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { FormsModule }from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
