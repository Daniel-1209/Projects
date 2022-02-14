// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------

// Leyendo archivos
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/Preparatoria.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonCompletFilePath, "utf-8"));

const urlSchool = "https://wobz-goberment-cms.uw.r.appspot.com/api/schools";

const getLatLong = async () => {
  for (let i = 0 ; i < jsonFile.length ; i++) {
    try {
      const newScholl = {
        data: {
          name: jsonFile[i].Nombre,
          gob_key: jsonFile[i].ClaveEscuela,
          rector_name: jsonFile[i].Director,
          phone_number: jsonFile[i].Telefono,
          street_address: jsonFile[i].Calle,
          state_address: jsonFile[i].Estado,
          city_address: jsonFile[i].Colonia,
          locality_address: jsonFile[i].Delegacion,
          municipality_address: jsonFile[i].Municipio,
          latitude_address: jsonFile[i].latitud,
          longitude_address: jsonFile[i].longitud,
          education_level: jsonFile[i].nivelEscolar,
          email: jsonFile[i].CorreoElectronico,
        },
      };

      console.log(i);

       const response = await axios.post(urlSchool, newScholl);
      //console.log(response);
    } catch (error) {
      return console.log(error);
    }
  }
};

getLatLong();
