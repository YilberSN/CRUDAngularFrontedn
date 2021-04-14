import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../Modelo/Venta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/venta';

  getVenta(){
    return this.http.get<Venta[]>(this.url);
  }

  crearVenta(venta:Venta){
    return this.http.post<Venta>(this.url,venta);
  }

  getVentaId(idventa:number){
    return this.http.get<Venta>(this.url+"/"+idventa);
  }

  actualizarVenta(venta:Venta){
    return this.http.put<Venta>(this.url+"/"+venta.idventa, venta);
  }

  borrarVenta(venta:Venta){
    return this.http.delete<Venta>(this.url+"/"+venta.idventa);
  }

}
