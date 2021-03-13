const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

let url = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";
let settings = { method: "Get" };

app.get('/getQuestions', function(req, res, next) {
  fetch(url, settings).then(res => res.json())
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



