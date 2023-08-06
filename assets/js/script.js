let questions = [
  {
    question: "1?",
    choices: ["Royal Mail Ship", "Royal Marine Ship", "Racing Marine Steamer"],
    answer: "0",
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
    question: "3?",
    choices: ["Royal Mail Ship", "Royal Marine Ship", "Racing Marine Steamer"],
    answer: "2",
  },
];
let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", showQuestion);

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkAnswer);

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
