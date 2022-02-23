require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const commandLineInput = yargs(hideBin(process.argv)).argv;

const { Movie }= require("./models/models");
const connection = require("./db/connection");
const { addMovie, listMovies } = require("./utils/index");

const app = async (commandLineInput) => {
    try {
        await connection.authenticate();
    } catch (error) {
        console.log(error);
    }

    try {
        if (commandLineInput.add) {
            await Movie.sync({alter: true});
            await addMovie(
                {
                    title: commandLineInput.title, 
                    actor: commandLineInput.actor,
                    rating: commandLineInput.rating
                }); 
        } else if (commandLineInput.list) {
            await listMovies();
        }
        connection.close();
        process.exit();
    } catch (error) {
        console.log(error)
    }
};


app(commandLineInput); //pass arguments of command line into function

//terminal:
//node app.js --cheese //returns object. --arg 
//{ _: [], cheese: true, '$0', 'app.js' }
//node app.js --cheese "cheddar"
//{ _: [], cheese: "cheddar", '$0', 'app.js' }
//node app.js --cheese "cheddar" --pickle
//{ _: [], cheese: "cheddar", pickle: true, '$0', 'app.js' }

//node app.js --add --movie --title="jaws" --actor="roy" --rating="10"