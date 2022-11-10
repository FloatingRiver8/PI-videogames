const { Videogame, Genre } = require("../../db.js");
const axios = require("axios");
const { API_KEY } = process.env;
const { Sequelize } = require("sequelize");
const { response } = require("express");

const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getApiInfo = async () => {
  const apiResponse = []; //array de promesas

  for (let i = 1; i <= 5; i++) {
    apiResponse.push(
      await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
    );
  }

  return Promise.all(apiResponse).then((response) => {
    const pages = [0, 1, 2, 3, 4].map(function (r) {
      return response[r].data.results;
    });

    let resultado = [];

    pages.map((p) => {
      p.forEach((vg) => {
        resultado.push({
          id: vg.id,
          name: vg.name,
          image: vg.background_image,
          rating: vg.rating,
          genres: vg.genres.map((g) => g.name),
          platforms: vg.platforms.map((e) => e.platform.name),
        });
      });
    });
    console.log(resultado);
  });
};

/*                         
for(let i = 0; i < pages.length; i++) {

pages[i].forEach(vg => {
    result.push({
    id: vg.id,
    name: vg.name,
    released: vg.released,
    image: vg.background_image,
    rating: vg.rating,
    genres: vg.genres.map(g => g.name),
    platforms: vg.platforms.map(e => e.platform.name),

    })
})

 */

module.exports = {
  getApiInfo,
};
