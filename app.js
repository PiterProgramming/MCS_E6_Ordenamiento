//* 1.- Crea una función que ordene de forma descendente un arreglo de números.

function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
}

// Ejemplo de uso:
const entrada = [9, 3, 1, 6, 5, 88, -1, 2, 7];
const salida = ordenarDescendente(entrada);
console.log(salida); // Debería imprimir [88, 9, 7, 6, 5, 3, 2, 1, -1]

//* 2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.

function ordenarAscii(arr) {
    return arr.sort();
}

// Ejemplo de uso:
const entrada2= ['b', 'h', 'w', 'e', 'a'];
const salida2 = ordenarAscii(entrada2);
console.log(salida2); // Debería imprimir ['a', 'b', 'e', 'h', 'w']

//* 3.- Crear una clase Alumno con los siguientes datos:

class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const suma = this.calificaciones.reduce((acumulado, actual) => acumulado + actual, 0);
        return suma / this.calificaciones.length;
    }
}

class Salon {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarAlumnosPorPromedio() {
        this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
}

// Ejemplo de uso:
const alumno1 = new Alumno("Juan", [90, 95, 87, 100, 92]);
const alumno2 = new Alumno("Ana", [100, 98, 95, 90, 96]);
const alumno3 = new Alumno("Luis", [80, 85, 86, 91, 88]);

const salon = new Salon();
salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);

salon.ordenarAlumnosPorPromedio();

console.log("Alumnos ordenados por promedio de mayor a menor:");
salon.alumnos.forEach(alumno => {
    console.log(`${alumno.nombre}: ${alumno.obtenerPromedio()}`);
});

//* 4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.

function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

// Ejemplo de uso:
const entrada3 = ["adios", "hola", "maximo", "uno", "despedida"];
const salida3 = ordenarPorLongitud(entrada3);
console.log(salida3); // Debería imprimir ["uno", "hola", "adios", "maximo", "despedida"]

//* 5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.

function ordenarPorDistanciaAlOrigen(arr) {
    return arr.sort((a, b) => {
        const distanciaA = Math.sqrt(a[0]**2 + a[1]**2);
        const distanciaB = Math.sqrt(b[0]**2 + b[1]**2);
        return distanciaA - distanciaB;
    });
}

// Ejemplo de uso:
const entrada4 = [[7, 3], [2, 2], [1, 0], [4, 3]];
const salida4 = ordenarPorDistanciaAlOrigen(entrada4);
console.log(salida4); // Debería imprimir [[1, 0], [2, 2], [4, 3], [7, 3]]



