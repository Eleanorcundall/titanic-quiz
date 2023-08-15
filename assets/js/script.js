const easyQuestions = [
  {
    question: "What was the Titanics official name?",
    choices: ["Royal Mail Ship", "Royal Marine Ship", "Racing Marine Steamer"],
    answer: "0", // The index of the correct answer choice
  },
  {
    question: "Where was the Titanic built? ",
    choices: [
      "In the Harland and Wolff Shipyard, Belfast, Northern Ireland",
      "In the Suez Shipyard, Egypt",
      "In the Western Marine Shipyard, Bangladesh",
    ],
    answer: "0",
  },
  {
    question: "What were the Titanics sister ships? ",
    choices: [
      "RMS Empress of China and RMS Empress of India ",
      "RMS St Columba and RMS Llewellyn",
      "RMS Olympic and HMHS Britannic",
    ],
    answer: "2",
  },
  {
    question: "The Titanic was en route to what city when it sunk? ",
    choices: [
      "Jersey City, New Jersey, United States ",
      "New York City, United States ",
      "Morehead City, North Carolina, United States",
    ],
    answer: "1",
  },
  {
    question: "Who was the captain of the Titanic? ",
    choices: [
      "Captain Edward ‘Blackbeard’ Teach",
      "Captain Edward John Smith",
      "Captain Archibald Haddock",
    ],
    answer: "1",
  },
  {
    question: "The Titanic had a crew of about how many?",
    choices: ["About 100", "About 450", "About 900"],
    answer: "2",
  },
  {
    question: "What did the Titanic hit, which caused it to sink?",
    choices: ["A rock", "An iceberg", "Another ship"],
    answer: "1",
  },
  {
    question: "How many people were aboard the Titanic when it sunk?",
    choices: ["About 500", "About 1000", "About 2200"],
    answer: "2",
  },
  {
    question: "How many dogs were aboard the Titanic?",
    choices: ["3", "12", "6"],
    answer: "1",
  },
  {
    question: "What was the date that it sank?",
    choices: [
      "1 – 2 August, 1952 ",
      "14 – 15 April, 1912 ",
      "24 – 25 December, 1972 ",
    ],
    answer: "1",
  },
  {
    question:
      "The Titanic was equipped to hold 64 lifeboats, but how many did it actually have?",
    choices: ["20", "65", "63"],
    answer: "0",
  },
  {
    question:
      "Each lifeboat could hold 40 to 65 people (depending on what style it was). How many people were aboard the first lifeboat? ",
    choices: ["28", "40", "65"],
    answer: "0",
  },
  {
    question:
      "What was the name of the ship that came to the Titanic’s rescue?",
    choices: ["RMS Empress of China", "RMS Empress of India ", "RMS Carpathia"],
    answer: "2",
  },
  {
    question:
      " At least how many people lost their lives when the Titanic sunk",
    choices: ["At least 100 ", "At least 500", "At least 1,500"],
    answer: "2",
  },
  {
    question: "How many dogs survived the sinking?",
    choices: ["3", "6", "12"],
    answer: "2",
  },
];

// keeps track of current question
let currentQuestionIndex = 0;
let submitButton;

// Call this function when the page loads to set up the event listener
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded");
  // Gets each Button on the page and listens for which Difficulty has been clicked by the user
  let buttons = document.getElementsByClassName("difficultyButtons");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      console.log("Difficulty button clicked");
      if (this.id === "easyButton") {
        console.log("Easy difficulty selected");
        showQuestion(easyQuestions);
      }
    });
  }

  submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", function () {
    checkAnswer(easyQuestions);
  });
});

// Function to display the current question and answer choices
function showQuestion(questions) {
  console.log("in showQuestions()");
  let questionContainer = document.createElement("div");
  questionContainer.innerHTML = ""; // Clear existing question

  let questionText = document.createElement("p");
  questionText.textContent = questions[currentQuestionIndex].question;
  questionContainer.appendChild(questionText);

  let answerChoices = questions[currentQuestionIndex].choices;
  for (let i = 0; i < answerChoices.length; i++) {
    let choiceContainer = document.createElement("div");

    let choiceText = document.createElement("p");
    choiceText.textContent = answerChoices[i];
    choiceContainer.appendChild(choiceText);

    let choiceInput = document.createElement("input");
    choiceInput.type = "radio";
    choiceInput.name = "choices";
    choiceInput.value = i;

    choiceContainer.appendChild(choiceInput);
    questionContainer.appendChild(choiceContainer);

    choiceContainer.appendChild(choiceInput);
    questionContainer.appendChild(choiceContainer);
    document.getElementById("quizArea").appendChild(questionContainer);
    questionContainer.appendChild(submitButton);
  }
}

// Function to check the selected answer and provide feedback
function checkAnswer(questions) {
  let selectedAnswer;
  let correctAnswer = questions[currentQuestionIndex].answer;
  let allAnswers = document.getElementsByName("choices");

  for (let i = 0; i < allAnswers.length; i++) {
    if (allAnswers[i].checked) {
      selectedAnswer = i.toString();
      break;
    }
  }

  console.log(`correctAnswer: ${correctAnswer}`);
  console.log(`selectedAnswer: ${selectedAnswer}`);

  if (correctAnswer === selectedAnswer) {
    alert("You got the answer correct!");
    incrementScore();
  } else {
    alert(`Oh no, you got it wrong!!`);
    incrementWrongAnswer();
  }
  endQuiz();

  currentQuestionIndex++;

  showQuestion();
}

// increments correct answers
function incrementScore() {
  let oldScore = parseInt(document.getElementById("correctAnswers").innerText);
  document.getElementById("correctAnswers").innerText = ++oldScore;
}

// increments incorrect answers
function incrementWrongAnswer() {
  let oldScore = parseInt(
    document.getElementById("incorrectAnswers").innerText
  );
  document.getElementById("incorrectAnswers").innerText = ++oldScore;
}

function endQuiz() {
  let correctAnswers = parseInt(
    document.getElementById("correctAnswers").innerText
  );
  let incorrectAnswers = parseInt(
    document.getElementById("incorrectAnswers").innerText
  );

  if (correctAnswers + incorrectAnswers >= 15) {
    let quizResults = document.createElement("p");
    quizResults.innerHTML = `Well done! you got ${correctAnswers} out of 15!!`;
    let resultContainer = document.createElement("div");
    resultContainer.appendChild(quizResults);
    let targetElement = document.getElementById("quizArea");
    removeAllChildren(targetElement);

    document.body.appendChild(resultContainer);
  }
  function removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
