"use strict";

function calcularResolucion(resolucion) {
    if (
      resolucion == "1A" ||
      resolucion == "1B" ||
      resolucion == "2A" ||
      resolucion == "3A"
    ) {
      const resolucion = "I 72/37";
      return resolucion;
    }
    if (resolucion == "2B") {
      const resolucion = "3244/51";
      return resolucion;
    }
    if (resolucion == "3B") {
      const resolucion = "27217/52";
      return resolucion;
    }
    if (
      resolucion == "4A" ||
      resolucion == "4B" ||
      resolucion == "5A" ||
      resolucion == "5B" ||
      resolucion == "6A" ||
      resolucion == "6B"
    ) {
      const resolucion = "240/70";
      return resolucion;
    }
    else {
        const resolucion = "----------";
        return resolucion;
    }
  }