const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors")
const sqlite3 = require('sqlite3').verbose();
const request = require('request');

app.use(cors());

// open database in memory
let db = new sqlite3.Database('C:/sqlite/db/chinook.db', sqlite3.OPEN_READWRITE ,(err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the chinook SQlite database.');
});

//Reading the database

let items=[];

db.serialize(() => {
    db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
      // res.send(row);
      items.push(row);
    //   console.log(items);
    });
  });


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});


app.get('/', (req, res) => {
   res.send(items);
  // res.send("Hello");
})

app.get('/home', function(req, res) {
  request('http://127.0.0.1:8080/flask', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })
