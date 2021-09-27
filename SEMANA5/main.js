
        

        document.querySelector("button")
        .onclick = function(){
            alert('hola mundo tercera forma')
        }

        let cname = "Julian";
        let nedad = 33;

        console.log(cname, nedad)

        let sumedad2 = nedad + 33;
        console.log(sumedad2);



        {
            let nombre = "Kiara"
            
            console.log(cname);
        }
        
        console.log(cname);

        console.dir (document); 

        let nombre = "string";
        let edad = 35;

        let bool = true;
        let indefinido;
        let nulo = null;
        let simbolo = Symbol("abd");
        let objeto = {};


        console.log("nombre", nombre)
        console.log("edad", edad)
        console.log("bool", bool)
        console.log("indefinido", indefinido)
        console.log("nulo", nulo)
        console.log("simbolo", simbolo)
        console.log("objeto", objeto)

        console.log("nombre", typeof nombre)
        console.log("edad", typeof edad)
        console.log("bool", typeof bool)
        console.log("indefinido", typeof indefinido)
        console.log("nulo", typeof nulo)
        console.log("simbolo", typeof simbolo)
        console.log("objeto",typeof  objeto)

        let num1 = "2.50";
        let num2 = "3.35";

        let total = parseFloat(num1) +  parseFloat(num2);
        console.log("Sumar" , total)

        let numero = 14;

        console.log(typeof numero.toString())

        /*Funcion Declarativa*/
        function suma(a,b){
            return a+b;
        };

        console.log(suma(2,3));

        /*Funcion Expresiva*/
        let sumar = function (a,b){
            return a+b;
        }
        console.log(sumar(5,3));

        /*arrow function */

        const sumar1 =(a,b) =>{
                return a+b;
        };

        console.log(sumar1(5,5));


    function sumar2 (a,b) {
        return a+b
    }
    let funsuma = sumar2

    console.log(funsuma(9,9));

    /* se puede usar otra funcion suma */
    console.log(sumar2(funsuma(5,5) ,15))

    /*closure*/

    function sumabase(x){
        return function (y){
            return x+y;
        }
    };

    const sumabase5 = sumabase(5);
    const sumabase10 = sumabase(10);

    console.log(sumabase5(8))
    console.log(sumabase10(10))

    function uno(){

        console.log("uno");
        
    }

     function dos(){
        console.log("dos");

        function tres(){
            console.log("tres");
            uno();
        }

        tres();
     }
        
    
     dos();



