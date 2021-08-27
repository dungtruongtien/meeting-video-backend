require('dotenv').config();
const cors = require('cors');
const http = require('http');
const express = require('express');
// const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

// app.use('/', express.static(`${__dirname}/../client/dist`));

app.use(cors({}));

server.listen(process.env.PORT, () => {
  socket(server);
  console.log('Server is listening at :', process.env.PORT);
});
