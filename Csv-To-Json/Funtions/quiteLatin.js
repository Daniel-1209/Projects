// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");


// Leyendo archivos  ---------------  Licenciatuaras
 /*
const keyFilePath = path.join(__dirname, "../keys/apiGeocode.txt");
const keyFile = fs.readFileSync(keyFilePath, "utf-8");
const jsonFilePath = path.join(__dirname, "../Converter/LicenciaturaValidados00.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../Converter/LicenciaturaValidados01.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong =  () => {
    let palabra = '';

  for (let i = 0; i < jsonFile.length ; i++) {

        palabra = jsonFile[i].Calle;
        palabra = palabra.replace('Ñ', 'N');
        palabra = palabra.replace('Á', 'A');
        palabra = palabra.replace('É', 'E');
        palabra = palabra.replace('Í', 'I');
        palabra = palabra.replace('Ó', 'O');
        palabra = palabra.replace('Ú', 'U');
        jsonFile[i].Calle = palabra;

        palabra = jsonFile[i].Colonia;
        palabra = palabra.replace('Ñ', 'N');
        palabra = palabra.replace('Á', 'A');
        palabra = palabra.replace('É', 'E');
        palabra = palabra.replace('Í', 'I');
        palabra = palabra.replace('Ó', 'O');
        palabra = palabra.replace('Ú', 'U');
        jsonFile[i].Colonia = palabra;

        // console.log(palabra);
        jsonFile[i].id = i;
      fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
      fs.appendFileSync(jsonCompletFilePath,',');
      

      
  } 
        
  };

*/

/// --------------------------------Preparatorias

const jsonFilePath = path.join(__dirname, "../Converter/PreparatoriaValidados00.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../Converter/PreparatoriaValidados01.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong =  () => {
    let palabra = '';

  for (let i = 0; i < jsonFile.length ; i++) {

        palabra = jsonFile[i].Calle;
        palabra = palabra.replace('Ñ', 'N');
        palabra = palabra.replace('Á', 'A');
        palabra = palabra.replace('É', 'E');
        palabra = palabra.replace('Í', 'I');
        palabra = palabra.replace('Ó', 'O');
        palabra = palabra.replace('Ú', 'U');
        jsonFile[i].Calle = palabra;

        palabra = jsonFile[i].Colonia;
        palabra = palabra.replace('Ñ', 'N');
        palabra = palabra.replace('Á', 'A');
        palabra = palabra.replace('É', 'E');
        palabra = palabra.replace('Í', 'I');
        palabra = palabra.replace('Ó', 'O');
        palabra = palabra.replace('Ú', 'U');
        jsonFile[i].Colonia = palabra;

        // console.log(palabra);
        jsonFile[i].id = i;
        fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
        fs.appendFileSync(jsonCompletFilePath,',');
      

      
  } 
        
  };







getLatLong();
