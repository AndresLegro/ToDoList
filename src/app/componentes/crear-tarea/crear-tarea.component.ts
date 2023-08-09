import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {

  formularioDeTareas:FormGroup;
  
  constructor(public formulario: FormBuilder, public crudService : ServiciosService, public routeador : Router)
  {
    this.formularioDeTareas = this.formulario.group({
      titulo: [''],
      descripcion: [''],
      usuario: [''],
      estimacion: [''],
      prioridad: [''],
      criterioAceptacion: ['']
    });
  }

  ngOnInit(): void {
    
  }
  
  enviarDatos (): any{
    console.log("Click en agregar");
    console.log(this.formularioDeTareas.value);
    this.crudService.agregarTarea(this.formularioDeTareas.value).subscribe();
    this.routeador.navigateByUrl('/listar-tarea');
  }
}
