


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



