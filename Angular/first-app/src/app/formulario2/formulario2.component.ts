import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component  {

    salida! :string;
    notas = []
    nota_final: number;

  formulario = new FormGroup({
    nombre: new FormControl(''),
    rut: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl(''),

    }),
    examen:  new FormControl('')
    });

    enviar(){

      let nota1 = parseInt(this.formulario.value.notas.nota1);
      let nota2 = parseInt(this.formulario.value.notas.nota2);
      let nota3 = parseInt(this.formulario.value.notas.nota3);
      let nota4 = parseInt(this.formulario.value.notas.nota4);
      
      let promedio = (nota1 + nota2 + nota3 + nota4)/4;
      
      let examen = parseInt(this.formulario.value.examen);

      if(nota1 >=4 && nota2 >=4 && nota3 >=4 && nota4 >=4 && examen >=4){
         this.nota_final = promedio*0.7 + examen*0.3;
         
        this.notas.push(nota1,nota2,nota3,nota4);
        console.log(this.nota_final);
        return this.salida = 'El alummo Aprueba el curso'
      }
      else
      {
        this.notas.push(nota1,nota2,nota3,nota4);
         this.nota_final = promedio*0.7 + examen*0.3;
         console.log(this.nota_final);
      return this.salida = 'El alumno Reprueba el curso'

      }

      
      
    }

}
