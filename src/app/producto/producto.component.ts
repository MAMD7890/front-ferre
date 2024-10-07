import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'] // Asegúrate de que esta línea apunte correctamente al archivo SCSS
})
export class ProductoComponent {
  componentes: { nombre: string; cantidad: number; unidad: string; costo: number }[] = [];
  costoTotal: number = 0;

  agregarComponente(nombre: string, cantidad: number, unidad: string, costo: number) {
    this.componentes.push({ nombre, cantidad, unidad, costo });
    this.actualizarCostoTotal();
  }

  eliminarComponente(index: number) {
    this.componentes.splice(index, 1);
    this.actualizarCostoTotal();
  }

  actualizarCostoTotal() {
    this.costoTotal = this.componentes.reduce((total, componente) => total + (componente.costo * componente.cantidad), 0);
  }

  onSubmit(form: any) {
    // Obtener valores de los campos
    const nombre = form.value.nombreProducto;
    const precioVenta = form.value.precioVenta; // Asegúrate de que estás guardando el precio de venta si lo necesitas
    const nombreComponente = form.value.nombreComponente;
    const cantidad = +form.value.cantidadComponente; // Convertir a número
    const unidad = form.value.unidadComponente;
    const costo = +form.value.costoComponente; // Convertir a número

    // Agregar componente
    this.agregarComponente(nombreComponente, cantidad, unidad, costo);
    form.reset(); // Reiniciar el formulario
  }
}
