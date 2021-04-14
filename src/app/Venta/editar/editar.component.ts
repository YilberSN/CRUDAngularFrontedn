import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Venta from 'src/app/Modelo/Venta';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  venta : Venta = new Venta();

  constructor(private router:Router, private servicio:ServicioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idventa=localStorage.getItem("idventa");
    this.servicio.getVentaId(+idventa)
    .subscribe(data=>{
      this.venta=data;
    })
  }

  Actualizar(venta:Venta){
    this.servicio.actualizarVenta(venta)
    .subscribe(data=>{
      this.venta=data;
      alert("Se guardo correctamente!");
      this.router.navigate(["listar"]);
    })
  }

}
