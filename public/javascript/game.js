const nam = document.getElementById("name");
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
let URL = "/getQuestionseasy";

window.addEventListener('load', () => {
    alertify.prompt('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/WWTBAMUS2020Logo.png/250px-WWTBAMUS2020Logo.png" alt="Who Wants To Be A Millionaire?" width="150" height="150"><br><br>Please Enter Your Name', '', function (evt, value) {
        window.name = value;
        nam.innerHTML = name;
        intro.play();
        getQuestions(i);
    });

});

function checklevel(i) {
  if (i == 8) {
       URL = "/getQuestionsmedium";
      getQuestions();
  } else if (i == 2) {
       URL = "/getQuestionshard";
      getQuestions();
  } else {
      question(json);
  }
};

function getQuestions() { 
      
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
    questionarea.innerHTML = json.results[i].question;
    n = random();
    const ac = [...json.results[i].incorrect_answers];
    window.answerChoices = (ac);
    answerChoices.splice(n, 0, json.results[i].correct_answer);
        a1.innerHTML = answerChoices[0];
        b1.innerHTML = answerChoices[1];
        c1.innerHTML = answerChoices[2];
        d1.innerHTML = answerChoices[3];   
}


function check (clickedElement) {
    const number = clickedElement.getAttribute("data-ans");
    const an = document.getElementsByClassName("button");
    const ll = document.getElementsByClassName("circle");
    const ans = an[n];
    const money = document.getElementsByClassName("money");
        if (number == n){
        lock(an);
        lock(ll);
        clickedElement.classList.remove('button');
        clickedElement.classList.add('correct');
        yes.play();
        yes.currentTime = 0;
        setTimeout(function () {
            clickedElement.classList.remove('correct');
            clickedElement.classList.add('button');
            money[i].classList.remove('highlight');
            if (i==0) {
                 alertify.alert("<img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/WWTBAMUS2020Logo.png/250px-WWTBAMUS2020Logo.png' alt='Who Wants To Be A Millionaire?' width='150' height='150'><br><br>Congratulations " + name + "!<br> You Won $1,000,000", function(){window.location.reload(true);}).set('label', 'New Game!'); 
                }
            i=i-1;
            money[i].classList.add('highlight');
            unlock(an, 'check');
            unlock(ll, 'lifeline');
            reset();
            checklevel(i);
        }, 4000);
        } else {
        no.play();
        lock(an);
        lock(ll);
        clickedElement.classList.remove('button');
        clickedElement.classList.add('wrong');
        ans.classList.remove('button');
        ans.classList.add('correct');
        const mon = document.querySelector("[data-round=" + CSS.escape(i) + "]");
        const amount = mon.dataset.wrong;
        setTimeout(function() {
            alertify.alert("<img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/WWTBAMUS2020Logo.png/250px-WWTBAMUS2020Logo.png' alt='Who Wants To Be A Millionaire?' width='150' height='150'><br><br>Game Over " + name + "!<br> You Won $" + amount +"", function(){window.location.reload(true);}).set('label', 'New Game!'); 
        }, 4000);
    }
    
}

function lifeline (click) {
    fifty.play();
    click.classList.add('hidden');
    one = generateRandom(0, 4);
    two = generateRandom(0, 4);
    const wrong = document.getElementsByClassName("button");
    wrong[one].classList.add('hidden');
    wrong[two].classList.add('hidden');
    const buttons = document.getElementsByClassName("circle");
    lock(buttons);
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
};

function quit() {
    const mon = document.querySelector("[data-round=" + CSS.escape(i) + "]");
    const amount = mon.dataset.money;
    alertify.alert("<img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/WWTBAMUS2020Logo.png/250px-WWTBAMUS2020Logo.png' alt='Who Wants To Be A Millionaire?' width='150' height='150'><br><br>Congratulations " + name + "!<br> You Won $" + amount +"", function(){window.location.reload(true);}).set('label', 'New Game!'); 
}




