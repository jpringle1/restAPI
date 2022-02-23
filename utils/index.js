const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models")

const addMovie = async (movieObj) => { //add movie to database
    const movie = await Movie.create(movieObj)  //create movie object
    console.log(`We added ${movie.title}`)
}

const listMovies = async () => {
    const movies = await Movie.findAll({});
    console.log("movie list - ", JSON.stringify(movies, null, 2)) //this line helps clean up movies output. makes each item in array conform to format we created in "movie" object in "models".
}

module.exports = {
    addMovie,
    listMovies
}



//make update function and delete function.
//experiment with getters and setters. if put something in db uppercase, set to lowercase