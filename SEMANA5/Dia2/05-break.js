let alumnos = ["Jose", "Marcos", "Ariana", "Estrella", "Hadass"]

let eleccion = prompt("Nombre") ;

for (let i=0; i < alumnos.length; i++)

  if (eleccion == alumnos[i])
  {
      console.log(`${eleccion} se encuenta ${i} `)
  }



