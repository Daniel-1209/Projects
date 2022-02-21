// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");


// Leyendo archivos
const keyFilePath = path.join(__dirname, "../keys/apiGeocode.txt");
const keyFile = fs.readFileSync(keyFilePath, "utf-8");
const jsonFilePath = path.join(__dirname, "../Converter/LicenciaturaValidados01.json");
const jsonCompletFilePath = path.join(
  __dirname,
  "../ConverterComplet/LicenciaturaValidados00.json"
);
// Convirtiendolo para poder usarlo
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getLatLong = async () => {
  for (let i = 535; i < jsonFile.length ; i++) {
    // console.log(jsonFile[i]);
    try{
      // const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address= calle ${jsonFile[i].Calle} ${jsonFile[i].NumExt}, ${jsonFile[i].Colonia}  , Queretaro, Qro.&key=${keyFile}`);
      
      // console.log(response.data.results[0].geometry.location);
      console.log(i);
      if (jsonFile[i].NumExt === "N/A" || jsonFile[i].NumExt === "S/N" || jsonFile[i].NumExt === "SN"   ){
        fs.appendFileSync(jsonCompletFilePath,'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
      }
      
      
      jsonFile[i].latitud = response.data.results[0].geometry.location.lat;
      jsonFile[i].longitud = response.data.results[0].geometry.location.lng;
      fs.appendFileSync(jsonCompletFilePath, JSON.stringify(jsonFile[i], null, " "));
      fs.appendFileSync(jsonCompletFilePath,',');
      

      } catch (error) {

        return console.log(error);

    }
  } 
        
  };











getLatLong();
