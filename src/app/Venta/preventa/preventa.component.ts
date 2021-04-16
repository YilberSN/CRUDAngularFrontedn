import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preventa } from 'src/app/Modelo/Preventa'; //Modela un objeto preventa de los datos de ingreso
import { ServicioService } from 'src/app/Servicio/servicio.service'; //Servicio para realizar las peticiones al backend
import { FormGroup, FormControl, Validators} from '@angular/forms'; //Libreria para validar el formulario
import Producto from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-preventa',
  templateUrl: './preventa.component.html',
  styleUrls: ['./preventa.component.css']
})
export class PreventaComponent implements OnInit {

  //Definimos las variables a utilizar en el componente
  preventa: Preventa = new Preventa();
  productos:Producto[]=[];

  //Creamos un formulario
  formularioentradadatos = new FormGroup({
    idproducto: new FormControl('', [Validators.required, Validators.pattern(/^\d+$(0|[1-9]\d*)?$/)]),
    cantidad: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$(0|[1-9]\d*)?$/)]),
    idpreventa: new FormControl('', [Validators.required, Validators.pattern(/^\d+$(0|[1-9]\d*)?$/)])
  });
  
  constructor(private router:Router, private servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.obtenerProductos()
    .subscribe(data=>{
      this.productos=data;
  })
}

  //Funcion para enviar los datos del formulario al api desarrollada en Spring Boot (Backend)
  Registrar(){
    this.servicio.preventa(this.preventa)
    .subscribe(data=>{
      alert(JSON.parse(JSON.stringify(data))['mensaje']);
      this.router.navigate(["listar"]);
    })
  }

//Funcion para mostrar los mensajes de errores en la entrada de los datos
mensajes() {
  let mensajes=["","",""]; //Mesajes ordenados en un vector para mostrarlos ordenadamente 
  let mensaje1 ="Campo de entrada no puede estar vacio", mensaje2="Entrada invalida"; //Mensajes personalizados para mostrar
  this.formularioentradadatos.get('idproducto')?.hasError('required') ? mensajes[0]=mensaje1 : mensajes[0]=mensaje2;
  this.formularioentradadatos.get('cantidad')?.hasError('required') ? mensajes[1]=mensaje1 : mensajes[1]=mensaje2;
  this.formularioentradadatos.get('idpreventa')?.hasError('required') ? mensajes[2]=mensaje1 : mensajes[2]=mensaje2;
  return mensajes;
}


}
