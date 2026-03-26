// ==========================================
// MOVIE KINGS — Quiz JS
// ==========================================

const questions = [
  {
    quote: '"Here\'s looking at you, kid."',
    options: [
      { title: 'Casablanca',        director: 'Michael Curtiz',  year: 1942 },
      { title: 'Gone with the Wind',director: 'Victor Fleming',  year: 1939 },
      { title: 'The Maltese Falcon',director: 'John Huston',     year: 1941 },
      { title: 'Citizen Kane',      director: 'Orson Welles',    year: 1941 }
    ],
    answer: 'Casablanca',
    category: 'drama'
  },
  {
    quote: '"May the Force be with you."',
    options: [
      { title: 'Star Trek', director: 'Robert Wise',         year: 1979 },
      { title: 'Star Wars', director: 'George Lucas',        year: 1977 },
      { title: 'Dune',      director: 'Denis Villeneuve',    year: 2021 },
      { title: 'The Matrix',director: 'The Wachowskis',      year: 1999 }
    ],
    answer: 'Star Wars',
    category: 'scifi'
  },
  {
    quote: '"You can\'t handle the truth!"',
    options: [
      { title: 'A Few Good Men',    director: 'Rob Reiner',      year: 1992 },
      { title: 'The Social Network',director: 'David Fincher',   year: 2010 },
      { title: 'JFK',               director: 'Oliver Stone',    year: 1991 },
      { title: 'Spotlight',         director: 'Tom McCarthy',    year: 2015 }
    ],
    answer: 'A Few Good Men',
    category: 'drama'
  },
  {
    quote: '"I\'ll be back."',
    options: [
      { title: 'Predator',      director: 'John McTiernan',  year: 1987 },
      { title: 'RoboCop',       director: 'Paul Verhoeven',  year: 1987 },
      { title: 'The Terminator',director: 'James Cameron',   year: 1984 },
      { title: 'Total Recall',  director: 'Paul Verhoeven',  year: 1990 }
    ],
    answer: 'The Terminator',
    category: 'action'
  },
  {
    quote: '"To infinity and beyond!"',
    options: [
      { title: 'Toy Story',    director: 'John Lasseter',   year: 1995 },
      { title: 'Antz',         director: 'Eric Darnell',    year: 1998 },
      { title: 'Finding Nemo', director: 'Andrew Stanton',  year: 2003 },
      { title: 'Up',           director: 'Pete Docter',     year: 2009 }
    ],
    answer: 'Toy Story',
    category: 'fantasy'
  },
  {
    quote: '"Why so serious?"',
    options: [
      { title: 'Batman Begins',      director: 'Christopher Nolan', year: 2005 },
      { title: 'The Dark Knight',    director: 'Christopher Nolan', year: 2008 },
      { title: 'Joker',              director: 'Todd Phillips',     year: 2019 },
      { title: 'Batman v Superman',  director: 'Zack Snyder',       year: 2016 }
    ],
    answer: 'The Dark Knight',
    category: 'thriller'
  },
  {
    quote: '"I see dead people."',
    options: [
      { title: 'Poltergeist',    director: 'Tobe Hooper',         year: 1982 },
      { title: 'The Shining',    director: 'Stanley Kubrick',     year: 1980 },
      { title: 'The Sixth Sense',director: 'M. Night Shyamalan',  year: 1999 },
      { title: 'Get Out',        director: 'Jordan Peele',        year: 2017 }
    ],
    answer: 'The Sixth Sense',
    category: 'thriller'
  },
  {
    quote: '"You had me at hello."',
    options: [
      { title: 'Sleepless in Seattle', director: 'Nora Ephron',     year: 1993 },
      { title: 'Jerry Maguire',        director: 'Cameron Crowe',   year: 1996 },
      { title: 'Pretty Woman',         director: 'Garry Marshall',  year: 1990 },
      { title: 'Notting Hill',         director: 'Roger Michell',   year: 1999 }
    ],
    answer: 'Jerry Maguire',
    category: 'romance'
  },
  {
    quote: '"There\'s no place like home."',
    options: [
      { title: 'The Wizard of Oz', director: 'Victor Fleming',   year: 1939 },
      { title: 'Over the Rainbow', director: 'King Vidor',       year: 1939 },
      { title: 'Home Alone',       director: 'Chris Columbus',   year: 1990 },
      { title: 'E.T.',             director: 'Steven Spielberg', year: 1982 }
    ],
    answer: 'The Wizard of Oz',
    category: 'fantasy'
  },
  {
    quote: '"I am your father."',
    options: [
      { title: 'Star Wars: A New Hope',              director: 'George Lucas',     year: 1977 },
      { title: 'Star Wars: The Empire Strikes Back', director: 'Irvin Kershner',  year: 1980 },
      { title: 'Star Wars: Return of the Jedi',      director: 'Richard Marquand', year: 1983 },
      { title: 'Star Wars: Revenge of the Sith',     director: 'George Lucas',     year: 2005 }
    ],
    answer: 'Star Wars: The Empire Strikes Back',
    category: 'scifi'
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const quoteText        = document.getElementById('quoteText');
const optionsContainer = document.getElementById('optionsContainer');
const submitBtn        = document.getElementById('submitBtn');
const questionLabel    = document.getElementById('questionLabel');
const progressPercent  = document.getElementById('progressPercent');
const progressFill     = document.getElementById('progressFill');

function loadQuestion(index) {
  const q = questions[index];
  selectedOption = null;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submit Answer';

  const percent = Math.round(((index + 1) / questions.length) * 100);
  questionLabel.textContent = `Question ${index + 1} of ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  quoteText.textContent = q.quote;

  optionsContainer.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'quiz-card__option';
    btn.dataset.title = option.title;
    btn.innerHTML = `
      <span class="quiz-card__option-title">${option.title}</span>
      <span class="quiz-card__option-director">— ${option.director}</span>
      <span class="quiz-card__option-year">${option.year}</span>
      <span class="quiz-card__option-icon"></span>
    `;
    btn.addEventListener('click', () => selectOption(btn, option.title));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(btn, title) {
  document.querySelectorAll('.quiz-card__option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedOption = title;
  submitBtn.disabled = false;
}

function handleSubmit() {
  if (!selectedOption) return;

  const q = questions[currentQuestion];
  const isCorrect = selectedOption === q.answer;

  document.querySelectorAll('.quiz-card__option').forEach(btn => {
    const icon = btn.querySelector('.quiz-card__option-icon');
    btn.classList.remove('selected');

    if (btn.dataset.title === q.answer) {
      btn.classList.add(isCorrect ? 'correct' : 'correct-missed');
      if (!isCorrect) icon.textContent = '✓';
    } else if (btn.dataset.title === selectedOption && !isCorrect) {
      btn.classList.add('wrong');
      icon.textContent = '✗';
    }
    btn.disabled = true;
  });

  if (isCorrect) score++;

  submitBtn.textContent = 'Next →';
  submitBtn.disabled = false;
  submitBtn.removeEventListener('click', handleSubmit);
  submitBtn.addEventListener('click', nextQuestion, { once: true });
}

function nextQuestion() {
  submitBtn.removeEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', handleSubmit);

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  sessionStorage.setItem('quizScore', score);
  sessionStorage.setItem('quizTotal', questions.length);
  window.location.href = 'results.html';
}

function confirmStop() {
  if (confirm('Stop the quiz? Your progress will be lost.')) {
    window.location.href = '../index.html';
  }
}

submitBtn.addEventListener('click', handleSubmit);

loadQuestion(0);
