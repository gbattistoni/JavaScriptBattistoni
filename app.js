
/* 

let user="";
let pass="";
let Confirpass="";


 existeUser =(usuario,contrasenia)=>{



   if(usuario=="Admin" && contrasenia=="Admin123"){
      return true
} else {return false}

}

   

    // le pedimos que ingrese su usuario
   user = prompt("Ingrese su usuario...");
   pass = prompt("Ingrese su contraseña...");

// verificamos mediante la funcion si el user y pass estan registrados , para este caso es Admin y Admin123
  if(existeUser(user,pass)){

   alert("Bienvenido al Chori Ahumado");
   conrador=3;
  } else {

   let contadorIntento=0;
   let cantidadIntento=3;


   // le informamos que debe generar user y pass para ingresar , maximo 3 intentos
   while (contadorIntento<cantidadIntento) {
   user = prompt("Debe registrar su Usuario . USUARIO");
   pass = prompt("Debe registrar su contraseña . Contraseña");
   Confirpass = prompt("Confirme su contraseña . Contraseña");

   
      
   // verificamos la confimacion de la pass , en caso de que coincidan ingresa y terminamos 
   if (pass==Confirpass) {

      alert("Bienvenido al Chori Ahumado");
      break;
      
   } else {
      alert("su contraseña no coinciden ");
      contadorIntento++;
   }

   if (contadorIntento==3) {
      alert ("Agoto sus intentos para loguearse , intente mas tarde ...");
      
   }

}

  

}



 */







//Declaramos un array de productos para almacenar objetos esto es para el segundo entregable

//

// seteamos el iva a todos los precios de los productos

/* 


for (const producto1 of productos) {
   producto1.sumaIva();
}


// declaramos dos variables para que tomen accion para que como maximo pueda equivocarce 3 veces a la hora de seleccionar 
let contador = 0;
var intentos = 3;
let index= -1;
let descripcionProducto="";
let cantidad =0;
let pro="";




 
while (contador<intentos) {

   contador++;
   // preguntamos el producto que quiere comprar , por ahora solo puede comprar solo u tipo de producto jajaja
   
    descripcionProducto=prompt("Que producto desea comprar  ? \n LOMO  \n PIZZA \n CHORI \n HAMBURGUESA")
 


   // verificamos si el producto indicado existe 
  index=productos.findIndex(pr => pr.descripcion == descripcionProducto);

 console.log(productos);

    
   if (parseInt(index) == -1) {
      alert("El producto indicado nop existe ");

   } else {


       cantidad = parseInt(prompt("Digame la cantidad del producto Indicado"));
      // verificamos si la cantidad es un numero 
      if (cantidad <= 1) {
         alert("La cantidad debe ser un numero Mayor o igual que 1 (uno)");


      } else {

         let tipoPago = parseInt(prompt("Indique la modalidad de pago \n 1 - Efectivo \n 2 - Debito \n 3 - T/Credito"))
         let Efectivo=0;
         let porcentaje=0;

        
         switch (tipoPago) {
            case 1:
             Efectivo= parseInt(prompt("Con Cuanto va a pagar"));              
               break;

               case 2: alert("Compra con Debito tendra un Recargo del 2 %");
               porcentaje=2;
               break;

               case 3: alert("Compra con Debito tendra un Recargo del 5 %");
               porcentaje=5;
               break;

              
            default:
               break;
         }

 let precio=productos[index].precio ;



      let precioFinal1=precioFinal(precio,porcentaje) ;

    

      

       alert("El monto total de la compra es $" + precioFinal1*cantidad );

          	
        confirmacion=confirm("Esta seguro de gerar la compra ?");
        

        if (confirmacion){
         alert("Muchas gracias por su compra ");
         contador=3;
        } else {
       alert("Lamentamos que no se haya decidido en realizar la compra ,  Lo esperamos pronto nuevamente !!");
        contador=3;
        }

      }
   }
 
}
 */

let arra =[1,2,3]
arra[10]='hello';
alert(arra.length)