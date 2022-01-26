const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const knex = require('knex');
const bodyParser = require("body-parser");
const connection = require("./database/connection");
app.use("/stock", connection);
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
// add router in the Express app.
// app.use("/", router);

app.get('/', (req, res) => {
  res.send('Hello World!!')
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


