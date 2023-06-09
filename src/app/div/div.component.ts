import { Component } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css'],
})
export class DivComponent {
  num1: number;
  residuo: any;
  resultado: any;
  octal: any;
  contador: number;
  octalv: string;
  hexa: any;
  hexav: string;
  
  constructor() {
    this.num1 = 0;
    this.residuo = 0;
    this.resultado = 0;
    this.octal = '';
    this.contador = 0;
    this.octalv = '';
    this.hexa = '';
    this.hexav = '';
  }
  dividir8(): void {
    this.contador = this.num1;
    this.resultado = this.num1;
    console.log(this.resultado);
    if ((this.resultado = this.num1))
      while (this.contador >= 8) {
        this.residuo = this.resultado % 8;
        console.log(this.residuo);
        this.resultado = Math.floor((this.resultado /= 8));
        this.octal += this.residuo;
        console.log(this.octal, 'octal');
        this.contador = this.resultado;
        console.log(this.resultado, 'resultado');
        if (this.resultado <= 8) {
          this.octal += this.resultado;
          console.log(this.octal);
          this.octalv = this.octal.split('').reverse().join('');
          console.log(this.octalv);
        }
      }
  }
  Borrar(): void {
    this.num1 = 0;
    this.residuo = 0;
    this.resultado = 0;
    this.octal = '';
    this.octalv = '';
    this.contador = 0;
    this.hexa = '';
    this.hexav = '';
  }
  dividir16(): void {
    this.contador = this.num1;
    this.resultado = this.num1;
    console.log(this.resultado);
    if ((this.resultado = this.num1))
      while (this.contador >= 16) {
        this.residuo = this.resultado % 16;
        console.log(this.residuo, 'reswhile');
        this.resultado = Math.floor((this.resultado /= 16));
        this.hexa += this.residuo;
        console.log(this.hexa, 'hexa');
        this.contador = this.resultado;
        console.log(this.resultado, 'resultado');
        if (this.resultado <= 16) {
          if ((this.residuo = 15)) {
            this.hexa += this.resultado;
            console.log(this.hexa, 'ifOJO');
            this.hexa = this.hexa.replace(/15/, 'F');
          }
          if ((this.residuo = 14)) {
            this.hexa = this.hexa.replace(/14/, 'E');
          }
          if ((this.residuo = 13)) {
            this.hexa = this.hexa.replace(/13/, 'D');
          }
          if ((this.residuo = 12)) {
            this.hexa = this.hexa.replace(/12/, 'C');
          }
          if ((this.residuo = 11)) {
            this.hexa = this.hexa.replace(/11/, 'B');
          }
          if ((this.residuo = 11)) {
            this.hexa = this.hexa.replace(/10/, 'A');
          }
          console.log(this.hexa);
          this.hexav = this.hexa.split('').reverse().join('');
          console.log(this.hexav);
        }
      }
  }
}
