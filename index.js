
const formulario = document.getElementById('formulario');
let arreglo = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let genero = document.getElementById('genero').value;

    if (peso > 0 && altura > 0) {
        decimal = peso / (altura ** 2);
    }
    let imc = Math.trunc(decimal);

    let categoria = "";
    if (imc < 20) {
        categoria = "Por de bajo del Peso";

    } else if (imc >= 20 && imc <= 25 && genero == "m") {
        categoria = "Saludable";

    } else if (imc >= 20 && imc <= 27 && genero == "h") {
        categoria = "Saludable";

    } else if (imc >= 25 && imc <= 30 && genero == "m") {
        categoria = "Con Sobrepeso";

    } else if (imc >= 27 && imc <= 30 && genero == "h") {
        categoria = "Con Sobrepeso";


    } else if (imc >= 30 && imc <= 40) {
        categoria = "Obeso";

    } else if (imc > 40) {
        categoria = "Obesidad Extrema";
    }

    crearRegistro(nombre, edad, peso, altura, imc, categoria)
    guardarDatos();
    obtenerLocalStorage(arreglo);
});


const crearRegistro = (nombre, edad, peso, altura, imc, categoria) => {
    let registro = {
        nombre: nombre,
        edad: edad,
        peso: peso,
        altura: altura,
        imc: imc,
        categoria: categoria,
    }

    arreglo.push(registro);
    //console.log(arreglo)

};

const guardarDatos = () => {
    localStorage.setItem('notas', JSON.stringify(arreglo));
}

let i = 0;

function obtenerLocalStorage() {
    let personas = JSON.parse(localStorage.getItem('notas'))
    
    for (let l = i ; l < personas.length; l++) {

        document.getElementById("table").innerHTML += ' <td scope="row">' + personas[l].edad + '</td><td>' + personas[l].nombre + '</td><td>' + personas[l].peso + '</td><td>' + personas[l].altura + '</td><td>' + personas[l].imc + '</td><td>' + personas[l].categoria + '</td>';

        i++

    }
    console.log(personas)
}

document.addEventListener('DOMContentLoaded', () => {
    let personas2 = JSON.parse(localStorage.getItem('notas'))

    for (let t = 0 ; t < personas2.length; t++) {
    
    
        document.getElementById("table").innerHTML += ' <td scope="row">' + personas2[t].edad + '</td><td>' + personas2[t].nombre + '</td><td>' + personas2[t].peso + '</td><td>' + personas2[t].altura + '</td><td>' + personas2[t].imc + '</td><td>' + personas2[t].categoria + '</td>';
    
    }
})

