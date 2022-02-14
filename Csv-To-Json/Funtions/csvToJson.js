
// Requirimiento de las funciones

const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");



// Routes of archives -> Colonias    ----------------------------------------------------------------------------------------------------
/**
const csvFilePath = path.join(__dirname, "./Csv/Colonias.csv");
const jsonFilePath = path.join(__dirname, "./Converter/colonias.json");
const jsonFile = fs.readFileSync(csvFilePath, "binary");

// Funtion of make csv to json

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonFile)

     fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, " "));
    // fs.writeFileSync(csvFilePath,jsonFile);

    console.log("Archivo Creado");
  });
 
*/


// Routes of archives -> Secundaria    ----------------------------------------------------------------------------------------------------
/*
const csvFilePath = path.join(__dirname, "./Csv/Secundaria.csv");
const jsonFilePath = path.join(__dirname, "./Converter/Secundaria.json");
const jsonFile = fs.readFileSync(csvFilePath, "binary");

// Funtion of make csv to json

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonFile)

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, " "));
    // fs.writeFileSync(csvFilePath,jsonFile);

    console.log("Archivo Creado");
  });

*/


  // Routes of archives -> Preparatoria    ----------------------------------------------------------------------------------------------------
/**  
const csvFilePath = path.join(__dirname, "./Csv/Preparatoria.csv");
const jsonFilePath = path.join(__dirname, "./Converter/Preparatoria.json");
const jsonFile = fs.readFileSync(csvFilePath, "binary");

// Funtion of make csv to json

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonFile)

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, " "));
    // fs.writeFileSync(csvFilePath,jsonFile);

    console.log("Archivo Creado");
  });
*/



// Routes of archives -> Licenciaturas    ----------------------------------------------------------------------------------------------------
/**
const csvFilePath = path.join(__dirname, "./Csv/Licenciatuaras.csv");
const jsonFilePath = path.join(__dirname, "./Converter/Licenciatuaras.json");
const jsonFile = fs.readFileSync(csvFilePath, "latin1");

// Funtion of make csv to json

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonFile)

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, " "));
    // fs.writeFileSync(csvFilePath,jsonFile);

    console.log("Archivo Creado");
  });

 */


  
// Routes of archives -> Licenciaturas Validados    ----------------------------------------------------------------------------------------------------

const csvFilePath = path.join(__dirname, "./Csv/LicenciaturaValidados00.csv");
const jsonFilePath = path.join(__dirname, "./Converter/LicenciaturaValidados00.json");
const jsonFile = fs.readFileSync(csvFilePath, "latin1");

// Funtion of make csv to json

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonFile)

     fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, " "));
    // fs.writeFileSync(csvFilePath,jsonFile);

    console.log("Archivo Creado");
  });

 