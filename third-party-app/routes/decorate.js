const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const response = {
    value: req.body.text,
    timestamp: new Date()
  };
  res.send(response).status(200);
});

module.exports = router;
