// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------

// Leyendo archivos
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/ColoniasConvinadas.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonCompletFilePath, "utf-8"));

const urlCity = "https://wobz-goberment-cms.uw.r.appspot.com/api/cities";

const getLatLong = async () => {
  for (let i = 1237; i < jsonFile.length; i++) {
    try {
      const newColonia = {
        data: {
          name: jsonFile[i].DescripcionColonia,
          locality_key: jsonFile[i].ClaveDelegacion,
          locality_name: jsonFile[i].DescripcionDelegacion,
          postal_code_address: jsonFile[i].CodigoPostal,
          latitude_address: jsonFile[i].latitud,
          longitude_address: jsonFile[i].longitud,
        },
      };

      console.log(i);

      const response = await axios.post(urlCity, newColonia);
      //console.log(response);
    } catch (error) {
      return console.log(error);
    }
  }
};

getLatLong();
