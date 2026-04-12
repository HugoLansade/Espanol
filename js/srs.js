// SM-2 Spaced Repetition Algorithm
// Adapté de l'algorithme SuperMemo SM-2

const SRS = {
  // Étapes d'apprentissage en minutes
  LEARNING_STEPS: [1, 10],
  RELEARNING_STEPS: [10],
  GRADUATING_INTERVAL: 1, // jours
  EASY_INTERVAL: 4, // jours
  DEFAULT_EASE: 2.5,
  MIN_EASE: 1.3,
  EASY_BONUS: 1.3,
  HARD_INTERVAL_MULTIPLIER: 1.2,
  LAPSE_NEW_INTERVAL: 0.7, // % de l'ancien intervalle après oubli

  // Réponses utilisateur
  AGAIN: 0,
  HARD: 1,
  GOOD: 2,
  EASY: 3,

  createNewProgress(cardId) {
    return {
      cardId,
      state: 'new',     // new, learning, review, relearning
      step: 0,           // étape actuelle (pour learning/relearning)
      interval: 0,       // intervalle en jours
      ease: this.DEFAULT_EASE,
      reps: 0,           // nombre de révisions réussies consécutives
      lapses: 0,         // nombre d'oublis
      nextReview: null,   // date ISO de prochaine révision
      lastReview: null,
      dueInMinutes: 0    // pour les cartes en apprentissage (délai en min)
    };
  },

  // Traite la réponse de l'utilisateur et retourne le progrès mis à jour
  processAnswer(progress, quality) {
    const now = new Date();
    const updated = { ...progress, lastReview: now.toISOString() };

    switch (updated.state) {
      case 'new':
      case 'learning':
        return this._processLearning(updated, quality);
      case 'review':
        return this._processReview(updated, quality);
      case 'relearning':
        return this._processRelearning(updated, quality);
      default:
        return this._processLearning(updated, quality);
    }
  },

  _processLearning(p, quality) {
    const steps = this.LEARNING_STEPS;

    switch (quality) {
      case this.AGAIN:
        p.step = 0;
        p.state = 'learning';
        p.dueInMinutes = steps[0];
        break;

      case this.HARD:
        // Reste à l'étape actuelle
        p.state = 'learning';
        p.dueInMinutes = steps[Math.min(p.step, steps.length - 1)];
        break;

      case this.GOOD:
        if (p.step >= steps.length - 1) {
          // Diplômé ! Passe en révision
          p.state = 'review';
          p.interval = this.GRADUATING_INTERVAL;
          p.nextReview = this._addDays(new Date(), p.interval);
          p.reps = 1;
          p.dueInMinutes = 0;
        } else {
          p.step++;
          p.state = 'learning';
          p.dueInMinutes = steps[p.step];
        }
        break;

      case this.EASY:
        // Diplômé immédiatement avec intervalle facile
        p.state = 'review';
        p.interval = this.EASY_INTERVAL;
        p.nextReview = this._addDays(new Date(), p.interval);
        p.reps = 1;
        p.ease = Math.max(this.MIN_EASE, p.ease + 0.15);
        p.dueInMinutes = 0;
        break;
    }

    return p;
  },

  _processReview(p, quality) {
    switch (quality) {
      case this.AGAIN:
        p.lapses++;
        p.state = 'relearning';
        p.step = 0;
        p.dueInMinutes = this.RELEARNING_STEPS[0];
        p.ease = Math.max(this.MIN_EASE, p.ease - 0.20);
        p.interval = Math.max(1, Math.round(p.interval * this.LAPSE_NEW_INTERVAL));
        p.reps = 0;
        break;

      case this.HARD:
        p.interval = Math.max(p.interval + 1, Math.round(p.interval * this.HARD_INTERVAL_MULTIPLIER));
        p.ease = Math.max(this.MIN_EASE, p.ease - 0.15);
        p.nextReview = this._addDays(new Date(), p.interval);
        p.reps++;
        p.dueInMinutes = 0;
        break;

      case this.GOOD:
        p.interval = Math.max(p.interval + 1, Math.round(p.interval * p.ease));
        p.nextReview = this._addDays(new Date(), p.interval);
        p.reps++;
        p.dueInMinutes = 0;
        break;

      case this.EASY:
        p.interval = Math.max(p.interval + 1, Math.round(p.interval * p.ease * this.EASY_BONUS));
        p.ease = Math.max(this.MIN_EASE, p.ease + 0.15);
        p.nextReview = this._addDays(new Date(), p.interval);
        p.reps++;
        p.dueInMinutes = 0;
        break;
    }

    return p;
  },

  _processRelearning(p, quality) {
    const steps = this.RELEARNING_STEPS;

    switch (quality) {
      case this.AGAIN:
        p.step = 0;
        p.dueInMinutes = steps[0];
        break;

      case this.HARD:
        p.dueInMinutes = steps[Math.min(p.step, steps.length - 1)];
        break;

      case this.GOOD:
        // Retour en révision
        p.state = 'review';
        p.nextReview = this._addDays(new Date(), p.interval);
        p.reps = 1;
        p.dueInMinutes = 0;
        break;

      case this.EASY:
        p.state = 'review';
        p.interval = Math.max(p.interval, this.EASY_INTERVAL);
        p.nextReview = this._addDays(new Date(), p.interval);
        p.ease = Math.max(this.MIN_EASE, p.ease + 0.15);
        p.reps = 1;
        p.dueInMinutes = 0;
        break;
    }

    return p;
  },

  // Prédit le prochain intervalle pour chaque bouton
  getNextIntervals(progress) {
    const intervals = {};
    [this.AGAIN, this.HARD, this.GOOD, this.EASY].forEach(q => {
      const simulated = this.processAnswer({ ...progress }, q);
      if (simulated.dueInMinutes > 0) {
        intervals[q] = simulated.dueInMinutes < 60
          ? `${simulated.dueInMinutes}min`
          : `${Math.round(simulated.dueInMinutes / 60)}h`;
      } else if (simulated.interval > 0) {
        if (simulated.interval === 1) {
          intervals[q] = '1j';
        } else if (simulated.interval < 30) {
          intervals[q] = `${simulated.interval}j`;
        } else if (simulated.interval < 365) {
          intervals[q] = `${Math.round(simulated.interval / 30)}m`;
        } else {
          intervals[q] = `${(simulated.interval / 365).toFixed(1)}a`;
        }
      } else {
        intervals[q] = '<1min';
      }
    });
    return intervals;
  },

  // Vérifie si une carte est due pour révision
  isDue(progress) {
    if (!progress || progress.state === 'new') return false;
    if (progress.state === 'learning' || progress.state === 'relearning') return true;
    if (!progress.nextReview) return true;
    const now = new Date();
    const due = new Date(progress.nextReview);
    return now >= due;
  },

  _addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString();
  }
};

export default SRS;
