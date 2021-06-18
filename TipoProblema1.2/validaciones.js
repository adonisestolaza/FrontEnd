var arreglo = new Array();
arreglo[0]="errorNota1";
arreglo[1]="errorNota2";
arreglo[2]="errorNota3";
arreglo[3]="errorNota4";
arreglo[4]="errorExamen";

function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('nota1').value;
    entrada[1]=document.getElementById('nota2').value;
    entrada[2]=document.getElementById('nota3').value;
    entrada[3]=document.getElementById('nota4').value;
    entrada[4]=document.getElementById('examen').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese nota 1</span>";
    error[1] = "<span style='color: red'>Ingrese nota 2</span>";
    error[2] = "<span style='color: red'>Ingrese nota 3</span>";
    error[3] = "<span style='color: red'>Ingrese nota 4</span>";
    error[4] = "<span style='color: red'>Ingrese nota Examen</span>";

  //Definiendo un ciclo forech
  for(i in entrada){
    var mensajeError = error[i]
    var valorArreglo = arreglo[i]
    //Validando campo requerido
    if(entrada[i]<0 && entrada[i]>7){
        document.getElementById(valorArreglo).innerHTML = mensajeError;
    }

  }
}

function validarTodos(){
    var contador = 0;
    for(i=0; i<6; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            contador++;
        }
    }
    if(contador == 6){
        document.getElementById('mensajefinal').innerHTML = "Formulario validado!!"
    }
}