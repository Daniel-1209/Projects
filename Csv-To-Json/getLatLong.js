// Requirimiento de los modulos

const axios = require("axios");
const fetch = require("node-fetch");

// Funcion para sacar la latitud y la longitud
let colonias = [
  {
    No: "1",
    DescripcionColonia: "ACUEDUCTO",
    ClaveDelegacion: "CH",
    DescripcionDelegacion: "CENTRO HISTORICO",
    CodigoPostal: "76020",
  },
];

function getLatLong() {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=colonia ${colonias[0].DescripcionColonia}, ${colonias[0].DescripcionDelegacion},Queretaro&key=`
    )
    .then((response) => {
      console.log(response.data.results[0].geometry.location);
      colonias[0].latitud = response.data.results[0].geometry.location.lat;
      colonias[0].longitud = response.data.results[0].geometry.location.lng;
      console.log(colonias);
    });
}

getLatLong();
