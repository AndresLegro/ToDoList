import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoList } from './ToDoList';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService 
{
  API:string =  "http://localhost/ToDoList/tarea.php";
  constructor(private clienteHttp : HttpClient) {}

  agregarTarea(datosTarea : ToDoList) : Observable <any>
  {
      return this.clienteHttp.post(this.API + "?insertar=1" , datosTarea);
  }

  obtenerTareas()
    {
      return this.clienteHttp.get(this.API);
    }

  borrarTarea (id : any) : Observable <any>
  {
      return this.clienteHttp.get(this.API + "?borrar=" + id);
  }
 
  obtenerTarea (id : any) : Observable <any>
  {
      return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  editarTarea(id: any, datosTarea: ToDoList) : Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosTarea);
  }
}
