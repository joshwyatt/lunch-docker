'use strict';
const express = require('express');
const redis = require('redis');

let client = redis.createClient(6379, '172.17.0.3');

const app = express();

app.get('/', (req, res) => {
  client.get('my-key', (err, replies) => {
    res.send(replies);
  });
});

app.listen(8000, () => {
  console.log('listening on 8000');
});



