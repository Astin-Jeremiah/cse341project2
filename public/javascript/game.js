const name = document.getElementById("name");
const questionarea = document.getElementById("question");
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");
let i = 14;
let n =1;
let one = 0;
let two = 0;
const intro = new Audio('../img/start.mp3');
const fifty = new Audio('../img/life.mp3');
const yes = new Audio('../img/correct.mp3');
const no = new Audio('../img/wrong.mp3');


window.addEventListener('load', () => {
    alertify.prompt('Please Enter Your Name', '', function (evt, value) {
        name.innerHTML = value;
        intro.play();
        getQuestions(i);
    });

});

function checklevel(i) {
  if (i > 8) {
       URL = "/getQuestionseasy";
  } else if (i > 2 && i < 9 ) {
       URL = "/getQuestionsmedium";
  }  else if (i >= 2) {
       URL = "/getQuestionshard";
  }
   console.log(URL);  
};


function getQuestions() { 
  checklevel(i);    
  fetch(URL)
    .then((response) => {
      if (response.ok) {
          return response;
      } alertify.alert('Error Loading Questions');
    })
    .then ( response => response.json())
    .then((jsObject) => {
      if (jsObject.length == 0) {
        console.log("NO RESULTS");
      } else {
		window.json = (jsObject);
        question(json);
      }
    }) .catch((error) => {
      console.log(error);
      alertify.alert('Error Loading Questions');})
  };


function question (json) {
    console.log(i);
    console.log(json);
    console.log(json.results[i].question);
    questionarea.innerHTML = json.results[i].question;
    n = random();
    console.log(n);
    const ac = [...json.results[i].incorrect_answers];
    window.answerChoices = (ac);
    answerChoices.splice(n, 0, json.results[i].correct_answer);
        a1.innerHTML = answerChoices[0];
        b1.innerHTML = answerChoices[1];
        c1.innerHTML = answerChoices[2];
        d1.innerHTML = answerChoices[3];   
}

function check (clickedElement) {
    console.log(n);
    const number = clickedElement.getAttribute("data-ans");
    console.log(number);
    const an = document.getElementsByClassName("button");
    const ll = document.getElementsByClassName("circle");
    console.log(ll);
    const ans = an[n];
    console.log(an[n]);
    const money = document.getElementsByClassName("money");
    if (number == n){
        yes.play();
        lock(an);
        lock(ll);
        clickedElement.classList.remove('button');
        clickedElement.classList.add('correct');
        setTimeout(function () {
            clickedElement.classList.remove('correct');
            clickedElement.classList.add('button');
            console.log(i);
            money[i].classList.remove('highlight');
            console.log(money[i]);
            i=i-1;
            money[i].classList.add('highlight');
            console.log(i);
            console.log(money[i]);
            unlock(an, 'check');
            unlock(ll, 'lifeline');
            reset();
            getQuestions(i);
        }, 4000);
        } else {
        no.play();
        lock(an);
        lock(ll);
        clickedElement.classList.remove('button');
        clickedElement.classList.add('wrong');
        ans.classList.remove('button');
        ans.classList.add('correct');
        alertify.confirm('GAME OVER<br>More Text Here', function(){window.location.reload(true);}).set('labels', {ok:'New Game', cancel:'Cancel'});
    }
    
}

function lifeline (click) {
    fifty.play();
    click.classList.add('hidden');
    console.log(n);
    one = generateRandom(0, 4);
    two = generateRandom(0, 4);
    console.log(one);
    console.log(two);
    const wrong = document.getElementsByClassName("button");
    console.log(wrong);
    wrong[one].classList.add('hidden');
    wrong[two].classList.add('hidden');
}

function random() {
    return Math.floor(Math.random() * (4 - 0));
};
    
function generateRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min));
    return ([n, one].includes(num)) ? generateRandom(min, max) : num;
};

function lock(items) {
    for (let b = 0; b < items.length; b++) {
        items[b].setAttribute('onclick', '');
    }
};

function unlock(items, message) {
    for (let b = 0; b < items.length; b++) {
        items[b].setAttribute('onclick', message+'(this)');
    }
};

function reset() {
    const wrong = document.getElementsByClassName("button");
    wrong[one].classList.remove('hidden');
    wrong[two].classList.remove('hidden');
}







