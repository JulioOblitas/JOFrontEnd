let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas con salsa Barbeque",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];

let divContenido =  document.getElementById("contenido");

function dibujarOpciones(){
    let htmlTarjetas = "";
    listaPlatillos.forEach(function (plato) {
        //backticks `template string`
        htmlTarjetas =
            htmlTarjetas +
            `<div class="tarjeta">
				<div class="imagen">
					<img src="${plato.imagen}">
				</div>
				<div class="texto">
					<h4>${plato.nombre}</h4>
					<p>${plato.descripcion}</p>
					<div class="precio">
						<span>S/ ${plato.precio}</span>
						<button class="btn-agregar">
						Agregar
						</button>
					</div>
				</div>
			</div>`;
    });
    divContenido.innerHTML = htmlTarjetas;
}

dibujarOpciones();


let  buttonCarrito = document.getElementById ("btncarrito");
function ClicCarritoCompras(){
    buttonCarrito.addEventListener("click", function(evento){
    evento.preventDefault();
    /*alert("compraste");*/

});
}
ClicCarritoCompras();


let  botonesCompras = document.querySelectorAll("button[class='btn-agregar']");
listapedidos=[];

localStorage.removeItem('Pedidos');
    localStorage.removeItem('Cantidad');

    function AgregarCarrito(){
    
    
    let objetoobtenido  = localStorage.getItem("Cantidad");

    
    cant = JSON.parse(objetoobtenido);


    let listado = [];

    let precio = document.getElementsByTagName("span");
    let desitem = document.getElementsByTagName("h4");

    
    

    data = [];
    recoveredData = localStorage.getItem("Pedido");
    botonesCompras.forEach(function(boton, i){                
            boton.addEventListener("click", function(evento){
            evento.preventDefault();
            cant = cant + 1;
            localStorage.setItem("Cantidad",cant);                  
            buttonCarrito.innerText = `CANT=> ${cant}`;
            id = i+1;
            citem = desitem.item(i).innerText;
            cprecio = precio.item(i).innerText;

            crearlista(id, citem, 1, cprecio.substr(3,2));

        });     
    });
    
};



function crearlista (nid, cdescripcion , cant, nprecio){

    listado = {        
        id: nid,        
        descripcion: cdescripcion,
        cantidad: cant, 
      precio:  nprecio
    };

    getlista ();
    listapedidos.push(listado);
    localStorage.setItem("Pedidos", JSON.stringify(listapedidos));

};

function getlista(){
    recoveredData = localStorage.getItem("Pedidos");
    if (recoveredData == null){
        listapedidos=[];        
    }
    else{
        
        listapedidos = JSON.parse(recoveredData);	            
        
    }
   return listapedidos;

}

 
 

 AgregarCarrito();
 let botonpagar = document.getElementById("btn-pagar");
 let  tablacarrito = document.getElementById ("tbody-carrito");

 function pagar_orden (){
    let htmlTarjetas = "";
   botonpagar.addEventListener("click", function(evento){
    botonpagar.style.display = 'none';
    
    recoveredData = JSON.parse(localStorage.getItem("Pedidos"));
    descripcion = "";
    
    pu = "";
    pt = "";

    for (let index = 0; index < recoveredData.length; index++) {
        
        descripcion = recoveredData[index].descripcion;
        cant = recoveredData[index].cantidad;
        pu = recoveredData[index].precio;
        

        

        htmlTarjetas = htmlTarjetas + `<tr>
        <td>${descripcion}</td>
        <td>${cant}</td>
        <td>${pu}</td>
        <td>60</td>
      </tr>`;
      
    }

        tablacarrito.innerHTML = htmlTarjetas;
    
    });
   };
   
   

pagar_orden();





 






