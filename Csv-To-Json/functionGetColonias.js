// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------

 
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./Converter/Colonias2.json");
const jsonCompletFilePath = path.join(__dirname, "./ConverterComplet/Colonias2.json");
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));



const getLatLong = async () => {
    for (let i = 1447; i < jsonFile.length; i++) {

        try{
      
            const response = await fetch(`https://www.heraldo.com.mx/queretaro/queretaro/${jsonFile[i].CodigoPostal}/${jsonFile[i].DescripcionColonia}/`);
            const datosBase = await response.text();
        
            //console.log(datosBase)
            
            let n = datosBase.search("center:");
            // console.log(datosBase[n]);
            let longitud = "";
            let latitud = "";
        
            let j = n + 9 ;
            while (datosBase[j] !== ',') {
            longitud += datosBase[j];
            // console.log(datosBase[i])
            j++;
            }

            j++;

            while (datosBase[j] !== ']') {
            latitud += datosBase[j];
            // console.log(datosBase[i])
            j++;
            }

            const newLat = parseFloat(longitud);
            const newLong = parseFloat(latitud);

            //console.log(newLat);
            //console.log(newLong);

            jsonFile[i].latitud = newLat;
            jsonFile[i].longitud = newLong;

            fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
            fs.appendFileSync(jsonCompletFilePath, ",");

        } catch (error) {

            return console.log(error);
        }
        
          
    }
  };

  getLatLong();