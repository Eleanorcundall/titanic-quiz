let questions = [
  {
    question: "What was the Titanics official name?",
    choices: ["Royal Mail Ship", "Royal Marine Ship", "Racing Marine Steamer"],
    answer: "0", // The index of the correct answer choice
  },
  {
    question: "Where was the Titanic built? ",
    choices: [
      "In the Harland and Wolff Shipyard, Belfast, Northern Ireland ",
      "In the Suez Shipyard, Egypt",
      " In the Western Marine Shipyard, Bangladesh",
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
// Keeps track of current question
let currentQuestionIndex = 0;

// Event listener to execute showQuestion function when the DOM is loaded
document.addEventListener("DOMContentLoaded", showQuestion);

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkAnswer);

// Function to display the current question and answer choices
function showQuestion() {
  let questionContainer = document.getElementById("displayQuestions");
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
  }
}

// Function to check the selected answer and provide feedback
function checkAnswer() {
  let selectedAnswer;
  let correctAnswer = questions[currentQuestionIndex].answer;
  let allAnswers = document.getElementsByName("choices");
  for (let i = 0; i < allAnswers.length; i++) {
    if (allAnswers[i].checked) {
      selectedAnswer = i.toString();
      break;
    }
  }

  if (correctAnswer === selectedAnswer) {
    alert("You got the answer correct!");
  } else {
    alert(`Oh no, you got it wrong!!`);
  }

  currentQuestionIndex++;
  showQuestion();
}