var quizzArr = [
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

function navigate(currentID, targetID) {
  document.getElementById(currentID).classList.remove("visible");
  document.getElementById(currentID).classList.add("hidden");
  document.getElementById(targetID).classList.remove("hidden");
  document.getElementById(targetID).classList.add("visible");
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

function setScreen(event) {
  // var takeMeTo = event.target.getAttribute('takeMeTo');

  // console.log("getAtt: " + event.target.getAttribute('takemeto'))
  // console.log("takeMeTo = " + takeMeTo)
  var toFind = "visible";
  //if multiple buttons on page use id or event.target
  var currentElement = event.target;
  //    console.log("currentElement.classlist before loop")
  //    console.log(currentElement.classList)
  //    var counter = 0;

  //x = currentElement.classlist is an object
  //y = Object.values(x) takes values and turns into array
  // y.includes(toFind) uses array method to find if toFind is part of the classlist
  //if it is, stop loop
  //or stop loop if loop reached html parent
  while (
    !Object.values(currentElement.classList).includes(toFind) &&
    currentElement.tagName !== "HTML"
  ) {
    // counter++
    // console.log("counter: " + counter)
    // console.log("o.ent(CE.CL) = " + Object.values(currentElement.classList).includes(toFind))
    //console.log("cur el id = " + currentElement.getAttribute('id'))

    console.log("currentEl.tagname = " + currentElement.tagName);
    currentElement = currentElement.parentElement;

    if (currentElement.tagName == "HTML") {
      console.log("Cant Find Proper Parent");
      break;
    }
  }
  console.log("Stopped at ", currentElement);

  navigate(
    currentElement.getAttribute("id"),
    event.target.getAttribute("jump-to")
  );
}

window.addEventListener("keydown", answerSelection);
document.addEventListener("click", setScreen);
