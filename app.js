'use strict';

require('dotenv').config();

const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response, next) => {
  response.status(200).send('This is live.');
});

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
    })
  }
}

