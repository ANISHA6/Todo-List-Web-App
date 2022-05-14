//require the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/todos_list_db');

//now we need to define database
//acquire the connection (to check if it is successful)
//db gives us connection to database
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});

//now, include this file, when firing up the server