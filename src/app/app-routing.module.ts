import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Venta/agregar/agregar.component';
import { EditarComponent } from './Venta/editar/editar.component';
import { ListarComponent } from './Venta/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
