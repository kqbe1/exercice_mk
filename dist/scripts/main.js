// ==========================================
// MOVIE KINGS — Main JS (index.html)
// ==========================================

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mainNav.classList.toggle('is-open');
    hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('is-open') && !mainNav.contains(e.target)) {
      mainNav.classList.remove('is-open');
      hamburger.innerHTML = '&#9776;';
    }
  });
}

// --- Language switcher ---
function setLang(lang) {
  document.querySelectorAll('.navbar__lang button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  // TODO: implement i18n
  console.log('Language set to:', lang);
}

// --- Reveal answer ---
const revealBtn = document.getElementById('revealBtn');
const quoteAnswer = document.getElementById('quoteAnswer');

if (revealBtn) {
  revealBtn.addEventListener('click', () => {
    quoteAnswer.style.display = 'block';
    revealBtn.style.display = 'none';
  });
}

// --- Category Modal ---
const categoryModal = document.getElementById('categoryModal');
const profileModal = document.getElementById('profileModal');
const browseCategoryBtn = document.getElementById('browseCategoryBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const cancelCategory = document.getElementById('cancelCategory');
const confirmCategory = document.getElementById('confirmCategory');

if (browseCategoryBtn) {
  browseCategoryBtn.addEventListener('click', () => {
    categoryModal.classList.add('is-visible');
  });
}

if (cancelCategory) {
  cancelCategory.addEventListener('click', () => {
    categoryModal.classList.remove('is-visible');
  });
}

if (confirmCategory) {
  confirmCategory.addEventListener('click', () => {
    categoryModal.classList.remove('is-visible');
    profileModal.classList.add('is-visible');
  });
}

// Category option selection
const categoryOptions = document.querySelectorAll('.category-modal__option');
const defaultOption = document.querySelector('.category-modal__option--all');
if (defaultOption) defaultOption.classList.add('selected');

categoryOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryOptions.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// --- Start Quiz (direct) ---
if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    profileModal.classList.add('is-visible');
  });
}

// --- Profile Modal: avatar selection ---
document.querySelectorAll('.profile-modal__avatar-wrap').forEach(wrap => {
  wrap.addEventListener('click', () => {
    document.querySelectorAll('.profile-modal__avatar-wrap').forEach(w => {
      w.classList.remove('selected');
      w.querySelector('.profile-modal__avatar-radio').classList.remove('selected');
    });
    wrap.classList.add('selected');
    wrap.querySelector('.profile-modal__avatar-radio').classList.add('selected');
  });
});

// --- Start Quiz from Profile ---
const startQuizFromProfile = document.getElementById('startQuizFromProfile');

if (startQuizFromProfile) {
  startQuizFromProfile.addEventListener('click', () => {
    const nickname = document.getElementById('nickname').value.trim();
    if (!nickname) {
      document.getElementById('nickname').focus();
      return;
    }
    // Save to sessionStorage
    sessionStorage.setItem('playerName', nickname);
    window.location.href = 'quiz.html';
  });
}

// Close modals by clicking overlay
[categoryModal, profileModal].forEach(modal => {
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-visible');
    });
  }
});
