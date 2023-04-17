
  class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = dni;
    }

    mostrarGeneracion() {
        let generacion = "";
        if (this.anioNacimiento >= 1901 && this.anioNacimiento <= 1927) {
            generacion = "Generación Perdida";
        } else if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
            generacion = "Silent Generation";
        } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
            generacion = "Baby Boomers";
        } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1996) {
            generacion = "Generación del Milenio (Millennials)";
        } else if (this.anioNacimiento >= 1997 && this.anioNacimiento <= 2012) {
            generacion = "Generación del Centenario (Generación Z)";
        } else if (this.anioNacimiento >= 2013 && this.anioNacimiento <= 2025) {
            generacion = "Generación Alfa";
        } else {
            generacion = "Generación Desconocida";
        }

        alert(`Generación: ${generacion}`);
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad.`);
        } else {
            alert(`${this.nombre} es menor de edad.`);
        }
    }
}

document.getElementById('formPersona').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value);
    let sexo = document.getElementById('sexo').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
    let dni = document.getElementById('dni').value;

    let persona = new Persona(nombre, edad, sexo, peso, altura, anioNacimiento, dni);
    
    persona.mostrarGeneracion();
    persona.esMayorDeEdad();
});
