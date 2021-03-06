module.exports = function(app) {
    app.get('postage', calculateRate);
};


function calculateRate(request, response) {
  const weight = request.query.weight;
  const type = request.query.type;
  console.log(weight);
  console.log(type);

  const rates = [{
    "type": 1,
    "weight": 1,
    "name" : "Letter - Stamped",
    "rate" : .55
}, {
  "type": 1,
  "weight": 2,
  "name" : "Letter - Stamped",
  "rate" : .75
}, {
  "type": 1,
  "weight": 3,
  "name" : "Letter - Stamped",
  "rate" : .95
}, {
  "type": 1,
  "weight": 3.5,
  "name" : "Letter - Stamped",
  "rate" : 1.15
}, {
  "type": 2,
  "weight": 1,
  "name" : "Letter - Metered",
  "rate" : .51
}, {
"type": 2,
"weight": 2,
"name" : "Letter - Metered",
"rate" : .71
}, {
"type": 2,
"weight": 3,
"name" : "Letter - Metered",
"rate" : .91
}, {
"type": 2,
"weight": 3.5,
"name" : "Letter - Metered",
"rate" : 1.11
}, {
  "type": 3,
  "weight": 1,
  "name" : "Large Envelopes - Flats",
  "rate" : 1.00
}, {
"type": 3,
"weight": 2,
"name" : "Large Envelopes - Flats",
"rate" : 1.20
}, {
"type": 3,
"weight": 3,
"name" : "Large Envelopes - Flats",
"rate" : 1.40
}, {
"type": 3,
"weight": 3.5,
"name" : "Large Envelopes - Flats",
"rate" : 1.60
}, {
"type": 3,
"weight": 4,
"name" : "Large Envelopes - Flats",
"rate" : 1.60
}, {
"type": 3,
"weight": 5,
"name" : "Large Envelopes - Flats",
"rate" : 1.80
}, {
"type": 3,
"weight": 6,
"name" : "Large Envelopes - Flats",
"rate" : 2.00
}, {
"type": 3,
"weight": 7,
"name" : "Large Envelopes - Flats",
"rate" : 2.20
}, {
"type": 3,
"weight": 8,
"name" : "Large Envelopes - Flats",
"rate" : 2.40
}, {
"type": 3,
"weight": 9,
"name" : "Large Envelopes - Flats",
"rate" : 2.60
}, {
"type": 3,
"weight": 10,
"name" : "Large Envelopes - Flats",
"rate" : 2.80
}, {
"type": 3,
"weight": 11,
"name" : "Large Envelopes - Flats",
"rate" : 3.00
}, {
"type": 3,
"weight": 12,
"name" : "Large Envelopes - Flats",
"rate" : 3.20
}, {
"type": 3,
"weight": 13,
"name" : "Large Envelopes - Flats",
"rate" : 3.40
},{
  "type": 4,
  "weight": 1,
  "name" : "First-Class Package",
  "rate" : 4.00
}, {
"type": 4,
"weight": 2,
"name" : "First-Class Package",
"rate" : 4.00
}, {
"type": 4,
"weight": 3,
"name" : "First-Class Package",
"rate" : 4.00
}, {
"type": 4,
"weight": 3.5,
"name" : "First-Class Package",
"rate" : 4.00
}, {
"type": 4,
"weight": 4,
"name" : "First-Class Package",
"rate" : 4.00
}, {
"type": 4,
"weight": 5,
"name" : "First-Class Package",
"rate" : 4.80
}, {
"type": 4,
"weight": 6,
"name" : "First-Class Package",
"rate" : 4.80
}, {
"type": 4,
"weight": 7,
"name" : "First-Class Package",
"rate" : 4.80
}, {
"type": 4,
"weight": 8,
"name" : "First-Class Package",
"rate" : 4.80
}, {
"type": 4,
"weight": 9,
"name" : "First-Class Package",
"rate" : 5.50
}, {
"type": 4,
"weight": 10,
"name" : "First-Class Package",
"rate" : 5.50
}, {
"type": 4,
"weight": 11,
"name" : "First-Class Package",
"rate" : 5.50
}, {
"type": 4,
"weight": 12,
"name" : "First-Class Package",
"rate" : 5.50
}, {
"type": 4,
"weight": 13,
"name" : "First-Class Package",
"rate" : 6.25
},];

for (let i=0; i<rates.length; i++ ) {
  if (weight == rates[i].weight && type == rates[i].type) {
    let postalrate = rates[i].rate;
    let p = postalrate.toFixed(2);
    let name = rates[i].name;
    const params = {rate: p, name: name, weight: weight};
    response.render('pages/postage', params);
  }
}

}


