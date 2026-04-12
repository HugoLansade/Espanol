import SRS from './srs.js';
import Storage from './storage.js';
import { VOCAB, CATEGORIES } from './vocab.js';

// ============================================================
//  État global de l'application
// ============================================================
const State = {
  screen: 'home',
  reviewSession: null,   // session en cours
  selectedLevel: null,
  selectedCategory: null,
  browseFilter: 'all',
  browseSearch: '',
};

// ============================================================
//  Helpers
// ============================================================

function getAllCards() {
  const builtIn = [...VOCAB.A1, ...VOCAB.A2, ...VOCAB.B1, ...VOCAB.B2];
  const custom = Storage.getCustomCards();
  return [...builtIn, ...custom];
}

function getCardsByLevel(level) {
  if (level === 'custom') return Storage.getCustomCards();
  return VOCAB[level] || [];
}

function getCardLevel(card) {
  if (card.id.startsWith('a1_')) return 'A1';
  if (card.id.startsWith('a2_')) return 'A2';
  if (card.id.startsWith('b1_')) return 'B1';
  if (card.id.startsWith('b2_')) return 'B2';
  return 'custom';
}

function getDueCards() {
  const settings = Storage.getSettings();
  const allCards = getAllCards();
  const due = [];
  const newCards = [];

  allCards.forEach(card => {
    const level = getCardLevel(card);
    if (level !== 'custom' && !settings.activeLevels.includes(level)) return;

    const progress = Storage.getProgress(card.id);
    if (!progress) {
      newCards.push(card);
    } else if (SRS.isDue(progress)) {
      due.push(card);
    }
  });

  // Limiter les nouvelles cartes par jour
  const newToday = Storage.getNewCardsToday();
  const newLimit = Math.max(0, settings.newCardsPerDay - newToday);
  const newBatch = newCards.slice(0, newLimit);

  return { dueCards: due, newCards: newBatch, totalDue: due.length + newBatch.length };
}

function getLevelProgress(level) {
  const cards = getCardsByLevel(level);
  let learned = 0;
  cards.forEach(card => {
    const p = Storage.getProgress(card.id);
    if (p && p.state === 'review' && p.reps > 0) learned++;
  });
  return { total: cards.length, learned, percent: cards.length ? Math.round(learned / cards.length * 100) : 0 };
}

function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m${s}s` : `${m}m`;
}

// ============================================================
//  Icônes SVG
// ============================================================
const Icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  cards: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  stats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
};

// ============================================================
//  Navigation
// ============================================================

function navigate(screen, params = {}) {
  State.screen = screen;
  Object.assign(State, params);
  render();
}

function goHome() { navigate('home'); }

// ============================================================
//  Rendu principal
// ============================================================

function render() {
  const content = document.getElementById('content');
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');

  // Header
  const showBack = !['home', 'browse', 'stats', 'settings'].includes(State.screen);
  const titles = {
    home: 'Español',
    level: State.selectedLevel || 'Niveau',
    review: 'Révision',
    browse: 'Parcourir',
    stats: 'Statistiques',
    settings: 'Réglages',
    addCard: 'Nouvelle carte',
    importExport: 'Import / Export'
  };

  header.innerHTML = `
    ${showBack ? `<button class="back-btn" onclick="window.App.goBack()">${Icons.back}</button>` : '<div></div>'}
    <h1>${titles[State.screen] || 'Español'}</h1>
    <div class="header-right">
      ${State.screen === 'browse' ? `<button class="back-btn" onclick="window.App.navigate('addCard')">${Icons.plus}</button>` : ''}
    </div>
  `;

  // Content
  switch (State.screen) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'level': content.innerHTML = renderLevel(); break;
    case 'review': content.innerHTML = renderReview(); break;
    case 'browse': content.innerHTML = renderBrowse(); break;
    case 'stats': content.innerHTML = renderStats(); break;
    case 'settings': content.innerHTML = renderSettings(); break;
    case 'addCard': content.innerHTML = renderAddCard(); break;
    case 'importExport': content.innerHTML = renderImportExport(); break;
    default: content.innerHTML = renderHome();
  }

  // Nav
  const isReview = State.screen === 'review';
  nav.style.display = isReview ? 'none' : 'flex';
  const navItems = [
    { id: 'home', icon: Icons.home, label: 'Accueil' },
    { id: 'browse', icon: Icons.search, label: 'Parcourir' },
    { id: 'stats', icon: Icons.stats, label: 'Stats' },
    { id: 'settings', icon: Icons.settings, label: 'Réglages' },
  ];

  nav.innerHTML = navItems.map(item => `
    <button class="nav-item ${State.screen === item.id ? 'active' : ''}" onclick="window.App.navigate('${item.id}')">
      ${item.icon}
      <span>${item.label}</span>
    </button>
  `).join('');

  content.scrollTop = 0;
}

// ============================================================
//  Écran d'accueil
// ============================================================

function renderHome() {
  const { totalDue } = getDueCards();
  const streak = Storage.getStreak();
  const todayStats = Storage.getTodayStats();
  const settings = Storage.getSettings();
  const successRate = todayStats.reviewed > 0 ? Math.round(todayStats.correct / todayStats.reviewed * 100) : 0;

  const levels = ['A1', 'A2', 'B1', 'B2'];
  const levelNames = { A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Avancé' };

  return `
    <div class="home-screen fade-in">
      <div class="hero-card">
        <div class="due-count">${totalDue}</div>
        <div class="due-label">carte${totalDue !== 1 ? 's' : ''} à réviser</div>
        ${totalDue > 0 ? `<button class="btn-start" onclick="window.App.startReview()">Commencer</button>` : `<button class="btn-start" style="opacity:0.5">Tout est révisé !</button>`}
      </div>

      <div class="streak-bar">
        <span class="streak-fire">🔥</span>
        <span>Série : <span class="streak-num">${streak.current}</span> jour${streak.current !== 1 ? 's' : ''}</span>
        ${streak.longest > streak.current ? `<span style="color:var(--text-dim);font-size:0.8rem">(record : ${streak.longest})</span>` : ''}
      </div>

      <div class="section-title">Aujourd'hui</div>
      <div class="today-stats">
        <div class="stat-box">
          <div class="stat-value">${todayStats.reviewed}</div>
          <div class="stat-label">Révisées</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${successRate}%</div>
          <div class="stat-label">Réussite</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${formatTime(todayStats.time)}</div>
          <div class="stat-label">Temps</div>
        </div>
      </div>

      <div class="section-title">Niveaux</div>
      <div class="levels-grid">
        ${levels.map(level => {
          const prog = getLevelProgress(level);
          const active = settings.activeLevels.includes(level);
          return `
            <div class="level-card ${active ? '' : 'locked'}" onclick="window.App.navigate('level', {selectedLevel:'${level}'})">
              <div class="level-name ${level.toLowerCase()}">${level}</div>
              <div class="level-desc">${levelNames[level]}</div>
              <div class="level-progress-text">${prog.learned} / ${prog.total} mots (${prog.percent}%)</div>
              <div class="progress-bar">
                <div class="progress-bar-fill ${level.toLowerCase()}" style="width:${prog.percent}%"></div>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
//  Écran de niveau (catégories)
// ============================================================

function renderLevel() {
  const level = State.selectedLevel;
  const cards = getCardsByLevel(level);
  const cats = CATEGORIES[level] || {};
  const levelNames = { A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Avancé' };

  // Compter les cartes dues par catégorie
  const catStats = {};
  Object.keys(cats).forEach(catKey => {
    const catCards = cards.filter(c => c.cat === catKey);
    let due = 0, total = catCards.length, learned = 0;
    catCards.forEach(c => {
      const p = Storage.getProgress(c.id);
      if (!p) due++;
      else if (SRS.isDue(p)) due++;
      if (p && p.state === 'review' && p.reps > 0) learned++;
    });
    catStats[catKey] = { due, total, learned };
  });

  const totalDue = Object.values(catStats).reduce((s, c) => s + c.due, 0);

  return `
    <div class="level-screen fade-in">
      <div class="level-header">
        <div class="level-badge" style="color:var(--${level === 'A1' ? 'success' : level === 'A2' ? '' : level === 'B1' ? 'gold' : 'accent'})">${level}</div>
        <div class="level-info">
          <h2>${levelNames[level]}</h2>
          <p>${cards.length} mots · ${totalDue} à réviser</p>
        </div>
      </div>

      <button class="btn-review-all" onclick="window.App.startReview('${level}')">
        Réviser tout le niveau (${totalDue})
      </button>

      <div class="cat-list">
        ${Object.entries(cats).map(([key, name]) => {
          const s = catStats[key] || { due: 0, total: 0, learned: 0 };
          return `
            <div class="cat-item" onclick="window.App.startReview('${level}','${key}')">
              <div>
                <div class="cat-name">${name}</div>
                <div style="font-size:0.75rem;color:var(--text-dim)">${s.learned}/${s.total} appris</div>
              </div>
              <div class="cat-count">${s.due > 0 ? `<span style="color:var(--accent)">${s.due}</span>` : '✓'}</div>
            </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
//  Session de révision
// ============================================================

function startReview(level, category) {
  const settings = Storage.getSettings();
  let cards;

  if (level && category) {
    cards = getCardsByLevel(level).filter(c => c.cat === category);
  } else if (level) {
    cards = getCardsByLevel(level);
  } else {
    // Toutes les cartes dues
    const { dueCards, newCards } = getDueCards();
    cards = [...dueCards.map(c => ({ card: c, isNew: false })), ...newCards.map(c => ({ card: c, isNew: true }))];

    State.reviewSession = createSession(cards);
    navigate('review');
    return;
  }

  // Filtrer les cartes dues pour ce niveau/catégorie
  const sessionCards = [];
  const newToday = Storage.getNewCardsToday();
  let newCount = 0;

  cards.forEach(card => {
    const progress = Storage.getProgress(card.id);
    if (!progress) {
      if (newCount + newToday < settings.newCardsPerDay) {
        sessionCards.push({ card, isNew: true });
        newCount++;
      }
    } else if (SRS.isDue(progress)) {
      sessionCards.push({ card, isNew: false });
    }
  });

  if (sessionCards.length === 0) {
    showToast('Aucune carte à réviser !');
    return;
  }

  State.reviewSession = createSession(sessionCards);
  navigate('review');
}

function createSession(items) {
  // Mélanger les cartes
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  return {
    queue: shuffled,
    currentIndex: 0,
    revealed: false,
    totalCards: shuffled.length,
    reviewed: 0,
    correct: 0,
    startTime: Date.now(),
    cardStartTime: Date.now()
  };
}

function renderReview() {
  const session = State.reviewSession;
  if (!session) return renderHome();

  // Session terminée
  if (session.currentIndex >= session.queue.length) {
    return renderSessionComplete();
  }

  const { card, isNew } = session.queue[session.currentIndex];
  const progress = Storage.getProgress(card.id) || SRS.createNewProgress(card.id);
  const level = getCardLevel(card);
  const catName = (CATEGORIES[level] && CATEGORIES[level][card.cat]) || card.cat || '';
  const intervals = SRS.getNextIntervals(progress);
  const pct = session.totalCards > 0 ? Math.round(session.reviewed / session.totalCards * 100) : 0;

  if (!session.revealed) {
    return `
      <div class="review-screen fade-in">
        <div class="review-progress">
          <span>${session.reviewed + 1}/${session.totalCards}</span>
          <div class="review-progress-bar"><div class="review-progress-bar-fill" style="width:${pct}%"></div></div>
          <span>${isNew ? '🆕' : ''}</span>
        </div>
        <div class="flashcard" onclick="window.App.revealCard()">
          <span class="card-level-tag tag-${level.toLowerCase()}">${level}</span>
          <div class="card-category">${catName}</div>
          <div class="card-word">${card.es}</div>
          <div class="tap-hint">Touche pour voir la réponse</div>
        </div>
        <div class="answer-buttons" style="visibility:hidden">
          <button class="answer-btn again"><span class="btn-label">Encore</span></button>
          <button class="answer-btn hard"><span class="btn-label">Difficile</span></button>
          <button class="answer-btn good"><span class="btn-label">Bon</span></button>
          <button class="answer-btn easy"><span class="btn-label">Facile</span></button>
        </div>
      </div>`;
  }

  // Carte révélée
  const settings = Storage.getSettings();
  return `
    <div class="review-screen fade-in">
      <div class="review-progress">
        <span>${session.reviewed + 1}/${session.totalCards}</span>
        <div class="review-progress-bar"><div class="review-progress-bar-fill" style="width:${pct}%"></div></div>
        <span>${isNew ? '🆕' : ''}</span>
      </div>
      <div class="flashcard" style="cursor:default">
        <span class="card-level-tag tag-${level.toLowerCase()}">${level}</span>
        <div class="card-category">${catName}</div>
        <div class="card-word">${card.es}</div>
        <div class="card-divider"></div>
        <div class="card-translation">${card.fr}</div>
        ${settings.showExample && card.exEs ? `
          <div class="card-example">
            <div class="example-es">${card.exEs}</div>
            <div>${card.exFr}</div>
          </div>` : ''}
      </div>
      <div class="answer-buttons">
        <button class="answer-btn again" onclick="window.App.answerCard(0)">
          <span class="btn-label">Encore</span>
          <span class="btn-interval">${intervals[0]}</span>
        </button>
        <button class="answer-btn hard" onclick="window.App.answerCard(1)">
          <span class="btn-label">Difficile</span>
          <span class="btn-interval">${intervals[1]}</span>
        </button>
        <button class="answer-btn good" onclick="window.App.answerCard(2)">
          <span class="btn-label">Bon</span>
          <span class="btn-interval">${intervals[2]}</span>
        </button>
        <button class="answer-btn easy" onclick="window.App.answerCard(3)">
          <span class="btn-label">Facile</span>
          <span class="btn-interval">${intervals[3]}</span>
        </button>
      </div>
    </div>`;
}

function revealCard() {
  if (State.reviewSession) {
    State.reviewSession.revealed = true;
    render();
  }
}

function answerCard(quality) {
  const session = State.reviewSession;
  if (!session) return;

  const { card, isNew } = session.queue[session.currentIndex];
  let progress = Storage.getProgress(card.id) || SRS.createNewProgress(card.id);

  // Calculer le temps passé sur cette carte
  const seconds = Math.round((Date.now() - session.cardStartTime) / 1000);

  // Appliquer l'algorithme SM-2
  progress = SRS.processAnswer(progress, quality);
  Storage.saveProgress(card.id, progress);

  // Enregistrer la statistique
  Storage.recordReview(quality, isNew, seconds);

  // Mettre à jour la série
  Storage.updateStreak();

  session.reviewed++;
  if (quality >= 2) session.correct++;

  // Si la carte est encore en apprentissage, la remettre dans la file
  if (progress.state === 'learning' || progress.state === 'relearning') {
    // Ajouter à la fin de la file
    session.queue.push({ card, isNew: false });
    session.totalCards++;
  }

  session.currentIndex++;
  session.revealed = false;
  session.cardStartTime = Date.now();

  render();
}

function renderSessionComplete() {
  const session = State.reviewSession;
  const totalTime = Math.round((Date.now() - session.startTime) / 1000);
  const successRate = session.reviewed > 0 ? Math.round(session.correct / session.reviewed * 100) : 0;

  return `
    <div class="session-complete fade-in">
      <div class="complete-icon">🎉</div>
      <h2>Session terminée !</h2>
      <p>Excellent travail, continue comme ça !</p>
      <div class="session-stats">
        <div class="session-stat">
          <div class="stat-value">${session.reviewed}</div>
          <div class="stat-label">Cartes révisées</div>
        </div>
        <div class="session-stat">
          <div class="stat-value">${successRate}%</div>
          <div class="stat-label">Réussite</div>
        </div>
        <div class="session-stat">
          <div class="stat-value">${formatTime(totalTime)}</div>
          <div class="stat-label">Temps</div>
        </div>
        <div class="session-stat">
          <div class="stat-value" style="color:var(--gold)">🔥 ${Storage.getStreak().current}</div>
          <div class="stat-label">Série</div>
        </div>
      </div>
      <button class="btn-action primary" onclick="window.App.goHome()">Retour à l'accueil</button>
    </div>`;
}

// ============================================================
//  Écran Parcourir
// ============================================================

function renderBrowse() {
  const levels = ['all', 'A1', 'A2', 'B1', 'B2', 'custom'];
  const levelLabels = { all: 'Tout', A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2', custom: 'Perso' };

  let cards = State.browseFilter === 'all'
    ? getAllCards()
    : getCardsByLevel(State.browseFilter);

  // Filtre par recherche
  if (State.browseSearch) {
    const q = State.browseSearch.toLowerCase();
    cards = cards.filter(c =>
      c.es.toLowerCase().includes(q) ||
      c.fr.toLowerCase().includes(q) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  return `
    <div class="browse-screen fade-in">
      <div class="search-bar">
        ${Icons.search}
        <input type="text" placeholder="Rechercher un mot..." value="${State.browseSearch}" oninput="window.App.onBrowseSearch(this.value)"/>
      </div>

      <div class="filter-row">
        ${levels.map(l => `
          <button class="filter-chip ${State.browseFilter === l ? 'active' : ''}" onclick="window.App.onBrowseFilter('${l}')">
            ${levelLabels[l]}
          </button>`).join('')}
      </div>

      <div class="word-list">
        ${cards.length === 0 ? `
          <div class="empty-state">
            ${Icons.search}
            <p>Aucun mot trouvé</p>
          </div>` : ''}
        ${cards.slice(0, 100).map(card => {
          const progress = Storage.getProgress(card.id);
          const state = progress ? progress.state : 'new';
          return `
            <div class="word-item">
              <div>
                <div class="word-es">${card.es}</div>
                <div class="word-fr">${card.fr}</div>
              </div>
              <div class="word-state ${state}"></div>
            </div>`;
        }).join('')}
        ${cards.length > 100 ? `<div style="text-align:center;padding:12px;color:var(--text-dim);font-size:0.8rem">... et ${cards.length - 100} autres mots</div>` : ''}
      </div>
    </div>`;
}

function onBrowseSearch(value) {
  State.browseSearch = value;
  // Debounce le rendu
  clearTimeout(State._searchTimeout);
  State._searchTimeout = setTimeout(() => render(), 200);
}

function onBrowseFilter(level) {
  State.browseFilter = level;
  render();
}

// ============================================================
//  Écran Statistiques
// ============================================================

function renderStats() {
  const global = Storage.getGlobalStats();
  const week = Storage.getWeekStats();
  const streak = Storage.getStreak();
  const today = Storage.getTodayKey();
  const allProgress = Storage.getAllProgress();

  // Compter par état
  const allCards = getAllCards();
  let stateNew = 0, stateLearning = 0, stateReview = 0, stateRelearning = 0;
  allCards.forEach(card => {
    const p = allProgress[card.id];
    if (!p) stateNew++;
    else if (p.state === 'learning') stateLearning++;
    else if (p.state === 'review') stateReview++;
    else if (p.state === 'relearning') stateRelearning++;
    else stateNew++;
  });

  const maxDay = Math.max(1, ...week.map(d => d.reviewed || 0));
  const globalRate = global.totalReviewed > 0 ? Math.round(global.totalCorrect / global.totalReviewed * 100) : 0;

  return `
    <div class="stats-screen fade-in">
      <div class="stats-overview">
        <div class="stats-card">
          <div class="stat-value">${global.totalReviewed}</div>
          <div class="stat-label">Révisions totales</div>
        </div>
        <div class="stats-card">
          <div class="stat-value">${globalRate}%</div>
          <div class="stat-label">Taux de réussite</div>
        </div>
        <div class="stats-card">
          <div class="stat-value">${formatTime(global.totalTime)}</div>
          <div class="stat-label">Temps total</div>
        </div>
        <div class="stats-card">
          <div class="stat-value" style="color:var(--gold)">${streak.longest}</div>
          <div class="stat-label">Record série</div>
        </div>
      </div>

      <div class="week-chart">
        <h3>Cette semaine</h3>
        <div class="chart-bars">
          ${week.map(d => {
            const h = d.reviewed > 0 ? Math.max(4, Math.round((d.reviewed / maxDay) * 100)) : 2;
            return `
              <div class="chart-bar-col">
                <div class="chart-bar-count">${d.reviewed || ''}</div>
                <div class="chart-bar ${d.date === today ? 'today' : ''}" style="height:${h}%"></div>
                <div class="chart-bar-label">${d.dayName}</div>
              </div>`;
          }).join('')}
        </div>
      </div>

      <div class="state-dist">
        <h3>Répartition des cartes</h3>
        <div class="state-row">
          <div class="state-dot" style="background:var(--text-dim)"></div>
          <div class="state-name">Nouvelles</div>
          <div class="state-count">${stateNew}</div>
        </div>
        <div class="state-row">
          <div class="state-dot" style="background:var(--warning)"></div>
          <div class="state-name">En apprentissage</div>
          <div class="state-count">${stateLearning}</div>
        </div>
        <div class="state-row">
          <div class="state-dot" style="background:var(--success)"></div>
          <div class="state-name">Apprises</div>
          <div class="state-count">${stateReview}</div>
        </div>
        <div class="state-row">
          <div class="state-dot" style="background:var(--danger)"></div>
          <div class="state-name">Réapprentissage</div>
          <div class="state-count">${stateRelearning}</div>
        </div>
      </div>
    </div>`;
}

// ============================================================
//  Écran Réglages
// ============================================================

function renderSettings() {
  const settings = Storage.getSettings();
  const levels = ['A1', 'A2', 'B1', 'B2'];

  return `
    <div class="settings-screen fade-in">
      <div class="setting-group">
        <div class="setting-group-title">Apprentissage</div>
        <div class="setting-item">
          <label>Nouvelles cartes / jour</label>
          <input type="number" value="${settings.newCardsPerDay}" min="1" max="100" onchange="window.App.updateSetting('newCardsPerDay', parseInt(this.value))"/>
        </div>
        <div class="setting-item">
          <label>Limite révisions / jour</label>
          <input type="number" value="${settings.reviewsPerDay}" min="10" max="999" onchange="window.App.updateSetting('reviewsPerDay', parseInt(this.value))"/>
        </div>
        <div class="setting-item">
          <label>Afficher les exemples</label>
          <label class="toggle">
            <input type="checkbox" ${settings.showExample ? 'checked' : ''} onchange="window.App.updateSetting('showExample', this.checked)"/>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div class="setting-group">
        <div class="setting-group-title">Niveaux actifs</div>
        ${levels.map(level => `
          <div class="setting-item">
            <label>${level}</label>
            <label class="toggle">
              <input type="checkbox" ${settings.activeLevels.includes(level) ? 'checked' : ''}
                onchange="window.App.toggleLevel('${level}', this.checked)"/>
              <span class="toggle-slider"></span>
            </label>
          </div>`).join('')}
      </div>

      <div class="setting-group">
        <div class="setting-group-title">Données</div>
        <div class="setting-item" style="flex-direction:column;gap:10px;align-items:stretch">
          <button class="btn-action secondary" onclick="window.App.navigate('importExport')">
            Import / Export
          </button>
          <button class="btn-action danger" onclick="window.App.confirmReset()">
            Réinitialiser la progression
          </button>
        </div>
      </div>

      <div style="text-align:center;padding:20px;color:var(--text-dim);font-size:0.75rem">
        Español v1.0 · ${getAllCards().length} mots
      </div>
    </div>`;
}

function updateSetting(key, value) {
  const settings = Storage.getSettings();
  settings[key] = value;
  Storage.saveSettings(settings);
}

function toggleLevel(level, active) {
  const settings = Storage.getSettings();
  if (active && !settings.activeLevels.includes(level)) {
    settings.activeLevels.push(level);
  } else if (!active) {
    settings.activeLevels = settings.activeLevels.filter(l => l !== level);
  }
  Storage.saveSettings(settings);
}

function confirmReset() {
  showModal(
    'Réinitialiser',
    'Toute ta progression sera perdue. Es-tu sûr ?',
    () => {
      Storage.resetAll();
      showToast('Progression réinitialisée');
      navigate('settings');
    }
  );
}

// ============================================================
//  Écran Ajouter une carte
// ============================================================

function renderAddCard() {
  return `
    <div class="add-card-screen fade-in">
      <div class="form-group">
        <label>Mot en espagnol</label>
        <input type="text" id="add-es" placeholder="ej: mariposa"/>
      </div>
      <div class="form-group">
        <label>Traduction en français</label>
        <input type="text" id="add-fr" placeholder="ej: papillon"/>
      </div>
      <div class="form-group">
        <label>Exemple en espagnol (optionnel)</label>
        <textarea id="add-exEs" placeholder="ej: La mariposa vuela por el jardín."></textarea>
      </div>
      <div class="form-group">
        <label>Exemple en français (optionnel)</label>
        <textarea id="add-exFr" placeholder="ej: Le papillon vole dans le jardin."></textarea>
      </div>
      <div class="form-group">
        <label>Catégorie</label>
        <input type="text" id="add-cat" placeholder="ej: nature"/>
      </div>
      <div class="form-group">
        <label>Tags (séparés par des virgules)</label>
        <input type="text" id="add-tags" placeholder="ej: animal, nature"/>
      </div>
      <button class="btn-action primary" onclick="window.App.saveCustomCard()">Ajouter la carte</button>
    </div>`;
}

function saveCustomCard() {
  const es = document.getElementById('add-es')?.value?.trim();
  const fr = document.getElementById('add-fr')?.value?.trim();
  const exEs = document.getElementById('add-exEs')?.value?.trim();
  const exFr = document.getElementById('add-exFr')?.value?.trim();
  const cat = document.getElementById('add-cat')?.value?.trim() || 'personnalisé';
  const tagsRaw = document.getElementById('add-tags')?.value?.trim();
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  if (!es || !fr) {
    showToast('Le mot et sa traduction sont obligatoires');
    return;
  }

  Storage.addCustomCard({ es, fr, exEs, exFr, cat, tags });
  showToast('Carte ajoutée !');
  navigate('browse');
}

// ============================================================
//  Écran Import / Export
// ============================================================

function renderImportExport() {
  return `
    <div class="settings-screen fade-in">
      <div class="section-title">Exporter</div>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:12px">
        Sauvegarde toute ta progression, tes cartes personnalisées et tes réglages.
      </p>
      <button class="btn-action secondary" onclick="window.App.exportData()">
        ${Icons.download} Exporter (JSON)
      </button>

      <div class="section-title" style="margin-top:24px">Importer</div>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:12px">
        Restaure une sauvegarde précédente. Attention : cela remplacera tes données actuelles.
      </p>
      <div class="import-zone" onclick="document.getElementById('import-file').click()">
        ${Icons.upload}
        <p>Touche pour sélectionner un fichier JSON</p>
      </div>
      <input type="file" id="import-file" class="hidden-input" accept=".json" onchange="window.App.importData(this)"/>

      <div class="section-title" style="margin-top:24px">Exporter en CSV</div>
      <button class="btn-action secondary" onclick="window.App.exportCSV()">
        ${Icons.download} Exporter le vocabulaire (CSV)
      </button>
    </div>`;
}

function exportData() {
  const data = Storage.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `espanol_backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Données exportées !');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const success = Storage.importData(e.target.result);
    if (success) {
      showToast('Données importées avec succès !');
      navigate('home');
    } else {
      showToast('Erreur lors de l\'import');
    }
  };
  reader.readAsText(file);
}

function exportCSV() {
  const cards = getAllCards();
  let csv = 'espagnol;français;exemple_es;exemple_fr;niveau;catégorie;tags\n';
  cards.forEach(c => {
    const level = getCardLevel(c);
    const tags = (c.tags || []).join(',');
    csv += `"${c.es}";"${c.fr}";"${c.exEs || ''}";"${c.exFr || ''}";"${level}";"${c.cat || ''}";"${tags}"\n`;
  });
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `espanol_vocab_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exporté !');
}

// ============================================================
//  Modal & Toast
// ============================================================

let modalCallback = null;

function showModal(title, message, onConfirm) {
  modalCallback = onConfirm;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="modal-actions">
        <button class="btn-cancel" onclick="window.App.closeModal()">Annuler</button>
        <button class="btn-confirm" onclick="window.App.confirmModal()">Confirmer</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.remove();
  modalCallback = null;
}

function confirmModal() {
  if (modalCallback) modalCallback();
  closeModal();
}

function showToast(message) {
  // Supprimer tout toast existant
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ============================================================
//  Navigation arrière
// ============================================================

function goBack() {
  switch (State.screen) {
    case 'level': navigate('home'); break;
    case 'review':
      if (State.reviewSession && State.reviewSession.reviewed > 0) {
        showModal('Quitter la session ?', 'Ta progression de cette session sera conservée.', () => goHome());
      } else {
        goHome();
      }
      break;
    case 'addCard': navigate('browse'); break;
    case 'importExport': navigate('settings'); break;
    default: navigate('home');
  }
}

// ============================================================
//  Raccourcis clavier (pour desktop)
// ============================================================

function handleKeyboard(e) {
  if (State.screen !== 'review' || !State.reviewSession) return;
  if (State.reviewSession.currentIndex >= State.reviewSession.queue.length) return;

  if (!State.reviewSession.revealed) {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      revealCard();
    }
  } else {
    switch (e.code) {
      case 'Digit1': case 'Numpad1': answerCard(0); break;
      case 'Digit2': case 'Numpad2': answerCard(1); break;
      case 'Digit3': case 'Numpad3': answerCard(2); break;
      case 'Digit4': case 'Numpad4': answerCard(3); break;
      case 'Space': case 'Enter': answerCard(2); break; // Bon par défaut
    }
  }
}

// ============================================================
//  Init
// ============================================================

function init() {
  // Exposer les fonctions pour les onclick inline
  window.App = {
    navigate,
    goHome,
    goBack,
    startReview,
    revealCard,
    answerCard,
    onBrowseSearch,
    onBrowseFilter,
    updateSetting,
    toggleLevel,
    confirmReset,
    saveCustomCard,
    exportData,
    importData,
    exportCSV,
    closeModal,
    confirmModal,
  };

  // Écouter le clavier
  document.addEventListener('keydown', handleKeyboard);

  // Gérer le bouton retour du navigateur
  window.addEventListener('popstate', () => {
    if (State.screen !== 'home') {
      goBack();
    }
  });

  // Premier rendu
  render();
}

// Démarrer l'app quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
