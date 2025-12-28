'use strict';

const ItemType = require('./ItemType');

/**
 * Keep track of all items in game
 */
class ItemManager {
  constructor() {
    this.items = new Set();
  }

  add(item) {
    this.items.add(item);
  }

  remove(item) {
    if (item.room) {
      item.room.removeItem(item);
    }

    if (item.carriedBy) {
      item.carriedBy.removeItem(item);
    }

    if (item.type === ItemType.CONTAINER && item.inventory) {
      item.inventory.forEach(childItem => this.remove(childItem));
    }

    item.__pruned = true;
    item.removeAllListeners();
    this.items.delete(item);
  }

  /**
   * Find an item by name prefix match with optional predicate filter
   * @param {string} search - Name prefix to search for
   * @param {function} predicate - Optional filter function
   * @return {Item|undefined}
   */
  find(search, predicate) {
    for (const item of this.items) {
      if (item.name.indexOf(search) === 0) {
        if (predicate && !predicate(item)) {
          continue;
        }
        return item;
      }
    }
  }

  /**
   * @fires Item#updateTick
   */
  tickAll() {
    for (const item of this.items) {
      /**
       * @event Item#updateTick
       */
      item.emit('updateTick');
    }
  }
}

module.exports = ItemManager;
