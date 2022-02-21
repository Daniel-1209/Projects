// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");


// Leyendo archivos ------------ Licenciaturas
/*
const jsonFilePath = path.join(__dirname, "../ConverterComplet/LicenciaturaValidados00.json");
const jsonLowerPath = path.join(__dirname, "../JsonStrapi/DelegacionesLower.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/LicenciaturaValidados01.json"
);

// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonLower = JSON.parse(fs.readFileSync(jsonLowerPath, "utf-8"));

const getLatLong =  () => {
  for (let i = 0; i < jsonFile.length ; i++) {
    // console.log(jsonFile[i]);
  
        for( let j = 0; j < jsonLower.length; j++ ) {
            if (jsonFile[i].delegacion === jsonLower[j].attributes.name   ){
                
              jsonFile[i].locality_id = jsonLower[j].id;
              fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
              fs.appendFileSync(jsonCompletFilePath,',');
              break;
                // fs.appendFileSync(jsonCompletFilePath,'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
              } else if ( j === ( jsonLower.length - 1 ) ){
                  fs.appendFileSync(jsonCompletFilePath,'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
                  jsonFile[i].locality_id = null;
                  fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
                  fs.appendFileSync(jsonCompletFilePath,',');
            } 
              
        }
     
      

      
  } 
        
  };

*/

// Leyendo archivos ---------- Preparatoria

const jsonFilePath = path.join(__dirname, "../ConverterComplet/PreparatoriaValidados01.json");
const jsonLowerPath = path.join(__dirname, "../JsonStrapi/DelegacionesLower.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/PreparatoriaValidados02.json"
);

// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonLower = JSON.parse(fs.readFileSync(jsonLowerPath, "utf-8"));

const getLatLong =  () => {
  for (let i = 0; i < jsonFile.length ; i++) {
    // console.log(jsonFile[i]);
  
        for( let j = 0; j < jsonLower.length; j++ ) {
            if (jsonFile[i].delegacion === jsonLower[j].attributes.name   ){
                
              jsonFile[i].locality_id = jsonLower[j].id;
              fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
              fs.appendFileSync(jsonCompletFilePath,',');
              break;
                // fs.appendFileSync(jsonCompletFilePath,'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
              } else if ( j === ( jsonLower.length - 1 ) ){
                  fs.appendFileSync(jsonCompletFilePath,'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
                  jsonFile[i].locality_id = null;
                  fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
                  fs.appendFileSync(jsonCompletFilePath,',');
            } 
              
        }
     
      

      
  } 
        
  };










getLatLong();
