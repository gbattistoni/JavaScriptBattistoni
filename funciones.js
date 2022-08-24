let   paso = 0;
    function candidades(producto) {

 
        let listaCantidad = document.getElementById(producto);
      
         // habilitamos el btn para confirmar la agregar al carrito , utilizando operador ternario
      
        paso === 0
      
          optionCantidad=optionCantidad+" <option value=0></option>" 
          for (let i = 1; i < 11; i++) {
      
            optionCantidad = optionCantidad + " <option value=" + i + ">" + i + "</option>"
      
          }
         
      
        
      
        listaCantidad.innerHTML = optionCantidad;
      
        document.getElementById(producto).style.display = "block"; // show
        document.getElementById(producto + "Label").style.display = "block"; // show
      
        paso = 1;
      
      }


 