/* let nombre ="pablo";
const nombres=["pablo","gaston","marta"];
 */
//lamamos a un dato

/* alert(nombres[0]) */

/* const numeros =[1,2,3,4,5] */
/* let suma=numeros[0] + numeros[1];
console.log(suma);

alert(suma); */

/* for(let index=0 ; index<5;index++){
    console.log(numeros[index])
}
 */
/* 
numeros.push(60) // agrega
numeros.pop(60);  // elimin

numeros.splice(1,2); // borra , primer dato indice del arar, segundo datos cantidad de elementos a borrar consecutivamente desde el indice indicado


numeros.slice(1,3);// copia los datos del posicionamiento menor6 y podes ponerlos en un array nuevo
let len = numeros.length;

alert(len);

 for(let index=0 ; index<len;index++){

    
    alert(numeros.indexOf(1));
    alert(numeros.includes(1));
}
 
 */
// reverse


// concat , concatena los arrays y muestra uno solo array

//match/EJEMPLO 1 :
/* 
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = []; //Array vacío
let   cantidad     = 5; //hasta cuanto

//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)



//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
//EJEMPLO 2
const nombres1 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro')
 */




/* const arrayObjet  =[{id: 1 , prod: "pan"},
{id: 2 , prod: "criollo"}];

for (const producto of arrayObjet ) {
    alert(producto.id)
}

 */

/* class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}


//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();
}
    console.log(productos) */
/* 
    function asignarOperacion(op) {
        if (op == "sumar") {
            return (a, b) => a + b
        } else if (op == "restar") {
            return (a, b) => a - b
        }
    }
    
    let suma = asignarOperacion("sumar")
    let resta = asignarOperacion("restar")
    
    console.log( suma(4, 6) )  //  10
    console.log( resta(5, 3) )  //  2
    console.log( resta(5, 3) )  //  2


    function porCadaUno(arr, fn) {
        for (const el of arr) {
            fn(el)
        }
    }
    const numeros= [1, 2, 3, 4]
    
    porCadaUno(numeros, console.log)
    // 1
    // 2
    // 3
    // 4
    
    let total = 0
    
    function acumular(num) {
        total += num
    }
    
    porCadaUno(numeros, acumular)
    console.log(total) // 10 */