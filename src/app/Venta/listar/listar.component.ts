import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/Modelo/Venta';
import {ServicioService} from '../../Servicio/servicio.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  ventas:Venta[]=[];
  constructor(private servicio:ServicioService, private router:Router) { }

  ngOnInit(): void {
      this.servicio.getVenta()
      .subscribe(data=>{
        this.ventas=data;
    })
  }

  Editar(venta:Venta):void{
    localStorage.setItem("idventa", venta.idventa.toString());
    this.router.navigate(["editar"]);
  }

  Borrar(venta:Venta){
    this.servicio.borrarVenta(venta)
    .subscribe(data=>{
      this.ventas=this.ventas.filter(v=>v!==venta);
      alert("Venta eliminada!");
    })
  }

}
