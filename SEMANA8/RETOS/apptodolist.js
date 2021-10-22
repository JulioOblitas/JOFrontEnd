

let btnadicionar = document.getElementById("btnadic");
function clickboton(){
    btnadicionar.addEventListener("click",function(evento){
        evento.preventDefault();
       //instrucciones para agregar a la tabla
        anadirTarea();
        
    });
    
}
clickboton();


function anadirTarea(){
    let textotarea =  document.getElementById("tarea").value;    
    
    let resultado =  document.getElementById("resultado");    
    let botonradio = document.createElement("input");
    
    
     let listaTareas = document.getElementById("resultado")
        let div = document.createElement("div")
        div.classList.add("row")
        div.innerHTML = `<strong class="col-3 mt-2"><input type="radio"  class = "itemradio" name = "item"  id = "item"  
                         class="m-1">${textotarea}</strong>
                         <button id="prio"    class="btn btn-info col-3 mb-3 mx-2 btnopcpri">PRIO</button>
                         <button id="urgente" class="btn btn-info col-3 mb-3 mx-2 btnopcurg">URGENCY</button>
                         <button id="length"  class="btn btn-info col-3 mb-3  mx-2 btnopclen">LENGTH</button><hr>`
        listaTareas.appendChild(div)


}


function selecionaritem(){
    
        let  itemdrop  = document.querySelectorAll("a[class = 'dropdown-item dropdown-item1']");  
        /*let  itemdrop  = document.getElementsByClassName("dropdown-item1");   
        /*let botonespri = document.querySelectorAll("button[class = 'btnopcpri']");   */
        
        let botonespri = document.getElementsByClassName('btnopcpri');
        
        itemdrop.forEach(function(valor, i){                
            
            valor.addEventListener("click", function(evento){
                evento.preventDefault();                
                //console.log("es", valor.innerText , i);   
                let item2 = document.getElementsByName("item")
                    
                //console.log(buscaindice(item2));
                //*console.log(botonespri);
                    pos = (buscaindice(item2));
                   botonespri[pos].innerText = valor.innerText;
                   

       
            });     

        });

        
};

function selecionaritem2(){
    
    let  itemdrop  = document.querySelectorAll("a[class = 'dropdown-item dropdown-item2']");  
    
    
    let botonesurg = document.getElementsByClassName('btnopcurg');
    
    
    itemdrop.forEach(function(valor, i){                
        
        valor.addEventListener("click", function(evento){
            evento.preventDefault();                
    
            let item2 = document.getElementsByName("item")
                
                pos = (buscaindice(item2));
               botonesurg[pos].innerText = valor.innerText;
               

   
        });     

    });

    
};

function selecionaritem3(){
    
    let  itemdrop  = document.querySelectorAll("a[class = 'dropdown-item dropdown-item3']");  
    let botoneslen = document.getElementsByClassName('btnopclen');
    
    
    itemdrop.forEach(function(valor, i){                        
        valor.addEventListener("click", function(evento){
            evento.preventDefault();                
            
            let item2 = document.getElementsByName("item")
                
               pos = (buscaindice(item2));
               botoneslen[pos].innerText = valor.innerText;
                  
        });     

    });

    
};

function buscaindice(citem2){
    
    let c = 1;
    citem2.forEach((elemento,i) => {
        if (elemento.checked){
         c= i;     
        }
    });
        
    return  c;   
}

selecionaritem();
selecionaritem2();
selecionaritem3();



