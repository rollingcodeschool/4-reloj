setInterval(() => {
  let fecha = new Date();
  let semanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  let fechaReloj = document.getElementById("fecha");
  fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  // arreglar los valores de un digito
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let horas = fecha.getHours();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  let horaReloj = document.querySelector("#hora");
  horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);
