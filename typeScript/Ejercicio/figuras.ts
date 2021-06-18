interface Figura{

    calcularPerimetro();
    calcularArea();
}

class Cuadrado implements Figura{

    lado: number;

    constructor(lado: number){
        this.lado = lado;
    }

    calcularPerimetro(){
        this.lado  = this.lado*4;
        console.log(`El perimetro del Cuadrado es: ${this.lado}`);
        
    };

    calcularArea(){
        this.lado = this.lado*this.lado;
        console.log(`El area del Cuadrado es: ${this.lado}`);
    };
}


class Rectangulo implements Figura{

    altura: number;
    base:  number;

    area: number;

    constructor(altura: number,base: number){
        this.altura =altura;
        this.base=base;
    }

    calcularPerimetro(){
        this.altura  = this.altura*3;
        console.log(`El perimetro del triangulo es: ${this.altura}`);
    };
    
    calcularArea(){
       
       this.area = this.base*this.altura/2;
       console.log(`El area del triangulo es: ${this.area}`);
    
    };
}

let c1 = new Cuadrado(10);
c1.calcularArea();
c1.calcularPerimetro();

let r1 = new Rectangulo(10,5);

r1.calcularArea();
r1.calcularPerimetro();

