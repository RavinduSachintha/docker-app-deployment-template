const express = require('express');
const http = require('http');
const {thirdPartyHost, thirdPartyPort} = require("../config");
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const num1 = req.body?.num1;
  const num2 = req.body?.num2;

  const data = JSON.stringify({
    text: num1 + num2
  });

  const options = {
    host: thirdPartyHost,
    port: thirdPartyPort,
    path: '/decorate',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const httpReq = http.request(options, function (response) {
    let data = null;

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      console.log("body: " + chunk);
      data = JSON.parse(chunk);
    });

    response.on('end', function() {
      res.send(data).status(200);
    });

    response.on('error', function(error) {
      res.send(error.message).status(400);
    });

  });

  httpReq.write(data);
  httpReq.end();
});

module.exports = router;
