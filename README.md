# IMC
 Indice de Masa Corporal

 
 
 
 
 
 
 
 function obtenerLocalStorage() {

    let personas = JSON.parse(localStorage.getItem('notas'));

    for(let i = 0; i < personas.length; i++) {

    document.getElementById("table").innerHTML += ' <td scope="row">' + personas[i].edad + '</td><td>' + personas[i].nombre + '</td><td>' + personas[i].peso + '</td><td>' + personas[i].altura + '</td><td>' + personas[i].imc + '</td><td>' + personas[i].categoria + '</td>';
}

    console.log(personas[i])
}


const loadData = arreglo  => {
    arreglo.forEach(personaje =>{
        const {edad, nombre, peso, altura, imc, categoria } = personaje;
        document.getElementById("tabla").innerHTML += ' <td scope="row">' +edad + '</td><td>' +nombre + '</td><td>' +peso + '</td><td>' +altura + '</td><td>' +imc + '</td><td>' +categoria + '</td>';

    })
}