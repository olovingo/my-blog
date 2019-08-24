var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/books');

router.post('/postLearn',bookCtrl.postLearn);
router.post('/getLearn',bookCtrl.getLearn)

module.exports = router;