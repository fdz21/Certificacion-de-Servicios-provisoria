"use strict";

// Funciones

function calcularDias(fechaAlta, fechaBaja) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date (fechaBaja);

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return dias;
}

function calcularDiasHoy(fechaAlta) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date ();

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return dias;
}

function calcularMeses(fechaAlta, fechaBaja) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date (fechaBaja);

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return meses;
}
function calcularMesesHoy(fechaAlta) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date ();

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return meses;
}

function calcularYears(fechaAlta, fechaBaja) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date (fechaBaja);

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return years;
}
function calcularYearsHoy(fechaAlta) {
  
  let fecha1 = new Date (fechaAlta);
  let fecha2 = new Date ();

  if (fecha2 - fecha1 < 0) return;
    let dias = fecha2.getUTCDate() - fecha1.getUTCDate();
    let meses = fecha2.getUTCMonth() - fecha1.getUTCMonth();
    let years = fecha2.getUTCFullYear() - fecha1.getUTCFullYear();

  if(dias < 0) {
    meses--;
    dias = 30 + dias;
  }
  if(meses < 0) {
    years--;
    meses = 12 + meses;
  }
  return years;
}