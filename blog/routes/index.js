var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //var supplies=['1','2','3'];
  res.render('index', { title: 'Express' });

});

router.get('/new', function(req, res, next) {
  //res.render('index', { title: 'new' });
  res.send('hello wrold!');
});

router.get('/reg', function(req, res) {
    //res.render('index', { title: 'Express' });
    res.render('reg',{title:'注册'});
});
router.get('/login', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.render('login',{title:'登录'});
});

module.exports = router;
