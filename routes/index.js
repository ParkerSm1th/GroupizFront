const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/:quizCode', (req, res) => {
  console.log('Request for quiz page recieved: ' + req.params.quizCode);
  res.render('quiz', {quizCode: req.params.quizCode});
});




module.exports = router;