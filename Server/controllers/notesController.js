const Note = require('../models/note')


const fetchNotes = async (req, res) => {
    //Find the notes
    const notes = await Note.find();
    //Respond with them
    res.json({ notes });
  }

 const fetchNote = async (req, res) => {
    //Get id off the url
    const noteId = req.params.id;
    // Find the note using that is
    const note = await Note.findById(noteId);
    // Respond with the note
    res.json({ note});
  }

  const createNote = async (req, res) => {
    // get the sent in data off request body
    const {title, body}= req.body;
    //const title = req.body.title;
    //const body = req.body.body;

    // Create an note with it
    const note = await Note.create({
      title, //title which has a request title
      body // body which has a request body
    });
    // response with the new note
    res.json({ note });
  }

  const updateNote = async (req, res) => {
    //Get the id off the url
    const noteId = req.params.id;
  
    //Get the data off the req body
    const {title, body}= req.body;
    //const title = req.body.title;
    //const body = req.body.body;
  
    //Find and update the record
    await Note.findByIdAndUpdate(noteId, {
      title,
      body,
    });
    //Find update note
    const note = await Note.findById(noteId);
    //Respond with it
    res.json({ note });
  };
  
  const deleteNote = async(req, res)=>{
      // get id off url
      const noteId = req.params.id
      // Delete the record
      await Note.deleteOne({id: noteId});
      //respond
      res.json({success:'Record Deleted'})
  };

  module.exports ={
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote

  }