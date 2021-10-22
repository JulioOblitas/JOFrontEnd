let miModal  = new bootstrap.Modal(document.getElementById("miModal"));


console.log(miModal);



/*setTimeout(function(){
    miModal.show();
}, 5000)*/

let btnAbrir  = document.getElementById("btnAbrir");

btnAbrir.addEventListener("click" , function(){
    miModal.show();
})