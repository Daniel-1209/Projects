// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");


// Leyendo archivos --------- Licenciatura
/*
const jsonFileOnePath = path.join(__dirname, "../Converter/LicenciaturaValidados00.json");
const jsonFilePath = path.join(__dirname, "../ConverterComplet/LicenciaturaValidados01.json");
const jsonLowerPath = path.join(__dirname, "../JsonStrapi/ColoniasLower.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/LicenciaturaValidados02.json"
);

// Convirtiendolo para poder usarlo
const jsonFileOne = JSON.parse(fs.readFileSync(jsonFileOnePath, "utf-8"));
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonLower = JSON.parse(fs.readFileSync(jsonLowerPath, "utf-8"));

const getLatLong =  () => {
  for (let i = 0; i < jsonFile.length ; i++) {
        // console.log(jsonFile[i]);
        jsonFile[i].Colonia = jsonFileOne[i].Colonia;

        for( let j = 0; j < jsonLower.length; j++ ) {

            
            
            if (jsonFile[i].Colonia === jsonLower[j].attributes.name   ){
                
                    jsonFile[i].city_id = jsonLower[j].id;
                    fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
                    fs.appendFileSync(jsonCompletFilePath,',');
                    break;

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


// Leyendo archivos ---------    Preparatoria

const jsonFileOnePath = path.join(__dirname, "../Converter/PreparatoriaValidados00.json");
const jsonFilePath = path.join(__dirname, "../ConverterComplet/PreparatoriaValidados02.json");
const jsonLowerPath = path.join(__dirname, "../JsonStrapi/ColoniasLower.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/PreparatoriaValidados03.json"
);

// Convirtiendolo para poder usarlo
const jsonFileOne = JSON.parse(fs.readFileSync(jsonFileOnePath, "utf-8"));
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
const jsonLower = JSON.parse(fs.readFileSync(jsonLowerPath, "utf-8"));

const getLatLong =  () => {
  for (let i = 0; i < jsonFile.length ; i++) {
        // console.log(jsonFile[i]);
        jsonFile[i].Colonia = jsonFileOne[i].Colonia;

        for( let j = 0; j < jsonLower.length; j++ ) {

            
            
            if (jsonFile[i].Colonia === jsonLower[j].attributes.name   ){
                
                    jsonFile[i].city_id = jsonLower[j].id;
                    fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
                    fs.appendFileSync(jsonCompletFilePath,',');
                    break;

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
