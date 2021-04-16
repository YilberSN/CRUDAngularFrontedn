import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Venta/listar/listar.component';
import { EditarComponent } from './Venta/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../app/Servicio/servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { PreventaComponent } from './Venta/preventa/preventa.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    PreventaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
