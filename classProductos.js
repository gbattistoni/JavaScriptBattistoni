// creamos clase producto
class Producto {
  constructor(idProducto, ProductoDes, categoria, precio) {
    this.idProducto = parseInt(idProducto);
    this.ProductoDes = ProductoDes;
    this.categoria = categoria;
    this.precio = parseFloat(precio);




  }

}



const productos = [];


//local
// alamcenamos los valores
productos.push(new Producto(1, "Lomo Ahumado", "Lomo", 800));
productos.push(new Producto(2, "Lomo ternera", "Lomo", 1650));
productos.push(new Producto(3, "Piza tomate", "Pizza", 800));
productos.push(new Producto(4, "Piza especial", "Pizza", 900));
productos.push(new Producto(5, "Chori ahumado", "Chori", 750));
productos.push(new Producto(6, "Chori vejetariano", "Chori", 750));
productos.push(new Producto(7, "Hambuerguesa completa", "Hambuerguesa", 1150));
productos.push(new Producto(8, "Hambuerguesa Simple", "Hambuerguesa", 950));


//escondemos los combos de las cantidades

document.getElementById("cantidadLomos").style.display = "none"; // show
document.getElementById("cantidadLomosLabel").style.display = "none"; // show
document.getElementById("cantidadPizza").style.display = "none"; // show
document.getElementById("cantidadPizzaLabel").style.display = "none"; // show
document.getElementById("cantidadChori").style.display = "none"; // show
document.getElementById("cantidadChoriLabel").style.display = "none"; // show
document.getElementById("cantidadHambuerguesa").style.display = "none"; // show
document.getElementById("cantidadHambuerguesaLabel").style.display = "none"; // show
document.getElementById("generarCompra").style.display = "none"; // show

/* funcion para llenar las  cantidades de los combos  */
let paso = 0;

function candidades(producto) {

 
  let listaCantidad = document.getElementById(producto);

  if (paso == 0) {

    
   // habilitamos el btn para confirmar la agregar al carrito

    optionCantidad=optionCantidad+" <option value=0></option>" 
    for (let i = 1; i < 11; i++) {

     
      optionCantidad = optionCantidad + " <option value=" + i + ">" + i + "</option>"

    }
   

  }

  listaCantidad.innerHTML = optionCantidad;

  document.getElementById(producto).style.display = "block"; // show
  document.getElementById(producto + "Label").style.display = "block"; // show

  paso = 1;

}

let precioFinal = 0;

// funcion para obtener el precio de los productos por cantidad y va sumando y guardando en variable el precio total

function obtenerPrecio(productoCantidad, produto) {

  //let listaCantidad= document.getElementById(productoCantidad);
  let idProducto = document.getElementById(produto).value;
  let cantidad = document.getElementById(productoCantidad).value;
  /* let lista=this.options[listaProducto.selectedIndex];
  let valor =lista.value; */

  let lista = productos.filter(cat => cat.idProducto == idProducto);
  let precio = lista[0].precio;
  let preciototal = precio * cantidad;

  precioFinal = precioFinal + preciototal;

  alert(" precio unitario del producto es $" + precio + " por la cantidad seleccionada es $" + preciototal )

  document.getElementById("generarCompra").style.display = "block"; // show


}


// funcion para agregar la carrito  , antes de cargar indica el monto total por la comra de los productos

function agregarCarrito (){
 alert(" Precio total de la compra $" + precioFinal);

}


/* separamos los productos por categoria para luego armar el select */


/* obtenemos armamos los option de los lomos  */
let Lomo = productos.filter(cat => cat.categoria == "Lomo");

let listaLomos = document.getElementById("listaLomos");
let optionLomos = " <option value=0></option>";

for (let i = 0; i < Lomo.length; i++) {

  optionLomos = optionLomos + " <option value=" + Lomo[i].idProducto + ">" + Lomo[i].ProductoDes + "</option>"

}
/* cargamos combo de lomos  */
listaLomos.innerHTML = optionLomos;
let optionCantidad = "";




/* obtenemos armamos los option de los Pizza  */

let Pizza = productos.filter(cat => cat.categoria == "Pizza");



let listaPizza = document.getElementById("listaPizza");
let optionPizza = " <option value=0></option>";

for (let i = 0; i < Lomo.length; i++) {

  optionPizza = optionPizza + " <option value=" + Pizza[i].idProducto + ">" + Pizza[i].ProductoDes + "</option>"

}
/* cargamos combo de pizza  */
listaPizza.innerHTML = optionPizza;


/* obtenemos armamos los option de los Choris  */

let Chori = productos.filter(cat => cat.categoria == "Chori");



let listaChori = document.getElementById("listaChori");
let optionChori = " <option value=0></option>";

for (let i = 0; i < Lomo.length; i++) {

  optionChori = optionChori + " <option value=" + Chori[i].idProducto + ">" + Chori[i].ProductoDes + "</option>"

}
/* cargamos combo de choris */
listaChori.innerHTML = optionChori;

/* obtenemos armamos los option de los Hambuerguesa  */

let Hambuerguesa = productos.filter(cat => cat.categoria == "Hambuerguesa");



let listaHambuerguesa = document.getElementById("listaHambuerguesa");
let optionHambuerguesa = " <option value=0></option>";

for (let i = 0; i < Hambuerguesa.length; i++) {

  optionHambuerguesa = optionHambuerguesa + " <option value=" + Hambuerguesa[i].idProducto + ">" + Hambuerguesa[i].ProductoDes + "</option>"

}
/* cargamos combo de hamburguesa  */
listaHambuerguesa.innerHTML = optionHambuerguesa;




ambuerguesa; 




 

 