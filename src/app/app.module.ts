import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component'; // Asegúrate de que la ruta sea correcta
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
