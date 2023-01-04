var quizArr = [
  {
    //1
    question: "Which is a coding language?",
    answer: {
      Windows: false,
      "Cascading Style Sheet": true,
      Index: false,
      Element: false,
    },
  },
  {
    //2
    question: "Where do you code?",
    answer: {
      "On a computer": true,
      "On a toaster": false,
      "Under water": false,
      "On a piece of paper": false,
    },
  },
  {
    //3
    question: "When do you need electricity to code?",
    answer: {
      never: false,
      sometimes: false,
      "most of the time": false,
      "all the time": true,
    },
  },
  {
    //4
    question: "which one of these relates to tech?",
    answer: {
      banana: false,
      orange: false,
      lemon: false,
      apple: true,
    },
  },
  {
    //5
    question: "which animal codes?",
    answer: {
      caterpiller: false,
      bird: false,
      human: true,
      aligator: false,
    },
  },
  {
    //6
    question: "which is a delairation operator?",
    answer: {
      "=": true,
      "==": false,
      ":": false,
      "-": false,
    },
  },
  {
    //7
    question: "how do you spell Javascript?",
    answer: {
      "jaba sript": false,
      "java scrimp": false,
      "javan shrimp": false,
      Javascript: true,
    },
  },
  {
    //8
    question:
      "Who created the type of computer that modern humans use today for coding purposes?",
    answer: {
      "The Aliens": false,
      "The Dinosaurs": false,
      "The Gods": false,
      "The Humans": true,
    },
  },
  {
    //9
    question: "When coding, it is best practices to think in ____ sentences",
    answer: {
      illogical: false,
      coherient: true,
      incoherient: false,
      nonsensical: false,
    },
  },
  {
    //10
    question: "Coding requires which of the following: ",
    answer: {
      "A computing instrument": true,
      "A garden": false,
      "A vehicle": false,
      "A fishing pole": false,
    },
  },
];

var scoreObj = {
  correct: 0,
  incorrect: 0,
  timeLeft: 0,
};

var driveWEl = {
  jump_from: "",
  jump_to: "",
};
var answerFeedbackTimer = 30;
var secondsLeft = 2000;
var gameOver = false;

function setScreen(event) {
  var visibleEl = document.querySelector(".visible");

  (driveWEl.jump_from = visibleEl.getAttribute("id")),
    (driveWEl.jump_to = event.target.getAttribute("jump_to"));

  getScreen();
}

function getScreen() {
  var jump_fromEl = document.getElementById(driveWEl.jump_from);
  var jump_toEl = document.getElementById(driveWEl.jump_to);
  var jump_fromID = jump_fromEl.getAttribute("id");
  var jump_toID = jump_toEl.getAttribute("id");

  jump_fromEl.classList.replace("visible", "invisible");
  jump_toEl.classList.replace("invisible", "visible");

  if (jump_fromID === "quiz") {
    gameOver = true;
  }

  if (jump_toID === "quiz") {
    setTimer();
    nextQuestion(0);
  }

  if (jump_toID === "player_info") {
    if (secondsLeft > 0 && scoreObj.correct + scoreObj.incorrect !== quizArr.length) {
      scoreObj.correct = 0;
      scoreObj.incorrect = 0;
      scoreObj.timeLeft = 0;
    }
    displayResults();
  }

  if(jump_toID === 'leader_board') {
    populateLeaderboard()
  }
}

function setTimer() {
  var timerEl = document.getElementById("timer");
  timerEl.classList.replace("invisible", "visible");

  var intervalID = setInterval(function () {
    secondsLeft--;
    if (secondsLeft < 1000) {
      timerEl.textContent = "0:0" + (secondsLeft / 100).toFixed(2);
      timerEl.setAttribute("style", "color:red");
    } else timerEl.textContent = "0:" + (secondsLeft / 100).toFixed(2);

    if (secondsLeft === 0 || gameOver) {
      clearInterval(intervalID);
      removeEars();
      driveWEl.jump_from = "quiz";
      driveWEl.jump_to = "player_info";
      scoreObj.timeLeft = secondsLeft / 100;
      secondsLeft = 0;
      gameOver = true;
      getScreen();
    }
  }, 10);
}

function nextQuestion(i) {
  var questionEl = document.getElementById("question");
  questionEl.textContent = quizArr[i].question;

  var ansArr = Object.keys(quizArr[i].answer);
  ansArr.forEach((el, index) => {
    document.getElementById("a" + (index + 1)).textContent = el;
  });
}

function answerSelection(event) {
  var validSelection = false;
  var answerToken = new Boolean();
  var currentQuestion = document.getElementById("question").textContent;

  var questionIndex = 0;
  while (
    quizArr[questionIndex].question !== currentQuestion &&
    questionIndex < quizArr.length
  ) {
    questionIndex++;
  }
  // event.target
  var answerArr = Object.values(quizArr[questionIndex].answer);
  var userSelection = event.key || event.target.getAttribute("id").split("")[1];

  switch (userSelection) {
    case "1":
      if (answerArr[userSelection - 1]) {
        scoreObj.correct++;
        answerToken = true;
      } else {
        scoreObj.incorrect++;
        answerToken = false;
      }
      validSelection = true;
      break;
    case "2":
      if (answerArr[userSelection - 1]) {
        scoreObj.correct++;
        answerToken = true;
      } else {
        scoreObj.incorrect++;
        answerToken = false;
      }
      validSelection = true;
      break;
    case "3":
      if (answerArr[userSelection - 1]) {
        scoreObj.correct++;
        answerToken = true;
      } else {
        scoreObj.incorrect++;
        answerToken = false;
      }
      validSelection = true;
      break;
    case "4":
      if (answerArr[userSelection - 1]) {
        scoreObj.correct++;
        answerToken = true;
      } else {
        scoreObj.incorrect++;
        answerToken = false;
      }
      validSelection = true;
      break;
    default:
      console.log("error");
  }

  if (validSelection) {
    if (questionIndex + 1 < quizArr.length) {
      nextQuestion(questionIndex + 1);
      setAnswerFeedbackTimer(answerToken);
    } else {
      gameOver = true;
    }
  }
}

function setAnswerFeedbackTimer(answerToken) {
   var feedbackEl = document.getElementById("feedback");
   var opacity = 100;

  var intervalID = setInterval(function () {
console.log(answerFeedbackTimer)
    answerFeedbackTimer--;
    if (answerToken) {
      feedbackEl.textContent = "Correct!";
      feedbackEl.removeAttribute("color");
      feedbackEl.setAttribute("style", "color:green; opacity:" + opacity + "%");
    } else {
      feedbackEl.textContent = "Incorrect!";
      feedbackEl.removeAttribute("color");
      feedbackEl.setAttribute("style", "color:red; opacity:" + opacity + "%");
    }
    opacity -= 3;

     if (answerFeedbackTimer === 0) {
       clearInterval(intervalID);
      feedbackEl.textContent = "";
      answerFeedbackTimer = 30
     }
  }, 30);
}

function displayResults() {
  //calc score
  var userScore = calcScore(scoreObj.correct, scoreObj.incorrect, scoreObj.timeLeft);
  //make score look good
   userScore = userScore.toFixed(2)

  //find element
  var resultsEl = document.getElementById("results");
  //find element
  var userScoreEl = document.getElementById("user_score");
  //display score
  userScoreEl.textContent = "Your Score " + userScore.toString();

  //for each value in score object
  for (var values in scoreObj) {
    //create p element
    var tempEl = document.createElement("p");
    //add text content
    tempEl.textContent = values + ": " + scoreObj[values];
    //display score
    resultsEl.appendChild(tempEl);
  }

  //find element
  var timerEl = document.getElementById("timer");
  //hide timer
  timerEl.classList.replace("visible", "invisible");
}

function calcScore(_correct, _incorrect, _timeLeft) {

  return (_correct - _incorrect) / (20 - _timeLeft);

}

function saveScore() {
  var userNameEl = document.getElementById("name")
  var userScoreEl = document.getElementById('user_score')

  var userScore = userScoreEl.textContent.split(' ')
  //console.log(userScore(2))

  localStorage.setItem(userNameEl.value, userScore[2])  
}

function submitUserScore(event) {
  var currentPage = document.querySelector(".visible").getAttribute("id");
var inputFieldEl = document.getElementById('name')
console.log(inputFieldEl)
   event.preventDefault();
   if(inputFieldEl.value) {
          saveScore();
          driveWEl.jump_from = currentPage;
          driveWEl.jump_to = 'leader_board';
          getScreen()
   }
}

function populateLeaderboard() {
  
var leaderboardArr = Object.entries(localStorage);
console.log(leaderboardArr)

leaderboardArr.sort((a, b) => b[1] - a[1])
//console.log(leaderboardArr)

var listContainerEl = document.getElementById('score_list')
listContainerEl.innerHTML = '';
leaderboardArr.forEach((el) => {
  console.log(el)
var temp = document.createElement('li')
temp.innerHTML = el[0] + " - " + el[1];
listContainerEl.append(temp);


})

}

function removeEars() {
  window.removeEventListener("keydown", answerSelection);
  document.getElementById("a1").removeEventListener("click", answerSelection);
  document.getElementById("a2").removeEventListener("click", answerSelection);
  document.getElementById("a3").removeEventListener("click", answerSelection);
  document.getElementById("a4").removeEventListener("click", answerSelection);
}

function addEars() {
  window.addEventListener("keydown", function (event) {
    var currentPage = document.querySelector(".visible").getAttribute("id");

    switch (currentPage) {
      case "htp":
        break;
      case "landing_page":
        if (event.key === 'Enter') {
          driveWEl.jump_from = currentPage;
          driveWEl.jump_to = 'quiz';
          getScreen()
        }
        break;
      case "quiz":
        answerSelection(event)
        break;
      case "player_info":
        break;
      case "leader_board":
        break;
    }

  });
  document.getElementById("a1").addEventListener("click", answerSelection);
  document.getElementById("a2").addEventListener("click", answerSelection);
  document.getElementById("a3").addEventListener("click", answerSelection);
  document.getElementById("a4").addEventListener("click", answerSelection);
}
// function buttonUtility() {
//   var myNodeList = document.querySelectorAll("button");

//   myNodeList.forEach((el) => {
//     el.addEventListener("click", setScreen);
//   });
// }

//document.getElementById("navlink_home").addEventListener("click", setScreen);
//setScreen function works, but would have to add code to reset certain values upon visiting the home page
//an easier way to have values reset is to reload page when the home button is pressed
document.getElementById("navlink_home").addEventListener("click", function() {location.reload()});
document.getElementById("navlink_lb").addEventListener("click", setScreen);
document.getElementById("navlink_htp").addEventListener("click", setScreen);

document.getElementById('play_btn').addEventListener("click", setScreen)

document.getElementById("submit_user_results").addEventListener("click", submitUserScore)

//buttonUtility();
addEars();
populateLeaderboard();