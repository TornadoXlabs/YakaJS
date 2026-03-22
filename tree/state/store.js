/*!
 * YakaJS - State management (Store pattern)
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

(function(window) {
    'use strict';
    
    // This is a YakaJS plugin
    const plugin = function(Yaka) {
        if (!Yaka) {
            console.error('YakaJS core is required. Please load yaka-core.js first.');
            return;
        }
        
        // Execute plugin code
            // ==================== 5. ADVANCED STATE MANAGEMENT (STORE) ====================

            Yaka.Store = class {
                constructor(options = {}) {
                    this._state = options.state || {};
                    this._getters = options.getters || {};
                    this._mutations = options.mutations || {};
                    this._actions = options.actions || {};
                    this._subscribers = [];
                    this._history = [];
                    this._historyIndex = -1;
                    this._maxHistory = options.maxHistory || 50;
                    this._plugins = options.plugins || [];
                    
                    // Make state reactive
                    this._makeReactive();
                    
                    // Run plugins
                    this._plugins.forEach(plugin => plugin(this));
                    
                    // Save initial state
                    this._saveHistory();
                }

                _makeReactive() {
                    const self = this;
                    this.state = new Proxy(this._state, {
                        set(target, key, value) {
                            const oldValue = target[key];
                            target[key] = value;
                            self._notify({ type: 'state', key, value, oldValue });
                            return true;
                        },
                        get(target, key) {
                            return target[key];
                        }
                    });
                }

                _notify(mutation) {
                    this._subscribers.forEach(fn => fn(mutation, this.state));
                }

                _saveHistory() {
                    // Remove future history if we've time-traveled
                    if (this._historyIndex < this._history.length - 1) {
                        this._history = this._history.slice(0, this._historyIndex + 1);
                    }

                    // Add current state to history
                    this._history.push(JSON.parse(JSON.stringify(this._state)));
                    
                    // Limit history size
                    if (this._history.length > this._maxHistory) {
                        this._history.shift();
                    } else {
                        this._historyIndex++;
                    }
                }

                // Getters
                get(name) {
                    const getter = this._getters[name];
                    if (!getter) {
                        Yaka._log('warn', `Getter not found: ${name}`);
                        return undefined;
                    }
                    return getter(this.state, this._getters);
                }

                // Mutations (synchronous state changes)
                commit(type, payload) {
                    const mutation = this._mutations[type];
                    if (!mutation) {
                        Yaka._log('error', `Mutation not found: ${type}`);
                        return;
                    }

                    Yaka._log('info', `Mutation: ${type}`, payload);
                    mutation(this._state, payload);
                    this._notify({ type: 'mutation', mutation: type, payload });
                    this._saveHistory();
                }

                // Actions (can be asynchronous)
                async dispatch(type, payload) {
                    const action = this._actions[type];
                    if (!action) {
                        Yaka._log('error', `Action not found: ${type}`);
                        return;
                    }

                    Yaka._log('info', `Action: ${type}`, payload);
                    const context = {
                        state: this.state,
                        commit: this.commit.bind(this),
                        dispatch: this.dispatch.bind(this),
                        getters: this._getters
                    };

                    return action(context, payload);
                }

                // Subscribe to state changes
                subscribe(fn) {
                    this._subscribers.push(fn);
                    return () => {
                        const index = this._subscribers.indexOf(fn);
                        if (index > -1) {
                            this._subscribers.splice(index, 1);
                        }
                    };
                }

                // Watch specific state property
                watch(key, callback) {
                    return this.subscribe((mutation, state) => {
                        if (mutation.key === key) {
                            callback(state[key], mutation.oldValue);
                        }
                    });
                }

                // Time travel debugging
                timeTravel(index) {
                    if (index < 0 || index >= this._history.length) {
                        Yaka._log('warn', 'Invalid history index');
                        return;
                    }

                    this._historyIndex = index;
                    this._state = JSON.parse(JSON.stringify(this._history[index]));
                    this._makeReactive();
                    this._notify({ type: 'timeTravel', index });
                    Yaka._log('info', `Time traveled to state #${index}`);
                }

                // Undo last mutation
                undo() {
                    if (this._historyIndex > 0) {
                        this.timeTravel(this._historyIndex - 1);
                    }
                }

                // Redo mutation
                redo() {
                    if (this._historyIndex < this._history.length - 1) {
                        this.timeTravel(this._historyIndex + 1);
                    }
                }

                // Persist state to storage
                persist(key = 'yaka-store') {
                    try {
                        localStorage.setItem(key, JSON.stringify(this._state));
                        Yaka._log('info', 'State persisted');
                    } catch (error) {
                        Yaka._log('error', 'Failed to persist state:', error);
                    }
                }

                // Restore state from storage
                restore(key = 'yaka-store') {
                    try {
                        const saved = localStorage.getItem(key);
                        if (saved) {
                            this._state = JSON.parse(saved);
                            this._makeReactive();
                            this._saveHistory();
                            Yaka._log('info', 'State restored');
                        }
                    } catch (error) {
                        Yaka._log('error', 'Failed to restore state:', error);
                    }
                }
            };

            // Create store helper
            Yaka.createStore = (options) => new Yaka.Store(options);

    };
    
    // Auto-register if Yaka is available
    if (typeof window !== 'undefined' && window.Yaka) {
        plugin(window.Yaka);
    }
    
    // Export for module systems
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = plugin;
    }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : globalThis));
