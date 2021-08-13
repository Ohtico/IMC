
import { contenido } from './data/data.js';

document.addEventListener('DOMContentLoaded', () => {
    cargarContenido(contenido);
})

let hernani = []


const cargarContenido = contenido => {

     let victor = contenido.filter(marco => marco.indiceM < 20)
     let hernani = contenido.filter(imc => imc.indiceM >= 20 && imc.indiceM <= 25 )
     let lola = contenido.filter(imc => imc.indiceM >= 25 && imc.indiceM <= 30 )
     let cati = contenido.filter(imc => imc.indiceM >= 30 && imc.indiceM <= 40 )
     let keizi = contenido.filter(imc => imc.indiceM > 40 )

     lilia(victor, hernani, lola, cati, keizi)

}



let cantidaduno=0;
let cantidaddos=0;
let cantidadtres=0;
let cantidadcuatro=0;
let cantidadcinco=0;
//console.log(cantidaduno)
const lilia = (victor, hernani, lola, cati, keizi) =>{
for(let i=0; i < victor.length; i++){
    cantidaduno++
    console.log(cantidaduno)
}
for(let i=0; i < hernani.length; i++){
    cantidaddos++
}
for(let i=0; i < lola.length; i++){
    cantidadtres++
}
for(let i=0; i < cati.length; i++){
    cantidadcuatro++
}
for(let i=0; i < keizi.length; i++){
    cantidadcinco++
}
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Por de bajo del Peso', 'Saludable', 'Con Sobrepeso', 'Obeso', 'Obesidad Extrema'],
        datasets: [{
            label: 'Estadisticas IMC',
            data: [cantidaduno, cantidaddos, cantidadtres, cantidadcuatro, cantidadcinco],
            backgroundColor: [
                'rgb(51, 133, 255)',
                'rgb(77, 255, 77)',
                'rgb(255, 153, 51)',
                'rgb(255, 26, 26)',
                'rgb(255, 51, 0)'
            ]
        }]
    }
})

}

// const condicional = hernani => {


//     if (hernani < 20) {
//         myChart.data.datasets[0].data[0]+1
//     } else if (hernani >= 20 && hernani <= 27) {
//         myChart.data.datasets[0].data[1]+1
//     }else if (hernani > 27 && hernani <= 30){
//         myChart.data.datasets[0].data[2]+1
//     }else if (hernani > 30 && hernani <= 40){
//         myChart.data.datasets[0].data[3]+1
//     }else if (hernani > 40 ){
//         myChart.data.datasets[0].data[4]+1
//     }

// }


//console.log(myChart.data.datasets[0].data[0]+1)


const formulario = document.getElementById('formulario');
let arreglo = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let genero = document.getElementById('genero').value;
    
    
    let decimal="";
    if (peso > 0 && altura > 0) {
        decimal = peso / (altura ** 2);
        console.log(decimal);
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
        categoria = "Obeso/a";

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
    document.getElementById("resultado").innerHTML = `IMC: ${registro.imc}  <br>${registro.categoria} `;


};

const guardarDatos = () => {
    localStorage.setItem('notas', JSON.stringify(arreglo));
}

function obtenerLocalStorage() {
    let personas = JSON.parse(localStorage.getItem('notas'))
}

// let i = 0;

// function obtenerLocalStorage() {
//     let personas = JSON.parse(localStorage.getItem('notas'))

//     for (let l = i ; l < personas.length; l++) {

//         document.getElementById("table").innerHTML += ' <td scope="row">' + personas[l].edad + '</td><td>' + personas[l].nombre + '</td><td>' + personas[l].peso + '</td><td>' + personas[l].altura + '</td><td>' + personas[l].imc + '</td><td>' + personas[l].categoria + '</td>';

//         i++

//     }
//     console.log(personas)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let personas2 = JSON.parse(localStorage.getItem('notas'))

//     for (let t = 0 ; t < personas2.length; t++) {


//         document.getElementById("table").innerHTML += ' <td scope="row">' + personas2[t].edad + '</td><td>' + personas2[t].nombre + '</td><td>' + personas2[t].peso + '</td><td>' + personas2[t].altura + '</td><td>' + personas2[t].imc + '</td><td>' + personas2[t].categoria + '</td>';

//     }
// })

