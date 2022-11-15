import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'cristian';
  nombreUpper: string = 'CRISTIAN';
  nombreCompleto: string = 'crIStIan sEGuRa'

  fecha: Date = new Date();
}
