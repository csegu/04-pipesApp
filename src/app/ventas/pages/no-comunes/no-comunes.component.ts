import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Cristian';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarle',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María','Pedro','Juan','Fernando','Hernando','Eduardo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    this.nombre = 'María';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Cristian',
    edad: 37,
    direccion: 'Madrid, España'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  myObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
