import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AzarComponent } from './azar/azar.component';
import { OpcionesComponent } from './opciones/opciones.component';
import {FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AzarComponent,
    OpcionesComponent,
    FormularioComponent,
    Formulario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
