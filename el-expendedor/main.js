
const productos = [
    { nombre: "galletitas" , precio: 100 },
    { nombre: "alfajor" , precio: 150 },
    { nombre: "papas" , precio: 200 },
    { nombre: "chocolate" , precio: 250 },
    { nombre: "agua" , precio: 300 },
    { nombre: "gaseosa" , precio: 350 },

];
let carrito = []

let seleccion = prompt("Hola bienvenido al Expendedor, desea realizar una compra? (si o no)")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese una opcion válida")
    seleccion = prompt("Desea realizar una compra? (si o no)")
}

if(seleccion == "si"){
    let todoslosProductos = productos.map((producto) => producto.nombre + ": $" + producto.precio);
    alert( "La lista de prodcutos es: \n" + todoslosProductos.join(" \n"))
}   
else if (seleccion == "no"){
        alert("gracias por venir, vuelva pronto!")
}

while(seleccion != "no"){
    let producto = prompt("agregar producto a la orden")
    let precio = 0

    if(producto == "galletitas" || producto == "alfajor" || producto == "papas" || producto == "chocolate" || producto == "agua" || producto == "gaseosa"){
        switch(producto) {
            case "galletitas":
                precio = 100;
                break;
            case "alfajor":
                precio = 150;
                break;
            case "papas":
                precio = 200;
                break;
            case "chocolate":
                precio = 250;
                break;
            case "agua":
                precio = 300;
                break;
            case "gaseosa":
                precio = 350;
                break;
            default:
                break;
        }
    let unidades = prompt("cuantas unidades va a llevar?")

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } 
    else{
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando? (si o no)")

    while(seleccion == "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar $${carritoFinal.unidades * carritoFinal.precio}`)
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto $${carritoFinal.unidades * carritoFinal.precio}`)
        }) 
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es de: $${total}`)
