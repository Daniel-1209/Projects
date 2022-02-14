let fetch = require("node-fetch");

let cherio = require("cheerio");
let axios = require("axios");
const fs = require("fs");
const path = require("path");
const { data } = require("cheerio/lib/api/attributes");
const { DataNode } = require("domhandler");

const dateUsersPath = path.join(__dirname, "../date/dateUsers.json");

let arre = [];

let controller = {
  form: (req, res) => {
    res.render("form", { title: "Formulario" });
  },
  found: async (req, res) => {
    // console.log(response.data);

    // http://www.mejoratuescuela.org/escuelas/index/22DTV0049Z

    const response = await fetch(
      `http://www.mejoratuescuela.org/escuelas/index/22DTV0049Z`
    );
    const datosBase = await response.text();
    
    var n = datosBase.search("latitud");
    // console.log(datosBase[n]);
    let longitud = "";
    let latitud = "";

    for (let i = n + 10; i < n + 19; i++) {
      longitud += datosBase[i];
      // console.log(datosBase[i])
    }

    for (let i = n + 33; i < n + 44; i++) {
      latitud += datosBase[i];
      // console.log(datosBase[i])
    }
    const newLong = parseFloat(longitud);
    const newLat = parseFloat(latitud);

    console.log(newLong);
    console.log(newLat);

    let data = {
      long: newLong,
      lat: newLat,
    };

    fs.writeFileSync(dateUsersPath, JSON.stringify(data));
  },
};

module.exports = controller;
