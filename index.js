const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/postage', calcPostage);

app.listen(port, function() {
  console.log('Node app is running on port', port);
});

function calcPostage(request, response) {
  const weight = request.query.weight;
  const type = request.query.type;
  console.log(weight);
  console.log(type);

  const rates = [{
    "type": 1,
    "weight": 1,
    "rate" : .55
}, {
  "type": 1,
  "weight": 2,
  "rate" : .75
}, {
  "type": 1,
  "weight": 3,
  "rate" : .95
}, {
  "type": 1,
  "weight": 3.5,
  "rate" : 1.15
}, {
  "type": 1,
  "weight": 4,
  "rate" : 1.60
}, {
  "type": 1,
  "weight": 5,
  "rate" : 1.80
}, {
  "type": 1,
  "weight": 6,
  "rate" : 2.00
}, {
  "type": 1,
  "weight": 7,
  "rate" : 2.20
}, {
  "type": 1,
  "weight": 8,
  "rate" : 2.40
}, {
  "type": 1,
  "weight": 9,
  "rate" : 2.60
}, {
  "type": 1,
  "weight": 10,
  "rate" : 2.80
}, {
  "type": 1,
  "weight": 11,
  "rate" : 3.00
}, {
  "type": 1,
  "weight": 12,
  "rate" : 3.20
}, {
  "type": 1,
  "weight": 13,
  "rate" : 3.40
}, {
  "type": 2,
  "weight": 1,
  "rate" : .51
}, {
"type": 2,
"weight": 2,
"rate" : .71
}, {
"type": 2,
"weight": 3,
"rate" : .91
}, {
"type": 2,
"weight": 3.5,
"rate" : 1.11
}, {
"type": 2,
"weight": 4,
"rate" : 1.60
}, {
"type": 2,
"weight": 5,
"rate" : 1.80
}, {
"type": 2,
"weight": 6,
"rate" : 2.00
}, {
"type": 2,
"weight": 7,
"rate" : 2.20
}, {
"type": 2,
"weight": 8,
"rate" : 2.40
}, {
"type": 2,
"weight": 9,
"rate" : 2.60
}, {
"type": 2,
"weight": 10,
"rate" : 2.80
}, {
"type": 2,
"weight": 11,
"rate" : 3.00
}, {
"type": 2,
"weight": 12,
"rate" : 3.20
}, {
"type": 2,
"weight": 13,
"rate" : 3.40
},{
  "type": 3,
  "weight": 1,
  "rate" : 1.00
}, {
"type": 3,
"weight": 2,
"rate" : 1.20
}, {
"type": 3,
"weight": 3,
"rate" : 1.40
}, {
"type": 3,
"weight": 3.5,
"rate" : 1.60
}, {
"type": 3,
"weight": 4,
"rate" : 1.60
}, {
"type": 3,
"weight": 5,
"rate" : 1.80
}, {
"type": 3,
"weight": 6,
"rate" : 2.00
}, {
"type": 3,
"weight": 7,
"rate" : 2.20
}, {
"type": 3,
"weight": 8,
"rate" : 2.40
}, {
"type": 3,
"weight": 9,
"rate" : 2.60
}, {
"type": 3,
"weight": 10,
"rate" : 2.80
}, {
"type": 3,
"weight": 11,
"rate" : 3.00
}, {
"type": 3,
"weight": 12,
"rate" : 3.20
}, {
"type": 3,
"weight": 13,
"rate" : 3.40
},{
  "type": 4,
  "weight": 1,
  "rate" : 4.00
}, {
"type": 4,
"weight": 2,
"rate" : 4.00
}, {
"type": 4,
"weight": 3,
"rate" : 4.00
}, {
"type": 4,
"weight": 3.5,
"rate" : 4.00
}, {
"type": 4,
"weight": 4,
"rate" : 4.00
}, {
"type": 4,
"weight": 5,
"rate" : 4.80
}, {
"type": 4,
"weight": 6,
"rate" : 4.80
}, {
"type": 4,
"weight": 7,
"rate" : 4.80
}, {
"type": 4,
"weight": 8,
"rate" : 4.80
}, {
"type": 4,
"weight": 9,
"rate" : 5.50
}, {
"type": 4,
"weight": 10,
"rate" : 5.50
}, {
"type": 4,
"weight": 11,
"rate" : 5.50
}, {
"type": 4,
"weight": 12,
"rate" : 5.50
}, {
"type": 4,
"weight": 13,
"rate" : 6.25
},];

for (let i=0; i<rates.length; i++ ) {
  if (weight == rates[i].weight && type == rates[i].type) {
    let postalrate = rates[i].rate;
    let p = postalrate.toFixed(2);
    const params = {rate: p};
    response.render('pages/postage', params);
  }
}

}


