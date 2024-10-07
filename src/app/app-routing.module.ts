import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';  // Asegúrate de que la ruta de importación sea correcta
import { loginComponent } from './login/login.component';  // Si tienes un LoginComponent, lo importas también

const routes: Routes = [
  { path: 'producto', component: ProductoComponent },  // Ruta para el componente Producto
  { path: 'login', component: loginComponent },  // Ruta para el componente Login
  { path: '', redirectTo: '/producto', pathMatch: 'full' },  // Redirigir a 'producto' si la ruta está vacía
  { path: '**', redirectTo: '/producto' }  // Ruta wildcard para redirigir a 'producto' si no se encuentra ninguna
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
