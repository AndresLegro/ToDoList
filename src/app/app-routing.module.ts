import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './componentes/crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { ListarTareaComponent } from './componentes/listar-tarea/listar-tarea.component';

const routes: Routes = [

  {path: 'agregar-tarea' , component: CrearTareaComponent},
  {path: 'editar-tarea/:id' , component: EditarTareaComponent},
  {path: 'listar-tarea' , component: ListarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
