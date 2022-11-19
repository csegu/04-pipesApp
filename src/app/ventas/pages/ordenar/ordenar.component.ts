import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  ordenarPor: string = '';

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
  
}
