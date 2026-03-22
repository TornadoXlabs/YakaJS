/*!
 * YakaJS - Event handling and delegation
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
        if (!Yaka || !Yaka.prototype) {
            console.error('YakaJS core is required. Please load yaka-core.js first.');
            return;
        }
        
        // Add methods to Yaka prototype
        Object.assign(Yaka.prototype, {
                    // ==================== EVENTS ====================

                    /**
                     * Attach an event handler to elements
                     * @param {string} event - Event type (e.g., 'click', 'mouseenter')
                     * @param {string|function} selector - Optional selector for event delegation, or handler function
                     * @param {function} handler - Event handler function
                     * @returns {Yaka} - Returns this for chaining
                     * 
                     * @warning For proper memory management and the ability to remove listeners with .off(),
                     * use named functions or store references to your handler functions.
                     * Anonymous functions (e.g., .on('click', () => {...})) cannot be removed later
                     * because .off() needs a reference to the exact same function object.
                     * 
                     * @example
                     * // Good - can be removed later
                     * const handleClick = () => console.log('clicked');
                     * _('.btn').on('click', handleClick);
                     * _('.btn').off('click', handleClick); // Works!
                     * 
                     * @example
                     * // Bad - cannot be removed
                     * _('.btn').on('click', () => console.log('clicked'));
                     * _('.btn').off('click', () => console.log('clicked')); // Won't work - different function
                     */
                    on: function (event, selector, handler) {
                        if (typeof selector === 'function') {
                            handler = selector;
                            selector = null;
                        }

                        return this.each((i, elem) => {
                            if (selector) {
                                // Create wrapper function
                                const wrapper = function(e) {
                                    const target = e.target.closest(selector);
                                    if (target && elem.contains(target)) {
                                        handler.call(target, e);
                                    }
                                };
                                
                                // Store wrapper in nested WeakMap structure for proper cleanup
                                // Structure: handler -> element -> event:selector -> wrapper
                                if (!eventWrappers.has(handler)) {
                                    eventWrappers.set(handler, new WeakMap());
                                }
                                const elementMap = eventWrappers.get(handler);
                                if (!elementMap.has(elem)) {
                                    elementMap.set(elem, new Map());
                                }
                                const eventMap = elementMap.get(elem);
                                const key = `${event}:${selector}`;
                                eventMap.set(key, wrapper);
                                
                                elem.addEventListener(event, wrapper);
                            } else {
                                elem.addEventListener(event, handler);
                            }
                        });
                    },

                    off: function (event, selector, handler) {
                        // Support both 2 and 3 argument forms for backward compatibility
                        if (typeof selector === 'function') {
                            handler = selector;
                            selector = null;
                        }
                        
                        return this.each((i, elem) => {
                            if (selector && eventWrappers.has(handler)) {
                                // Remove delegated event listener
                                const elementMap = eventWrappers.get(handler);
                                if (elementMap.has(elem)) {
                                    const eventMap = elementMap.get(elem);
                                    const key = `${event}:${selector}`;
                                    const wrapper = eventMap.get(key);
                                    if (wrapper) {
                                        elem.removeEventListener(event, wrapper);
                                        eventMap.delete(key);
                                    }
                                }
                            } else {
                                // Remove direct event listener
                                elem.removeEventListener(event, handler);
                            }
                        });
                    },

                    // NEW! One-time event
                    once: function (event, handler) {
                        return this.each((i, elem) => {
                            elem.addEventListener(event, handler, { once: true });
                        });
                    },

                    trigger: function (event, data) {
                        return this.each((i, elem) => {
                            // Optimize: Use simple Event for common events without data
                            const evt = data !== undefined 
                                ? new CustomEvent(event, { bubbles: true, detail: data })
                                : new Event(event, { bubbles: true });
                            elem.dispatchEvent(evt);
                        });
                    },

                    click: function (handler) {
                        if (!handler) {
                            this.elements[0]?.click();
                            return this;
                        }
                        return this.on('click', handler);
                    },

                    submit: function (handler) {
                        if (!handler) {
                            this.elements[0]?.submit();
                            return this;
                        }
                        return this.on('submit', handler);
                    },

                    change: function (handler) {
                        return this.on('change', handler);
                    },

                    input: function (handler) {
                        return this.on('input', handler);
                    },

                    focus: function (handler) {
                        if (!handler) {
                            this.elements[0]?.focus();
                            return this;
                        }
                        return this.on('focus', handler);
                    },

                    blur: function (handler) {
                        return this.on('blur', handler);
                    },

                    hover: function (handlerIn, handlerOut) {
                        return this.on('mouseenter', handlerIn).on('mouseleave', handlerOut || handlerIn);
                    },

                    // NEW! Scroll event
                    scroll: function (handler) {
                        return this.on('scroll', handler);
                    },

                    // NEW! Resize event
                    resize: function (handler) {
                        return this.on('resize', handler);
                    },

        });
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
