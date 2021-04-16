import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaCloudForAllF';
  angForm: FormGroup;

  constructor(private router:Router){

  }
  //Componente de listar las ventas
  Listar(){
    this.router.navigate(["listar"]);
  }

  //Componente para agregar una venta nueva
  Preventa(){
    this.router.navigate(["preventa"]);
  }

}
