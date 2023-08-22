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
    answer: "1",
  },
  {
    question: "Where did the Titanic leave from on the voyage?",
    choices: ["Liverpool", "Southampton", "Dover"],
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
    question: "The RMS Titanic was operated by whom?",
    choices: ["The White Star Line", "Cunard Line", "P&O Cruises"],
    answer: "0",
  },
  {
    question: "How many survivors were there?",
    choices: ["Around 700", "Around 40", "Around 1500"],
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
    question: "How many Voyages had the Titanic previously been on",
    choices: ["2", "6", "0, it was her Maiden Voyage"],
    answer: "2",
  },
];

let mediumQuestions = [
  {
    question: "What time did the Titanic hit the iceberg?",
    choices: ["10:00 pm", "2:20 am", "11:40 pm"],
    answer: "2", // The index of the correct answer choice
  },
  {
    question: "How long did it take to build the Titanic? ",
    choices: ["3 Years", "8 Years", "18 Months"],
    answer: "0",
  },
  {
    question: "When was the wreck of the Titanic discovered?",
    choices: ["1913", "1956", "1985"],
    answer: "2",
  },
  {
    question: "In which city was the Titanic registered?",
    choices: ["London, UK", "New York City, United States ", "Liverpool, UK"],
    answer: "2",
  },
  {
    question:
      "How long did it take between the moment the Titanic hit the iceberg and the moment it sank?",
    choices: ["15 Minutes", "2 Hours 40 Minues", "1 hour 15 Minutes"],
    answer: "1",
  },
  {
    question: "How long was the Titanic?",
    choices: ["882 feet 9 inches", "1045 feet 6 inches", "452 feet 4 inches"],
    answer: "0",
  },
  {
    question: "Who was the Titanics Designer?",
    choices: ["Thomas Andrews", "Bruce Ismay", "Edward John Smith"],
    answer: "0",
  },
  {
    question: "How did the Titanic Hit the Iceberg",
    choices: [
      "Head on collison",
      "On the Left, Port side",
      "On the Right, starboard side",
    ],
    answer: "2",
  },
  {
    question: "How many dogs were aboard the Titanic?",
    choices: ["3", "12", "6"],
    answer: "1",
  },
  {
    question: "How many water tight compartments did the Titnaic have?",
    choices: ["8", "16", "25"],
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
      "How many of Titanic water tight compartments were breached in the collison?",
    choices: ["3", "4", "6"],
    answer: "2",
  },
  {
    question: "How many movies about the Titanic have been filmed?",
    choices: ["2", "1", "16"],
    answer: "2",
  },
  {
    question: "How many dogs survived the sinking?",
    choices: ["3", "6", "12"],
    answer: "2",
  },
];

const questions = {
  easyQuestions: [
    {
      question: "What was the Titanics official name?",
      choices: [
        "Royal Mail Ship",
        "Royal Marine Ship",
        "Racing Marine Steamer",
      ],
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
      answer: "1",
    },
    {
      question: "Where did the Titanic leave from on the voyage?",
      choices: ["Liverpool", "Southampton", "Dover"],
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
      question: "The RMS Titanic was operated by whom?",
      choices: ["The White Star Line", "Cunard Line", "P&O Cruises"],
      answer: "0",
    },
    {
      question: "How many survivors were there?",
      choices: ["Around 700", "Around 40", "Around 1500"],
      answer: "0",
    },
    {
      question:
        "What was the name of the ship that came to the Titanic’s rescue?",
      choices: [
        "RMS Empress of China",
        "RMS Empress of India ",
        "RMS Carpathia",
      ],
      answer: "2",
    },
    {
      question:
        " At least how many people lost their lives when the Titanic sunk",
      choices: ["At least 100 ", "At least 500", "At least 1,500"],
      answer: "2",
    },
    {
      question: "How many Voyages had the Titanic previously been on",
      choices: ["2", "6", "0, it was her Maiden Voyage"],
      answer: "2",
    },
  ],
  mediumQuestions: [
    {
      question: "What time did the Titanic hit the iceberg?",
      choices: ["10:00 pm", "2:20 am", "11:40 pm"],
      answer: "2", // The index of the correct answer choice
    },
    {
      question: "How long did it take to build the Titanic? ",
      choices: ["3 Years", "8 Years", "18 Months"],
      answer: "0",
    },
    {
      question: "When was the wreck of the Titanic discovered?",
      choices: ["1913", "1956", "1985"],
      answer: "2",
    },
    {
      question: "In which city was the Titanic registered?",
      choices: ["London, UK", "New York City, United States ", "Liverpool, UK"],
      answer: "2",
    },
    {
      question:
        "How long did it take between the moment the Titanic hit the iceberg and the moment it sank?",
      choices: ["15 Minutes", "2 Hours 40 Minues", "1 hour 15 Minutes"],
      answer: "1",
    },
    {
      question: "How long was the Titanic?",
      choices: ["882 feet 9 inches", "1045 feet 6 inches", "452 feet 4 inches"],
      answer: "0",
    },
    {
      question: "Who was the Titanics Designer?",
      choices: ["Thomas Andrews", "Bruce Ismay", "Edward John Smith"],
      answer: "0",
    },
    {
      question: "How did the Titanic Hit the Iceberg",
      choices: [
        "Head on collison",
        "On the Left, Port side",
        "On the Right, starboard side",
      ],
      answer: "2",
    },
    {
      question: "How many dogs were aboard the Titanic?",
      choices: ["3", "12", "6"],
      answer: "1",
    },
    {
      question: "How many water tight compartments did the Titnaic have?",
      choices: ["8", "16", "25"],
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
        "How many of Titanic water tight compartments were breached in the collison?",
      choices: ["3", "4", "6"],
      answer: "2",
    },
    {
      question: "How many movies about the Titanic have been filmed?",
      choices: ["2", "1", "16"],
      answer: "2",
    },
    {
      question: "How many dogs survived the sinking?",
      choices: ["3", "6", "12"],
      answer: "2",
    },
  ],
};
