// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

// Funcion para sacar la latitud y la longitud de cada ------- COLONIA ------
/** 
 * 
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./Converter/colonias.json");
const jsonCompletFilePath = path.join(__dirname, "./ConverterComplet/Colonias.json");
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));



const getLatLong = async () => {
  for (let i = 1500 ; i < jsonFile.length ; i++) {
    try{
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=colonia ${jsonFile[i].DescripcionColonia}, Santiago de Queretaro, Qro.&key=AIzaSyD1Ib8EJd24LI8wb7D_fgt_dTFKKPW8ABY`);
      
      // console.log(response.data.results[0].geometry.location);
      jsonFile[i].latitud = response.data.results[0].geometry.location.lat;
      jsonFile[i].longitud = response.data.results[0].geometry.location.lng;
      fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
      fs.appendFileSync(jsonCompletFilePath,',');

      } catch (error) {

        return console.log(error);

    }
  }

}
*/




// Funcion para sacar la latitud y la longitud de cada ------- Secundaria ------
/*
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./Converter/Secundaria.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "./ConverterComplet/Secundaria.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong = async () => {
  for (let i = 0; i < jsonFile.length; i++) {

    
        const response = await fetch(`http://www.mejoratuescuela.org/escuelas/index/${jsonFile[i].ClaveEscuela}`);
        const datosBase = await response.text();

        
        let n = datosBase.search("latitud");
        // console.log(datosBase[n]);
        let longitud = "";
        let latitud = "";

        for (let j = n + 10; j < n + 19; j++) {
          longitud += datosBase[j];
          // console.log(datosBase[i])
        }

        for (let j = n + 33; j < n + 44; j++) {
          latitud += datosBase[j];
          // console.log(datosBase[i])
        }
        const newLat = parseFloat(longitud);
        const newLong = parseFloat(latitud);

        // console.log(newLong);
        // console.log(newLat);

        jsonFile[i].latitud = newLat;
        jsonFile[i].longitud = newLong;
        jsonFile[i].nivelEscolar = "secundaria";

        fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
        fs.appendFileSync(jsonCompletFilePath, ",");
      
        
  }
};

 */



// Funcion para sacar la latitud y la longitud de cada ------- Preparatoria ------
/*
// Leyendo archivos
const jsonFilePath = path.join(__dirname, "./Converter/Preparatoria.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "./ConverterComplet/Preparatoria.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong = async () => {
  for (let i = 0; i < jsonFile.length ; i++) {

    
        const response = await fetch(`https://escuelasmex.com/directorio/${jsonFile[i].ClaveEscuela}`);
        const datosBase = await response.text();

        // console.log(`https://escuelasmex.com/directorio/${jsonFile[i].ClaveEscuela}`)
        
        let n = datosBase.search("Latitud,");
        // console.log(datosBase[n]);
        let longitud = "";
        let latitud = "";

        for (let j = n + 68; j < n + 77; j++) {
          longitud += datosBase[j];
          // console.log(datosBase[i])
        }


        for (let j = n + 80; j < n + 90; j++) {
          latitud += datosBase[j];
          // console.log(datosBase[i])
        }

        const newLat = parseFloat(longitud);
        const newLong = parseFloat(latitud);

        // console.log(newLong);
        // console.log(newLat);

        jsonFile[i].latitud = newLat;
        jsonFile[i].longitud = newLong;
        jsonFile[i].nivelEscolar = "preparatoria";

        fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
        fs.appendFileSync(jsonCompletFilePath, ",");
      
        
  }
};

*/

// Funcion para sacar la latitud y la longitud de cada ------- Licenciaturas ------

// Leyendo archivos
const keyFilePath = path.join(__dirname, "keys/apiGeocode.txt");
const keyFile = fs.readFileSync(keyFilePath, "utf-8");
const jsonFilePath = path.join(__dirname, "./Converter/Licenciatuaras.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "./ConverterComplet/Licenciaturas.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong = async () => {
  for (let i = 0; i < jsonFile.length ; i++) {
    
    try{
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${jsonFile[i].Nombre}, Qro.&key=${keyFile}`);
      
      console.log(response.data.results[0].geometry.location);
      /*
      jsonFile[i].latitud = response.data.results[0].geometry.location.lat;
      jsonFile[i].longitud = response.data.results[0].geometry.location.lng;
      jsonFile[i].nivelEscolar = "licenciatura";
      fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
      fs.appendFileSync(jsonCompletFilePath,',');
      */

      } catch (error) {

        return console.log(error);

    }
  } 
        
  };











getLatLong();


