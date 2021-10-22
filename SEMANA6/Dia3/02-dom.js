let formtodo  = document.getElementById("formTodo");
let ultareas = document.getElementById("tareas");

let tareas = [];

formtodo.addEventListener("submit", function(e){
    e.preventDefault();
    let nuevatarea  = formtodo.tarea.value;
    tareas.push(nuevatarea) ;
    formtodo.reset();
dibujartareas();

});

function dibujartareas(){
    ultareas.innerHTML = "";
    tareas.forEach(function(item, posicion){
        let li = document.createElement("li");
        li.innerText = item;
        ultareas.appendChild(li);
        li.addEventListener("dblclick", function(){
            console.log("click en tarea");

            tareas.splice(posicion,1);
            dibujartareas();
        })
    })
}
