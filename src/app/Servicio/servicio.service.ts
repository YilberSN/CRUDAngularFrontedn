import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../Modelo/Venta';
import Preventa from '../Modelo/Preventa';
import {Producto} from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  url='https://yilber-prueba-cfa.herokuapp.com/venta';
  url_preventa='https://yilber-prueba-cfa.herokuapp.com/venta/preventa';
  url_productos='https://yilber-prueba-cfa.herokuapp.com/venta/productos';
  //url='http://localhost:8081/venta';
  //url_preventa='http://localhost:8081/preventa';

  //Servicio/Peticion para gestionar una venta nueva (preventa) y validarla desde el API desarollada en Spring Boot (Backend)
  preventa(preventa:Preventa){
    return this.http.post(this.url_preventa, preventa);
  }

  //Servicio/Peticion para obtener las ventas desde el API desarollada en Spring Boot (Backend)
  obtenerProductos(){
    return this.http.get<Producto[]>(this.url_productos);
  }

  //Servicio/Peticion para obtener las ventas desde el API desarollada en Spring Boot (Backend)
  getVenta(){
    return this.http.get<Venta[]>(this.url);
  }

  //Servicio/Peticion para obtener una venta desde el API desarollada en Spring Boot (Backend)
  getVentaId(idventa:number){
    return this.http.get<Venta>(this.url+"/"+idventa);
  }

  //Servicio/Peticion para actualizar dato de una venta desde el API desarollada en Spring Boot (Backend)
  actualizarVenta(venta:Venta){
    return this.http.put<Venta>(this.url+"/"+venta.idventa, venta);
  }

  //Servicio/Peticion para borrar una venta desde el API desarollada en Spring Boot (Backend)
  borrarVenta(venta:Venta){
    return this.http.delete<Venta>(this.url+"/"+venta.idventa);
  }

}
