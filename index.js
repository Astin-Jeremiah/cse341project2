const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

let url1 = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
let url2 = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
let url3 = "https://opentdb.com/api.php?amount=15&difficulty=hard&type=multiple";
let settings = { method: "Get" };

app.get('/getQuestionseasy', function(req, res, next) {
  fetch(url1, settings).then(res => res.json())
    .then((json) => {
      res.status(200).json(json);
  }) .catch((error) => {
      console.log(error);
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("Error Connecting To API");})
});

app.get('/getQuestionsmedium', function(req, res, next) {
  fetch(url2, settings).then(res => res.json())
    .then((json) => {
      res.status(200).json(json);
  }) .catch((error) => {
      console.log(error);
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("Error Connecting To API");})
});

app.get('/getQuestionshard', function(req, res, next) {
  fetch(url3, settings).then(res => res.json())
    .then((json) => {
      res.status(200).json(json);
  }) .catch((error) => {
      console.log(error);
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("Error Connecting To API");})
});


app.listen(port, function() {
  console.log('Node app is running on port', port);
});



