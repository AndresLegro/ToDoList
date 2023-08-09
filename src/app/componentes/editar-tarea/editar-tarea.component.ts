import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit
{
  id : any;
  formularioDeTareas:FormGroup;

  constructor(private activateRoute: ActivatedRoute, public formulario: FormBuilder, public crudService: ServiciosService, public routeador: Router) {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeTareas = this.formulario.group({
      id: [this.id],
      titulo: [''],
      descripcion: [''],
      usuario: [''],
      estimacion: [''],
      prioridad: [''],
      criterioAceptacion: [''],
      estado:['']
    });


    this.crudService.obtenerTarea(this.id).subscribe
      (respuesta => {
        console.log(respuesta);

        this.formularioDeTareas.setValue({
          id: [this.id],
          titulo: respuesta[0]['titulo'],
          descripcion: respuesta[0]['descripcion'],
          usuario: respuesta[0]['usuario'],
          estimacion: respuesta[0]['estimacion'],
          prioridad: respuesta[0]['prioridad'],
          criterioAceptacion: respuesta[0]['criterioAceptacion'],
          estado: respuesta[0]['estado']
        });
      }

      );
  }

  ngOnInit(): void 
  {

  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeTareas.value);

    this.crudService.editarTarea( this.id , this.formularioDeTareas.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-tarea');
    });
     
    
  }

}
