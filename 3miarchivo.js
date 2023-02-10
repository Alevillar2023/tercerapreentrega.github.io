    
    //CARRITO DE COMPRAS UTILIZANDO BUCLES Y ARRAYS
    
    const listaDeProductos = [
    {nombre: "curso de javascript", precio: 15000},
    {nombre: "curso de react", precio: 10000},
    {nombre: "curso de angular", precio: 12000},
    {nombre: "curso de desarrollo web", precio: 9000},];

    let carrito =[]

    let select = prompt("Hola...desea comprar algun producto")

    while(select != "si" && select != "no" ){

    alert("por favor ingresa si o no")

    select = prompt("hola desea comprar algo si o no")

}

    if(select == "si"){

    alert("a continuacion nuestra lista de productos")

    let todosLosProductos = listaDeProductos.map((producto) => producto.nombre + " " + producto.precio + "$");

    alert(todosLosProductos.join(" - "))

}

    else if(select == "no"){

    alert("gracias por visitar nuestro sitio")

}

    while(select != "no"){

    let producto=prompt("agrega un producto a tu carrito")

    let precio = 0

    if(producto == "curso de javascript" || producto == "curso de react" || producto == "curso de angular" || producto == "curso de desarrollo web" ){
     
    switch(producto){

    case "curso de javascript":
    precio = 15000
    break;

    case "curso de react":
    precio = 10000
    break;

    case "curso de angular":
    precio = 12000
    break;

    case "curso de desarrollo web":
    precio = 9000
    break;

    default:

    break;}
    
    let unidades = parseInt(prompt("cuantas unidades quiere comprar"))
    
    carrito.push({producto, unidades, precio})

    console.log(carrito)}   
    
    else{

    alert("este curso no esta disponible")}

    select= prompt("desea seguir comprando?")

    while (select === "no"){

    alert("gracias por su compra")

    carrito.forEach((carritoFinal) => {

    console.log(`producto: ${carritoFinal.producto} , unidades: ${carritoFinal.unidades},

    total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)})

    break;}

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

    console.log(`el total a pagar por su compra es de $ ${total} pesos`)

}

    //ALMACENAR ARRAY DE OBJETOS

    const productos = [{ id: 1, producto: "curso de javascript", precio: 15000},
                       { id: 2, producto: "curso de javascript", precio: 10.000},
                       { id: 3, producto: "curso de javascript", precio: 12.000},
                       { id: 4, producto: "curso de javascript", precio: 12.000}]

    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    for (const producto of productos) {

    guardarLocal(producto.id, JSON.stringify(producto));

}
    guardarLocal("mi lista de productos", JSON.stringify(productos));

    let miFormulario = document.getElementById("formulario");

    miFormulario.addEventListener("submit", validarFormulario);

    function validarFormulario(e){

    e.preventDefault();
    
    console.log("Formulario Enviado");    
}


                    


