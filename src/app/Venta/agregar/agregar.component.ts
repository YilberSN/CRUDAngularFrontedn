import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/Modelo/Venta';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  venta:Venta = new Venta();

  constructor(private router:Router, private servicio:ServicioService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.servicio.crearVenta(this.venta)
    .subscribe(data=>{
      alert("Guardado con exito");
      this.router.navigate(["listar"]);
    })
  }

}
