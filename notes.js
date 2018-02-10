console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
};

var getAll = () => {
    console.log("All notes: ", );
};

var getNote = (title) => {
    console.log('Getting note: ', title);
};

var removeNote = (title) => {
    console.log('Deleting note: ', title);
};

module.exports = {
    addNote, //Identical to addNote: addNote
    getAll,
    getNote,
    removeNote
};