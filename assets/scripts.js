// ASIGNACIÓN DE VARIABLES GLOBALES

const form = document.querySelector("form");
const tareaNueva = document.querySelector("#tarea-nueva");
const total = document.querySelector("#total");
const suma = document.querySelector("#suma")
const completas = document.querySelector("#completas")



let contadorTareasId = 0;
function generarNumeroUnico() {
    contadorTareasId++;
    return contadorTareasId;
  }
let tareasPorDefecto = [
    { id: generarNumeroUnico(), name: "Avanzar tesis", done: false },
    { id: generarNumeroUnico(), name: "Terminar desafios", done: false },
    { id: generarNumeroUnico(), name: "Hacer ejercicio", done: false },
]


const renderHTML = () => {
    total.innerHTML = "";
    let contador = 0
    tareasPorDefecto.forEach((item) => {
        total.innerHTML +=
            `
            <div>
                ${item.id} => 
                ${item.name} =>
                <label for="myCheck">Realizada:</label>
                <input ${item.done ? "checked" : ""} onchange="completar(${item.id})" type="checkbox" class="form-check-input mt-0">
                <button class="btn btn-danger" onclick="eliminar(${item.id})">X</button> 
            </div>
            ` 
        contador = contador + 1
    })
    suma.innerHTML = contador
    let numCompletas = tareasPorDefecto.filter((item) => item.done)
    completas.innerHTML = numCompletas.length
}
renderHTML(); 

const eliminar = (id) => {
    tareasPorDefecto = tareasPorDefecto.filter((item) => item.id !== id); 
    renderHTML(); 
};

const completar = (id) => { 
    tareasPorDefecto.forEach((item) => {
        if (item.id === id && !item.done) {
            item.done = true
        } else if (item.id === id && item.done) {
            item.done = false
        }
    })
    //actializo en html
    renderHTML()
}


form.addEventListener('submit', (event) => {  
    event.preventDefault();


    const content = tareaNueva.value.trim();
    if(content === ''){
        alert(`Debes agregar contenido en el input!`)
    }else{
        form.reset()
        console.log(`entre en el trim`)
        console.log(tareaNueva.value.length)
        console.log(tareaNueva.value.trim())
        tareasPorDefecto.push({
            id: generarNumeroUnico(),
            name: tareaNueva.value,
            done: false,
            name: content,
        });
        //actualizo en html
        renderHTML();
        // formateo el form
        form.reset()
    }

    // if(tareaNueva.value === ''){
    //     alert(`Debes agregar contenido en el input!`)
    // }else if(tareaNueva.value.length > 1){
    //     console.log(`entre en el trim`)
    //     console.log(tareaNueva.value.length)
    //     console.log(tareaNueva.value.trim())
    //     tareasPorDefecto.push({
    //         id: generarNumeroUnico(),
    //         name: tareaNueva.value,
    //         done: false,
    //     });
    //     //actualizo en html
    //     renderHTML();
    //     // formateo el form
    //     form.reset()
    // }else if(tareaNueva.value.charCodeAt() === 32){
    //     console.log(`entre en el charcodeAt`)
    //     console.log(tareaNueva.value.length)
    //     alert(`solo agregaste espacios asique muere`)
    // }

});
