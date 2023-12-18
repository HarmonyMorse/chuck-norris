var express = require('express');
var router = express.Router();
const jokesCtrl = require('../controllers/jokes');

/* GET users listing. */
router.get('/', jokesCtrl.joke);

module.exports = router;
