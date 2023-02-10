

    function saludar (nombre , apellido){

    console.log("Hola " + nombre + " " + apellido)

    alert("Hola "+ nombre + " " + apellido ) 

    let divSaludar = document.getElementById("esteDivSeLlamaAlejandro")

    divSaludar.innerText = "Hola "  + nombre + " " + apellido

    const miCole = document.getElementsByClassName("miClase")}

    //MODIFICAR ELEMENTOS DEL DOM
    
    document.querySelector("h3")

    console.log(document.querySelector("h3"))

    console.log(document.querySelector(".h3-danger"))

    console.log(document.querySelectorAll(".h3-danger"))

    console.log(document.querySelectorAll("h3"))

    console.log(document.querySelector("#parrafo"))

    console.log(document.getElementById("parrafo"))

    const parrafo = document.querySelector("#parrafo")

    parrafo.textContent = "texto desde JS"

    parrafo.innerHTML = "<b>texto con inner.html</b>"

    //STORAGE

    guardar_localStorage();

    function guardar_localStorage(){

    let persona = {
    nombre: "Alejandro",
    edad: 37,
    correo: "aledecg@hotmail.com",
    coords: {
    promedio: 9.89,
    inasistencias: 3}

    };
    
    let nombre = "Juan";

    localStorage.setItem("nombre", nombre );

    localStorage.setItem("persona" , JSON.stringify( persona ));

    //const nombre3 = 'Ignacio';
    //localStorage.setItem('nombreUsuario' , nombre3);

    //OBTENER EL LOCAL STORAGE
    
    const nombre3localStorage = localStorage.getItem('nombreUsuario');

    console.log(nombre3localStorage);

    //ELIMINAR EL CONTENIDO DE LOCAL STORAGE

    localStorage.removeItem('nombreUsuario');}

    //ALMACENAR ARRAY DE OBJETOS

    const profesores = [
    { id: 1,  profe: "Marcos", inasistencias: 1 },
    { id: 2,  profe: "Julio", inasistencias: 2 },
    { id: 3,  profe: "Juan"  , inasistencias: 3 },
    { id: 4,  profe: "Jorge" , inasistencias: 4 } ];

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    //ALMACENAR PROFESOR POR PROFESOR

    for (const profe of profesores) {

    guardarLocal(profe.id, JSON.stringify(profesores));}

    // O ALMACENAR UN ARRAY COMPLETO

    guardarLocal("listaProfesores", JSON.stringify(profesores));

   





    



    



    
    
   











    
    
        



    





        
       
        
        
           
           

           
   

    
    
    
    
    
    
    
    
    
 
         
    
  

       


















    

  


   


