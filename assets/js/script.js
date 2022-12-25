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

var score = {
  correct: 0,
  incorrect: 0,
  timeLeft: 0,
};

var driveWEl = {
  jump_from: "",
  jump_to: "",
};
var answerFeedbackTimer = 3000;
var secondsLeft = 200;
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
  var jump_toID = jump_toEl.getAttribute("id") ;

  jump_fromEl.classList.replace("visible", "invisible");
  jump_toEl.classList.replace("invisible", "visible");

  if (jump_fromID === "quiz") {
    gameOver = true;
  }

  if (jump_toID === "quiz") {
    setTimer();
    nextQuestion(0);
  }

  if(jump_toID === "player_info"){

    if (secondsLeft > 0 && (score.correct + score.incorrect !== quizArr.length)) {
      score.correct = 0;
      score.incorrect = 0;
      score.timeLeft = 0;
    }
    displayResults()
  }
}

function setTimer() {
  var timerEl = document.getElementById("timer");
  timerEl.classList.replace("invisible", "visible");

  var timerID = setInterval(function () {
    secondsLeft--;
    if (secondsLeft < 10) {
      timerEl.textContent = "0:0" + (secondsLeft/100).toFixed(2);
      timerEl.setAttribute("style", "color:red");
    } else timerEl.textContent = "0:" + (secondsLeft/100).toFixed(2);

    if (secondsLeft === 0 || gameOver) {
      console.log("enteredHERE");
      clearInterval(timerID);
      removeEars();
      driveWEl.jump_from = "quiz";
      driveWEl.jump_to = "player_info";
      score.timeLeft = secondsLeft / 100;
      secondsLeft = 0;
      gameOver = true;
      getScreen();
    }
  }, 10);
}

function nextQuestion(i) {
  console.log("entered", i);
  var questionEl = document.getElementById("question");
  questionEl.textContent = quizArr[i].question;

  var ansArr = Object.keys(quizArr[i].answer);
  ansArr.forEach((el, index) => {
    document.getElementById("a" + (index + 1)).textContent = el;
  });
}

function answerSelection(event) {
  // console.log(event.key);
  // console.log("e" + typeof event.key);
  // console.log(event.target.getAttribute('id').split(''));
  var validSelection = false;
  //var answerToken = new Boolean();
  var currentQuestion = document.getElementById("question").textContent;

  // console.log("cur q", currentQuestion);
  // console.log("quizArr[i].question: ", quizArr[0].question);
  var questionIndex = 0;
  while (
    quizArr[questionIndex].question !== currentQuestion &&
    questionIndex < quizArr.length
  ) {
    questionIndex++;
  }
  // event.target
  var answerArr = Object.values(quizArr[questionIndex].answer);
  console.log(answerArr);
  var userSelection = event.key || event.target.getAttribute("id").split("")[1];

  switch (userSelection) {
    case "1":
      console.log("entered case " + userSelection);
      if (answerArr[userSelection - 1]) {
        ++score.correct;
        //answerToken = true;
        console.log(answerArr[userSelection - 1]);
        //console.log("The answer is " + Object.keys(quizArr[i].answer)[event.key-1]);
      } else {
        console.log("Entered False");
        score.incorrect++;
        answerToken = false;
      }
      validSelection = true;
      break;
    case "2":
      console.log("entered case " + userSelection);
      if (answerArr[userSelection - 1]) {
        console.log("Entered True");
        score.correct++;
        //answerToken = true;
        console.log(answerArr[userSelection - 1]);
        //console.log("The answer is " + Object.keys(quizArr[i].answer)[event.key-1])
      } else {
        console.log("Entered False");
        ++score.incorrect;
        //answerToken = false;
      }
      validSelection = true;
      break;
    case "3":
      console.log("entered case " + userSelection);
      if (answerArr[userSelection - 1]) {
        console.log("Entered True");
        score.correct++;
        //answerToken = true;
        console.log(answerArr[userSelection - 1]);
        //console.log("The answer is " + Object.keys(quizArr[i].answer)[event.key-1])
      } else {
        console.log("Entered False");
        score.incorrect++;
        //answerToken = false;
      }

      validSelection = true;
      break;
    case "4":
      console.log("entered case " + userSelection);
      if (answerArr[userSelection - 1]) {
        console.log("Entered True");
        score.correct++;
        //answerToken = true;
        console.log(answerArr[userSelection - 1]);
        //console.log("The answer is " + Object.keys(quizArr[i].answer)[event.key-1])
      } else {
        console.log("Entered False");
        score.incorrect++;
        //answerToken = false;
      }
      validSelection = true;
      break;
    default:
      console.log("error");
  }

  // console.log("Score: " + score.correct + ", " + score.incorrect);

  if (validSelection) {
    if (questionIndex + 1 < quizArr.length) {
      console.log("do we go here at end?");
      nextQuestion(questionIndex + 1);
      //setAnswerFeedbackTimer(answerToken);
    } else {
      gameOver = true;
    }
  }
}

// function setAnswerFeedbackTimer(answerToken) {
//   var timerID = setInterval(function () {
//     var feedbackEl = document.getElementById("feedback");

//     answerFeedbackTimer--;
//     if (answerToken) {
//       feedbackEl.textContent = "Correct!";
//       feedbackEl.removeAttribute("color");
//       feedbackEl.setAttribute("style", "color:green");
//     } else {
//       feedbackEl.textContent = "Incorrect!";
//       feedbackEl.removeAttribute("color");
//       feedbackEl.setAttribute("style", "color:red");
//     }

//     if (answerFeedbackTimer === 0) {
//       clearInterval(timerID);
//       feedbackEl.textContent = "";
//     }
//   }, 1000);
// }

function displayResults() {
  //calc score
  var userScore = score.correct - score.incorrect / (20-score.timeLeft);
  //make score look good
  userScore = userScore.toFixed(3);

  //find element
  var resultsEl = document.getElementById("results");
  //find element
  var userScoreEl = document.getElementById("userScore");
  //display score
  userScoreEl.textContent = "Your Score " + userScore.toString();

  //for each value in score object
  for (var values in score) {
    //create p element
    var tempEl = document.createElement("p");
    //add text content
    tempEl.textContent = values + ": " + score[values];
    //display score
    resultsEl.appendChild(tempEl);
  }

  //find element
  var timerEl = document.getElementById("timer");
  //hide timer
  timerEl.classList.replace("visible", "invisible");
}

function removeEars() {
  window.removeEventListener("keydown", answerSelection);
  document.getElementById("a1").removeEventListener("click", answerSelection);
  document.getElementById("a2").removeEventListener("click", answerSelection);
  document.getElementById("a3").removeEventListener("click", answerSelection);
  document.getElementById("a4").removeEventListener("click", answerSelection);
}

function addEars() {
  window.addEventListener("keydown", answerSelection);
  document.getElementById("a1").addEventListener("click", answerSelection);
  document.getElementById("a2").addEventListener("click", answerSelection);
  document.getElementById("a3").addEventListener("click", answerSelection);
  document.getElementById("a4").addEventListener("click", answerSelection);
}
  function buttonUtility() {
  var myNodeList = document.querySelectorAll("button");

  myNodeList.forEach((el) => {
    el.addEventListener("click", setScreen);
  });
  }

  document.getElementById("navlink_home").addEventListener("click", setScreen);
  document.getElementById("navlink_lb").addEventListener("click", setScreen);
  document.getElementById("navlink_htp").addEventListener("click", setScreen);

buttonUtility();
addEars();
