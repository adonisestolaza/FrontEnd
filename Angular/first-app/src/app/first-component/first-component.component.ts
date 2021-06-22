import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  arreglo = [];

  constructor( 
    
  
  ) {  }

  ngOnInit(): void {
  }


  titulo = "Listado de productos";

  nombre="Adonis";
  apellido="Estolaza";

  autor = `${this.nombre} ${this.apellido}`;
  createAt = Date.now();


  elementos =  [{precio: 1200, stock: 50, producto:  'bebida'},
                {precio: 1350, stock: 60, producto:  'jugo'},
                {precio: 1500, stock: 70, producto:  'galletas'},
                {precio: 1250, stock: 50, producto:  'jugo'},
                {precio: 2500, stock: 60, producto:  'papas'}]



}
