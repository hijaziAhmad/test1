var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<h1>Express</h1>' });
});

// router.get('/:food/:sauce?', function(req, res, next) {
//   res.render('html/page2.ejs', { title: req.params.food+req.params.sauce });
// });

router.get('/page1', function(req, res, next) {
  res.render('html/page1.ejs', {
     title: req.query.waiter,
     lang: req.query.lang
     });
});


router.get('/app.js', function(req, res, next) {
  res.render('html/app.ejs', { title: 'page 2' });
});
module.exports = router;
