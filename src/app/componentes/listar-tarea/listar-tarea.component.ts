import { Component , OnInit} from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css']
})
export class ListarTareaComponent implements OnInit {

  tareas :any; 
  id : any;
  constructor(private crudService : ServiciosService){}


  ngOnInit(): void {
    this.crudService.obtenerTareas().subscribe( respuesta => {
      this.tareas = respuesta;
    });
  }


  borrarTarea(id: any, iControl : any)
  {
    console.log( id , iControl);
    this.crudService.borrarTarea(id).subscribe();
    this.tareas.splice(iControl , 1 );
  }


}

