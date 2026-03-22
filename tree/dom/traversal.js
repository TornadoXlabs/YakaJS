/*!
 * YakaJS - DOM traversal methods
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
                    // ==================== TRAVERSAL ====================

                    parent: function () {
                        // Filter out null values when parent doesn't exist
                        const parents = [...new Set(this.elements.map(elem => elem.parentNode).filter(Boolean))];
                        return new Yaka(parents);
                    },

                    children: function (selector) {
                        const children = [];
                        this.each((i, elem) => children.push(...Array.from(elem.children)));
                        const result = new Yaka(children);
                        return selector ? result.filter(selector) : result;
                    },

                    siblings: function () {
                        const siblings = [];
                        this.each((i, elem) => {
                            const parent = elem.parentNode;
                            if (parent) {
                                Array.from(parent.children).forEach(child => {
                                    if (child !== elem && !siblings.includes(child)) {
                                        siblings.push(child);
                                    }
                                });
                            }
                        });
                        return new Yaka(siblings);
                    },

                    next: function () {
                        const nexts = this.elements.map(elem => elem.nextElementSibling).filter(Boolean);
                        return new Yaka(nexts);
                    },

                    prev: function () {
                        const prevs = this.elements.map(elem => elem.previousElementSibling).filter(Boolean);
                        return new Yaka(prevs);
                    },

                    find: function (selector) {
                        const found = [];
                        this.each((i, elem) => {
                            found.push(...elem.querySelectorAll(selector));
                        });
                        return new Yaka(found);
                    },

                    filter: function (selector) {
                        const filtered = this.elements.filter(elem => elem.matches(selector));
                        return new Yaka(filtered);
                    },

                    // NEW! Closest parent matching selector
                    closest: function (selector) {
                        const closest = this.elements.map(elem => elem.closest(selector)).filter(Boolean);
                        return new Yaka(closest);
                    },

                    // NEW! Check if matches selector
                    is: function (selector) {
                        return this.elements[0]?.matches(selector) || false;
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
