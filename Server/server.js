// Load .env variable
require('dotenv').config();

//Import dependencies
const express = require('express');
const cors = require('cors')
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController')

//Create an express app
const app = express();

// Confifure express app
app.use(express.json()); //make read json from request body
app.use(cors());

//Connect to database
connectToDb();

//Routing
app.get('/notes', notesController.fetchNotes);
app.get('/notes/:id',notesController.fetchNote);
app.post('/notes', notesController.createNote);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote)

const PORT = process.env.PORT || 3000;


//Stat our server
//app.listen(process.env.PORT);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });