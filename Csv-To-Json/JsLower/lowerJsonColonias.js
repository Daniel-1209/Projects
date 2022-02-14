// Requirimiento de los modulos
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const fetch = require("node-fetch");
const { Console } = require("console");

// Leyendo archivos
const jsonCompletFilePath = path.join(
  __dirname,
  "../JsonStrapi/ColoniasLower.json"
);

const getLatLong = async () => {

  for (let i = 1495; i < 1496; i++) {
        try {
        const response = await axios.get(
       //     `https://wobz-goberment-cms.uw.r.appspot.com/api/cities/${i}`
        );

        console.log(i);
        /*
        jsonFile[i].latitud = response.data.results[0].geometry.location.lat;
        jsonFile[i].longitud = response.data.results[0].geometry.location.lng;/
        jsonFile[i].nivelEscolar = "licenciatura";*/
        fs.appendFileSync(jsonCompletFilePath, JSON.stringify(response.data.data, null, " "));
        fs.appendFileSync(jsonCompletFilePath,',');
        
    } catch (error) {
        console.log('error');
    }
  }
};

getLatLong();
