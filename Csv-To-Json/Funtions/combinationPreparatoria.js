// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

// Leyendo archivos
const jsonFilePath = path.join(
  __dirname,
  "../Converter/PreparatoriaValidados00.json"
);
const jsonFilePath2 = path.join(
  __dirname,
  "../ConverterComplet/PreparatoriaValidados03.json"
);
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/PreparatoriaValidados04.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonFile2 = JSON.parse(fs.readFileSync(jsonFilePath2, "utf-8"));

const comobination = () => {
  for (let i = 0; i < jsonFile.length; i++) {

    
        jsonFile[i].id = jsonFile2[i].id;
        jsonFile[i].latitud = jsonFile2[i].latitud;
        jsonFile[i].longitud = jsonFile2[i].longitud;
        jsonFile[i].locality_id = jsonFile2[i].locality_id;
        jsonFile[i].city_id = jsonFile2[i].city_id;
        jsonFile[i].school_id = jsonFile2[i].school_id;
    

        fs.appendFileSync(
        jsonCompletFilePath,
        JSON.stringify(jsonFile[i], null, " ")
        );
        fs.appendFileSync(jsonCompletFilePath, ",");
  }
};

comobination();
