import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTareaComponent } from './componentes/listar-tarea/listar-tarea.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { CrearTareaComponent } from './componentes/crear-tarea/crear-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTareaComponent,
    EditarTareaComponent,
    CrearTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
