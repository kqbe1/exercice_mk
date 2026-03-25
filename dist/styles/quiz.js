// ==========================================
// MOVIE KINGS — Quiz JS
// ==========================================

const questions = [
  {
    quote: '"Here\'s looking at you, kid."',
    options: ['Casablanca', 'Gone with the Wind', 'The Maltese Falcon', 'Citizen Kane'],
    answer: 'Casablanca',
    category: 'drama'
  },
  {
    quote: '"May the Force be with you."',
    options: ['Star Trek', 'Star Wars', 'Dune', 'The Matrix'],
    answer: 'Star Wars',
    category: 'scifi'
  },
  {
    quote: '"You can\'t handle the truth!"',
    options: ['A Few Good Men', 'The Social Network', 'JFK', 'Spotlight'],
    answer: 'A Few Good Men',
    category: 'drama'
  },
  {
    quote: '"I\'ll be back."',
    options: ['Predator', 'RoboCop', 'The Terminator', 'Total Recall'],
    answer: 'The Terminator',
    category: 'action'
  },
  {
    quote: '"To infinity and beyond!"',
    options: ['Toy Story', 'Buzz Lightyear', 'Finding Nemo', 'Up'],
    answer: 'Toy Story',
    category: 'fantasy'
  },
  {
    quote: '"Why so serious?"',
    options: ['Batman Begins', 'The Dark Knight', 'Joker', 'Batman v Superman'],
    answer: 'The Dark Knight',
    category: 'thriller'
  },
  {
    quote: '"I see dead people."',
    options: ['Poltergeist', 'The Shining', 'The Sixth Sense', 'Get Out'],
    answer: 'The Sixth Sense',
    category: 'thriller'
  },
  {
    quote: '"You had me at hello."',
    options: ['Sleepless in Seattle', 'Jerry Maguire', 'Pretty Woman', 'Notting Hill'],
    answer: 'Jerry Maguire',
    category: 'romance'
  },
  {
    quote: '"There\'s no place like home."',
    options: ['The Wizard of Oz', 'Dorothy', 'Home Alone', 'E.T.'],
    answer: 'The Wizard of Oz',
    category: 'fantasy'
  },
  {
    quote: '"I am your father."',
    options: ['Star Wars: A New Hope', 'Star Wars: The Empire Strikes Back', 'Star Wars: Return of the Jedi', 'Star Wars: Revenge of the Sith'],
    answer: 'Star Wars: The Empire Strikes Back',
    category: 'scifi'
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const quoteText = document.getElementById('quoteText');
const optionsContainer = document.getElementById('optionsContainer');
const submitBtn = document.getElementById('submitBtn');
const questionLabel = document.getElementById('questionLabel');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');

function loadQuestion(index) {
  const q = questions[index];
  selectedOption = null;
  submitBtn.disabled = true;

  // Update progress
  const percent = Math.round(((index + 1) / questions.length) * 100);
  questionLabel.textContent = `Question ${index + 1} of ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  // Update quote
  quoteText.textContent = q.quote;

  // Render options
  optionsContainer.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'quiz-card__option';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(btn, option));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(btn, option) {
  document.querySelectorAll('.quiz-card__option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedOption = option;
  submitBtn.disabled = false;
}

submitBtn.addEventListener('click', () => {
  if (!selectedOption) return;

  const q = questions[currentQuestion];
  const isCorrect = selectedOption === q.answer;

  // Show correct/wrong
  document.querySelectorAll('.quiz-card__option').forEach(btn => {
    if (btn.textContent === q.answer) {
      btn.classList.add('correct');
    } else if (btn.textContent === selectedOption && !isCorrect) {
      btn.classList.add('wrong');
    }
    btn.disabled = true;
  });

  if (isCorrect) score++;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Next →';
  submitBtn.disabled = false;

  submitBtn.removeEventListener('click', handleSubmit);
  submitBtn.addEventListener('click', nextQuestion, { once: true });
});

function nextQuestion() {
  submitBtn.textContent = 'Submit Answer';
  submitBtn.removeEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', handleSubmit);

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

function handleSubmit() {
  // handled inline above
}

function endQuiz() {
  sessionStorage.setItem('quizScore', score);
  sessionStorage.setItem('quizTotal', questions.length);
  window.location.href = 'pages/results.html';
}

function confirmStop() {
  if (confirm('Stop the quiz? Your progress will be lost.')) {
    window.location.href = 'index.html';
  }
}

// Re-bind submit
submitBtn.addEventListener('click', function onSubmit() {
  // This is handled by the inline listener above
});

// Init
loadQuestion(0);
