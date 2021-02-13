const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/quiz/:quizCode', (req, res) => {
  console.log('Request for quiz page recieved: ' + req.params.quizCode);
  res.render('quiz', {quizCode: req.params.quizCode});
});

router.get('/contact', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});


module.exports = router;