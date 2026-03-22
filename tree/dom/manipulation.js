/*!
 * YakaJS - DOM manipulation methods
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
                    // ==================== DOM MANIPULATION ====================

                    append: function (content) {
                        return this.each((i, elem) => {
                            if (typeof content === 'string') {
                                elem.insertAdjacentHTML('beforeend', content);
                            } else if (content.elements) {
                                content.elements.forEach(child => elem.appendChild(child.cloneNode(true)));
                            } else if (content.nodeType) {
                                elem.appendChild(content);
                            }
                        });
                    },

                    prepend: function (content) {
                        return this.each((i, elem) => {
                            if (typeof content === 'string') {
                                elem.insertAdjacentHTML('afterbegin', content);
                            } else if (content.elements) {
                                content.elements.forEach(child => elem.insertBefore(child.cloneNode(true), elem.firstChild));
                            } else if (content.nodeType) {
                                elem.insertBefore(content, elem.firstChild);
                            }
                        });
                    },

                    after: function (content) {
                        return this.each((i, elem) => {
                            if (typeof content === 'string') {
                                elem.insertAdjacentHTML('afterend', content);
                            } else if (content.nodeType && elem.parentNode) {
                                elem.parentNode.insertBefore(content, elem.nextSibling);
                            }
                        });
                    },

                    before: function (content) {
                        return this.each((i, elem) => {
                            if (typeof content === 'string') {
                                elem.insertAdjacentHTML('beforebegin', content);
                            } else if (content.nodeType && elem.parentNode) {
                                elem.parentNode.insertBefore(content, elem);
                            }
                        });
                    },

                    empty: function () {
                        return this.each((i, elem) => elem.innerHTML = '');
                    },

                    clone: function () {
                        const clones = this.elements.map(elem => elem.cloneNode(true));
                        return new Yaka(clones);
                    },

                    // NEW! Replace element
                    replace: function (newContent) {
                        return this.each((i, elem) => {
                            if (!elem.parentNode) {
                                console.warn('Yaka.replace: Cannot replace element without parent');
                                return;
                            }
                            if (typeof newContent === 'string') {
                                elem.outerHTML = newContent;
                            } else if (newContent.nodeType) {
                                elem.parentNode.replaceChild(newContent, elem);
                            }
                        });
                    },

                    // NEW! Wrap element
                    wrap: function (wrapper) {
                        return this.each((i, elem) => {
                            if (!elem.parentNode) {
                                console.warn('Yaka.wrap: Cannot wrap element without parent');
                                return;
                            }
                            const wrapElem = typeof wrapper === 'string'
                                ? document.createElement(wrapper)
                                : wrapper.cloneNode(true);
                            elem.parentNode.insertBefore(wrapElem, elem);
                            wrapElem.appendChild(elem);
                        });
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
