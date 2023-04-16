const express = require('express');
const db = require("./config/db");
const colors = require("colors");

// connect to mysql server and access agent_portalDB
db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log(`MySQL Connected...`.blue.underline)
});

// initialize and instance of express
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/agents', require('./routes/agentsRoutes'));
// app.use('/prospects', require('./routes/prospects'));

app.listen('3000', () => {
  console.log(`Server started on port 3000`.yellow.underline)
})