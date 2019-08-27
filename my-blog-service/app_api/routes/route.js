var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/books');

router.post('/postLearn',bookCtrl.postLearn);
router.post('/getLearn',bookCtrl.getLearn);
router.post('/newArticle',bookCtrl.newArticle);
router.post('/getArticles',bookCtrl.getArticles);
router.post('/getDetail',bookCtrl.getDetail)

module.exports = router;