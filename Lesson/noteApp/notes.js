const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("New note added"));
    saveNotes(notes);
  } else {
    console.log(
      chalk.red.inverse("This title has been used before. Note cannot be added")
    );
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(
      chalk.red.inverse("The note you wanted to delete was not found")
    );
  }
};

const loadNotes = function () {
  try {
    // read from file
    const dataBuffer = fs.readFileSync("notes.json");
    // Convert to JSON format
    const dataJSON = dataBuffer.toString();
    // Parse the string and return
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes, // sağ kısımdaki kısm ile bu dosyadaki kısım eşleşmeli
  addNote: addNote, // sol kısım ise başka dosyalarda kullanmak üzere isimlendirilir.
  removeNote: removeNote,
};
