'use strict';

/**
 * Keeps track of all the individual mobs in the game
 */
class MobManager {
  constructor() {
    this.mobs = new Map();
  }

  /**
   * @param {Mob} mob
   */
  addMob(mob) {
    this.mobs.set(mob.uuid, mob);
  }

  /**
   * Find a mob by name prefix match with optional predicate filter
   * @param {string} search - Name prefix to search for
   * @param {function} predicate - Optional filter function
   * @return {Mob|undefined}
   */
  find(search, predicate) {
    for (const mob of this.mobs.values()) {
      if (mob.name.indexOf(search) === 0) {
        if (predicate && !predicate(mob)) {
          continue;
        }
        return mob;
      }
    }
  }

  /**
   * Completely obliterate a mob from the game, nuclear option
   * @param {Mob} mob
   */
  removeMob(mob) {
    mob.effects.clear();
    const room = mob.room;
    if (room) {
      room.area.removeNpc(mob);
      room.removeNpc(mob, true);
    }
    mob.__pruned = true;
    mob.removeAllListeners();
    this.mobs.delete(mob.uuid);
  }
}

module.exports = MobManager;
