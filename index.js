
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
    console.log(genero)
    let categoria = "";
    if (imc < 20) {
        categoria = "Por de bajo del Peso";

    } else if (imc >= 20 && imc <= 25 && genero == "m" ) {
        categoria = "Saludable";
    
    } else if (imc >= 20 && imc <= 27  && genero == "h") {
        categoria = "Saludable";
   
    } else if (imc >= 25 && imc <= 30 && genero == "m" ) {
        categoria = "Con Sobrepeso";

    } else if (imc >= 27 && imc <= 30 && genero == "h" ) {
        categoria = "Con Sobrepeso";
    

    }else if(imc >= 30 && imc <= 40 ){
        categoria = "Obeso";

    }else if(imc > 40){
        categoria = "Obesidad Extrema";
    }

    crearRegistro(nombre, edad, peso, altura, imc, categoria)
    guardarDatos();
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
    document.getElementById("tabla").innerHTML += ' <td scope="row">' + registro.edad + '</td><td>' + registro.nombre + '</td><td>' + registro.peso + '</td><td>' + registro.altura + '</td><td>' + registro.imc + '</td><td>' +registro.categoria+ '</td>';

};

const guardarDatos = () => {
    localStorage.setItem('notas', JSON.stringify(arreglo));
}