// Gestion du stockage local (localStorage)
// Persiste la progression, les paramètres, les stats et les cartes personnalisées

const KEYS = {
  PROGRESS: 'esp_progress',
  SETTINGS: 'esp_settings',
  STATS: 'esp_stats',
  STREAK: 'esp_streak',
  CUSTOM_CARDS: 'esp_custom_cards'
};

const DEFAULT_SETTINGS = {
  newCardsPerDay: 20,
  reviewsPerDay: 200,
  activeLevels: ['A1'],
  showExample: true
};

const Storage = {
  // === PROGRESSION DES CARTES ===

  getAllProgress() {
    return JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{}');
  },

  getProgress(cardId) {
    const all = this.getAllProgress();
    return all[cardId] || null;
  },

  saveProgress(cardId, progress) {
    const all = this.getAllProgress();
    all[cardId] = progress;
    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(all));
  },

  // === PARAMÈTRES ===

  getSettings() {
    const saved = JSON.parse(localStorage.getItem(KEYS.SETTINGS) || 'null');
    return { ...DEFAULT_SETTINGS, ...saved };
  },

  saveSettings(settings) {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  },

  // === STATISTIQUES QUOTIDIENNES ===

  getTodayKey() {
    return new Date().toISOString().split('T')[0];
  },

  getAllStats() {
    return JSON.parse(localStorage.getItem(KEYS.STATS) || '{}');
  },

  getTodayStats() {
    const all = this.getAllStats();
    const today = this.getTodayKey();
    return all[today] || { reviewed: 0, correct: 0, again: 0, hard: 0, good: 0, easy: 0, time: 0, newLearned: 0 };
  },

  recordReview(quality, wasNew, seconds) {
    const all = this.getAllStats();
    const today = this.getTodayKey();
    if (!all[today]) {
      all[today] = { reviewed: 0, correct: 0, again: 0, hard: 0, good: 0, easy: 0, time: 0, newLearned: 0 };
    }
    const s = all[today];
    s.reviewed++;
    s.time += seconds || 0;
    if (quality >= 2) s.correct++;
    if (quality === 0) s.again++;
    if (quality === 1) s.hard++;
    if (quality === 2) s.good++;
    if (quality === 3) s.easy++;
    if (wasNew) s.newLearned++;
    localStorage.setItem(KEYS.STATS, JSON.stringify(all));
  },

  // Statistiques des 7 derniers jours
  getWeekStats() {
    const all = this.getAllStats();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      days.push({
        date: key,
        dayName: d.toLocaleDateString('fr-FR', { weekday: 'short' }),
        ...(all[key] || { reviewed: 0, correct: 0, time: 0 })
      });
    }
    return days;
  },

  // Statistiques globales
  getGlobalStats() {
    const all = this.getAllStats();
    let totalReviewed = 0, totalCorrect = 0, totalTime = 0, totalDays = 0;
    Object.values(all).forEach(s => {
      if (s.reviewed > 0) {
        totalReviewed += s.reviewed;
        totalCorrect += s.correct;
        totalTime += s.time;
        totalDays++;
      }
    });
    return { totalReviewed, totalCorrect, totalTime, totalDays };
  },

  // === SÉRIE (STREAK) ===

  getStreak() {
    return JSON.parse(localStorage.getItem(KEYS.STREAK) || '{"current":0,"longest":0,"lastDate":null}');
  },

  updateStreak() {
    const streak = this.getStreak();
    const today = this.getTodayKey();

    if (streak.lastDate === today) return streak; // Déjà mis à jour aujourd'hui

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().split('T')[0];

    if (streak.lastDate === yesterdayKey) {
      streak.current++;
    } else if (streak.lastDate !== today) {
      streak.current = 1;
    }

    streak.lastDate = today;
    streak.longest = Math.max(streak.longest, streak.current);
    localStorage.setItem(KEYS.STREAK, JSON.stringify(streak));
    return streak;
  },

  // === CARTES PERSONNALISÉES ===

  getCustomCards() {
    return JSON.parse(localStorage.getItem(KEYS.CUSTOM_CARDS) || '[]');
  },

  addCustomCard(card) {
    const cards = this.getCustomCards();
    card.id = 'custom_' + Date.now();
    card.level = 'custom';
    cards.push(card);
    localStorage.setItem(KEYS.CUSTOM_CARDS, JSON.stringify(cards));
    return card;
  },

  updateCustomCard(id, updates) {
    const cards = this.getCustomCards();
    const idx = cards.findIndex(c => c.id === id);
    if (idx !== -1) {
      cards[idx] = { ...cards[idx], ...updates };
      localStorage.setItem(KEYS.CUSTOM_CARDS, JSON.stringify(cards));
    }
  },

  deleteCustomCard(id) {
    const cards = this.getCustomCards().filter(c => c.id !== id);
    localStorage.setItem(KEYS.CUSTOM_CARDS, JSON.stringify(cards));
    // Supprimer aussi la progression
    const all = this.getAllProgress();
    delete all[id];
    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(all));
  },

  // === IMPORT / EXPORT ===

  exportData() {
    return JSON.stringify({
      version: 1,
      date: new Date().toISOString(),
      progress: this.getAllProgress(),
      settings: this.getSettings(),
      stats: this.getAllStats(),
      streak: this.getStreak(),
      customCards: this.getCustomCards()
    }, null, 2);
  },

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.progress) localStorage.setItem(KEYS.PROGRESS, JSON.stringify(data.progress));
      if (data.settings) localStorage.setItem(KEYS.SETTINGS, JSON.stringify(data.settings));
      if (data.stats) localStorage.setItem(KEYS.STATS, JSON.stringify(data.stats));
      if (data.streak) localStorage.setItem(KEYS.STREAK, JSON.stringify(data.streak));
      if (data.customCards) localStorage.setItem(KEYS.CUSTOM_CARDS, JSON.stringify(data.customCards));
      return true;
    } catch (e) {
      console.error('Erreur import:', e);
      return false;
    }
  },

  // Nombre de nouvelles cartes apprises aujourd'hui
  getNewCardsToday() {
    return this.getTodayStats().newLearned || 0;
  },

  // Réinitialisation complète
  resetAll() {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  }
};

export default Storage;
