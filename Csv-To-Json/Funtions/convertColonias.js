// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------

 
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./Converter/colonias.json");
const jsonCompletFilePath = path.join(__dirname, "./Converter/Colonias2.json");
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));



const getLatLong = () => {
  for (let i = 0 ; i < jsonFile.length ; i++) {
   
      
      // console.log(response.data.results[0].geometry.location);
        let actualString =  jsonFile[i].DescripcionColonia.toLowerCase();
        // console.log(actualString);

        let newStri = actualString.replace(/\s+/g, '-');
         

        jsonFile[i].DescripcionColonia = newStri.replace(/\./g, '') ;

         fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
         fs.appendFileSync(jsonCompletFilePath,',');

  }

}


getLatLong();