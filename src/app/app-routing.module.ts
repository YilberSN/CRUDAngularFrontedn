import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Venta/editar/editar.component';
import { ListarComponent } from './Venta/listar/listar.component';
import { PreventaComponent } from './Venta/preventa/preventa.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'preventa', component:PreventaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
