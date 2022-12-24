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
      "Tho created the type of computer that modern humans use today for coding purposes?",
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

function setScreen(event) {
  var toFind = "visible";
  var currentElement = event.target;

  while (
    !Object.values(currentElement.classList).includes(toFind) &&
    currentElement.tagName !== "HTML"
  ) {
    console.log("currentEl.tagname = " + currentElement.tagName);
    currentElement = currentElement.parentElement;

    if (currentElement.tagName == "HTML") {
      console.log("Cant Find Proper Parent");
      break;
    }
  }
  getScreen(
    currentElement.getAttribute("id"),
    event.target.getAttribute("jump-to")
  );
}

function getScreen(currentID, targetID) {
  document.getElementById(currentID).classList.remove("visible");
  document.getElementById(currentID).classList.add("hidden");
  document.getElementById(targetID).classList.remove("hidden");
  document.getElementById(targetID).classList.add("visible");

  playQuiz();
}

function playQuiz() {
    var questionEl = document.getElementById("question")
    //var questionListEl = document.getElementById("answer-list")

    for(var i = 0; i < quizArr.length; i++) {
    questionEl.textContent = quizArr[i].question

    var ansArr = Object.keys(quizArr[i].answer)
    ansArr.forEach((el, index) => {
        document.getElementById("a" + (index +1)).textContent = el;
    })
    }

}

function answerSelection(event) {
  console.log(event);
  console.log("e" + typeof event);
  console.log("e.k" + typeof event.key);

  switch (event.key) {
    case "1":
      console.log("entered case " + event.key);
      break;
    case "2":
      console.log("entered case " + event.key);
      break;
    case "3":
      console.log("entered case " + event.key);
      break;
    case "4":
      console.log("entered case " + event.key);
      break;
    default:
      console.log("error");
  }
}

window.addEventListener("keydown", answerSelection);
buttonUtility();
function buttonUtility() {
    var myNodeList = document.querySelectorAll("button")

    myNodeList.forEach((el) => {
        el.addEventListener("click", setScreen);
    })
}
