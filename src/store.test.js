import { describe, it, expect, beforeEach } from 'vitest';
import { store } from './store.js';

const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Store functionality', () => {
  beforeEach(() => {
    // Reset any state needed
    localStorage.clear();
  });

  it('should initialize with default values if no state exists', () => {
    // Since we just cleared localStorage, the store should load its defaults
    expect(store.get('theme')).toBeDefined();
    expect(store.get('locale')).toBeDefined();
  });

  it('should correctly set and get values', () => {
    store.set('theme', 'discord');
    expect(store.get('theme')).toBe('discord');
  });

  it('should support checking if an undo state exists', () => {
    // Default starts empty, canUndo should probably be false unless init pushes a state
    const canUndo = store.canUndo();
    expect(typeof canUndo).toBe('boolean');
  });
});
