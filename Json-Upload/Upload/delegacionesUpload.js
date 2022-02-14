// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------

// Leyendo archivos
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/Delegaciones.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonCompletFilePath, "utf-8"));

const urlCity = "https://wobz-goberment-cms.uw.r.appspot.com/api/localities";

const getLatLong = async () => {
  for (let i = 0; i < 1; i++) {
    try {
      const newColonia = {
        data: {
          name: jsonFile[i].name,
          key: jsonFile[i].key,
          postal_code_address: jsonFile[i].postal_code_address,
          latitude_address: jsonFile[i].latitude_address,
          longitude_address: jsonFile[i].longitude_address,
        },
      };

      console.log(newColonia);

      const response = await axios.post(urlCity, newColonia);
      //console.log(response);
    } catch (error) {
      return console.log(error);
    }
  }
};

getLatLong();
