var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        this.lado = this.lado * 4;
        console.log("El perimetro del Cuadrado es: " + this.lado);
    };
    ;
    Cuadrado.prototype.calcularArea = function () {
        this.lado = this.lado * this.lado;
        console.log("El area del Cuadrado es: " + this.lado);
    };
    ;
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(altura, base) {
        this.altura = altura;
        this.base = base;
    }
    Rectangulo.prototype.calcularPerimetro = function () {
        this.altura = this.altura * 3;
        console.log("El perimetro del triangulo es: " + this.altura);
    };
    ;
    Rectangulo.prototype.calcularArea = function () {
        this.area = this.base * this.altura / 2;
        console.log("El area del triangulo es: " + this.area);
    };
    ;
    return Rectangulo;
}());
var c1 = new Cuadrado(10);
c1.calcularArea();
c1.calcularPerimetro();
var r1 = new Rectangulo(10, 5);
r1.calcularArea();
r1.calcularPerimetro();
