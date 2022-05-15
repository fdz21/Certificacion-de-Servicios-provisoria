"use strict";

// Funciones

function rellenarObservacion(observacion){
    if (observacion == "") {
        observacion = "--------------------";
        return observacion;
    }
}

function codigoCargos(tdCargo){
    if (tdCargo.textContent == "directora" || tdCargo.textContent == "Directora" || tdCargo.textContent == "DIRECTORA"){
           tdCargo.textContent = `13150 - ${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent == "vicedirectora" || tdCargo.textContent == "Vicedirectora" || tdCargo.textContent == "VICEDIRECTORA"){     
           tdCargo.textContent = `13165 - ${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent == "secretaria" || tdCargo.textContent == "Secretaria" || tdCargo.textContent == "SECRETARIA"){     
           tdCargo.textContent = `13310 - ${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent == "preceptora" || tdCargo.textContent == "Preceptora" || tdCargo.textContent == "PRECEPTORA"){     
           tdCargo.textContent = `13520 - ${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent == "preceptor" || tdCargo.textContent == "Preceptor" || tdCargo.textContent == "PRECEPTOR"){     
           tdCargo.textContent = `13520 - ${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent == "cargo" || tdCargo.textContent == "Cargo" || tdCargo.textContent == "CARGO"){     
           tdCargo.textContent = `${tdCargo.textContent}`;
       }
     else if (tdCargo.textContent != "cargo" || tdCargo.textContent != "Cargo" || tdCargo.textContent != "CARGO"){     
           tdCargo.textContent = `13910 - ${tdCargo.textContent}`;
       }
   }

function resolucionCargo(tdCargo){
    if (tdCargo == "cargo" || tdCargo == "Cargo" || tdCargo == "CARGO"){
     
      resolucion = "";
  }  
    } 
       