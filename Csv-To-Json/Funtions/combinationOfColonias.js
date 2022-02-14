// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

 
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./ConverterComplet/Colonias.json");
const jsonFilePath2 = path.join(__dirname, "./ConverterComplet/Colonias2.json");
const jsonCompletFilePath = path.join(__dirname, "./ConverterComplet/ColoniasConvinadas.json");
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonFile2 = JSON.parse(fs.readFileSync(jsonFilePath2, "utf-8"));


const comobination =  () => {
    for (let i = 0; i < jsonFile2.length; i++) {

        if( jsonFile2[i].latitud == null  ){

            jsonFile2[i].latitud = jsonFile[i].latitud;
            jsonFile2[i].longitud = jsonFile[i].longitud;

        }
        
        jsonFile2[i].DescripcionColonia = jsonFile[i].DescripcionColonia;
       

        fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile2[i], null, " "));
        fs.appendFileSync(jsonCompletFilePath, ",");
    }

}

comobination();