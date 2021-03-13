const name = document.getElementById("name");
const questionarea = document.getElementById("question");
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");

window.addEventListener('load', () => {
    alertify.prompt('Please Enter Your Name', '', function (evt, value) {
        name.innerHTML = value;
        getQuestions();
    });

});

function getQuestions() {
  let URL = "/getQuestions";
  fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
      if (jsObject.length == 0) {
        console.log("NO RESULTS");
      } else {
		question(jsObject);
      }
    });
}

function question (jsObject) {
    console.log(jsObject);
    console.log(jsObject.results[3].question);
    questionarea.innerHTML = jsObject.results[3].question;
    n = Math.floor(Math.random() * (4 - 0));
    const answerChoices = [...jsObject.results[3].incorrect_answers];
    answerChoices.splice(n, 0, jsObject.results[3].correct_answer);
        a1.innerHTML = answerChoices[0];
        b1.innerHTML = answerChoices[1];
        c1.innerHTML = answerChoices[2];
        d1.innerHTML = answerChoices[3];   
}


