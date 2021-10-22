

 
friendlist =[];
anadirlista();

function anadirlista (){

    listado = {        
        id: "1",
       descripcion: "valor1",
       precio:  "2"
   };
   getlista();
   friendlist.push(listado);
   localStorage.setItem("prueba",JSON.stringify(friendlist));

} 

 function getlista(){
        recoveredData = localStorage.getItem("prueba");
        if (recoveredData == null){
            friendlist =[];        
        }
        else{
            
            friendlist = JSON.parse(recoveredData);	            
            
        }
       return friendlist;
 }

 
 