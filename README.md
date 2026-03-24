# 🎬 Movie Kings — Setup Guide

## Structure du projet
```
movie-kings/
├── index.html          ← Page d'accueil
├── quiz.html           ← Page quiz
├── results.html        ← Page résultats
├── package.json        ← Config npm
├── scss/
│   ├── main.scss           ← Fichier principal (importe tout)
│   ├── _variables.scss     ← Couleurs, typos, breakpoints, mixins
│   ├── _base.scss          ← Reset + styles globaux
│   ├── _navbar.scss        ← Barre de navigation
│   ├── _hero.scss          ← Section héro + boutons
│   ├── _sections.scss      ← Features, leaderboard, quote
│   ├── _footer.scss        ← Footer
│   ├── _modal.scss         ← Modals (catégorie + profil)
│   └── _quiz.scss          ← Page quiz
├── css/
│   └── main.css            ← ⚠️ NE PAS MODIFIER — généré automatiquement
└── js/
    ├── main.js             ← JS page d'accueil
    └── quiz.js             ← Logique du quiz
```

---

## 1. Installation (à faire une seule fois par machine)

### Installe Node.js
Télécharge et installe : https://nodejs.org (version LTS)

### Installe les dépendances du projet
Ouvre un terminal dans le dossier `movie-kings/` et tape :
```bash
npm install
```

---

## 2. Développement quotidien

### Lance le compilateur SCSS (à garder ouvert)
```bash
npm run sass
```
→ Chaque fois que tu modifies un fichier `.scss`, le `css/main.css` se régénère automatiquement.

### Lance Live Server dans VSCode
- Installe l'extension **Live Server** dans VSCode
- Clic droit sur `index.html` → "Open with Live Server"
- Le navigateur se rechargera automatiquement à chaque sauvegarde

---

## 3. Synchronisation entre Windows et Mac (GitHub)

### Première fois (Windows)
```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/TON_COMPTE/movie-kings.git
git push -u origin main
```

### Sur le Mac (centre de formation)
```bash
git clone https://github.com/TON_COMPTE/movie-kings.git
cd movie-kings
npm install
```

### Chaque fin de session — sauvegarder
```bash
git add .
git commit -m "session du XX/XX"
git push
```

### Chaque début de session — récupérer les dernières modifs
```bash
git pull
```

---

## 4. Modifier les styles

Tous les styles sont dans `scss/`. **Ne modifie jamais** `css/main.css` directement.

| Fichier | Ce que tu peux modifier |
|---|---|
| `_variables.scss` | Couleurs (`$yellow`, `$purple`...), tailles de police, espacements |
| `_navbar.scss` | Style de la barre de navigation |
| `_hero.scss` | Titre, sous-titre, boutons du héro |
| `_sections.scss` | Cartes features, leaderboard, citation |
| `_modal.scss` | Modals catégories et profil |
| `_quiz.scss` | Page de quiz, barre de progression |
| `_footer.scss` | Pied de page |

---

## 5. Ajouter des questions au quiz

Ouvre `js/quiz.js` et ajoute des objets dans le tableau `questions` :
```javascript
{
  quote: '"Ta citation entre guillemets."',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  answer: 'Option 1',         // ← doit être identique à l'une des options
  category: 'drama'           // action, drama, thriller, romance, scifi, fantasy
}
```

---

## Extensions VSCode recommandées
- **Live Server** — recharge le navigateur en direct
- **SCSS IntelliSense** — autocomplétion SCSS
- **Prettier** — formatage automatique du code
- **GitLens** — gestion Git améliorée
