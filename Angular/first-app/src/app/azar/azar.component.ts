import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azar',
  templateUrl: './azar.component.html',
  styleUrls: ['./azar.component.css']
})
export class AzarComponent implements OnInit {
  
  numeros: Array<any> = [];
  numero: number;
  
  constructor() { }

  ngOnInit(): void {

  var numeroAleatorio = Math.ceil(Math.random()*25+1);

  var existe = false;

  for(var i=0;i<this.numeros.length; i++){

	  if(this.numeros[i] == numeroAleatorio){
        existe = true;
        break;
    }
    
    if(!existe){
      this.numero = numeroAleatorio;
      this.numeros.push(this.numero);
    }
  }

  

}



}




