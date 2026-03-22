/*!
 * YakaJS - Advanced UI features (draggable, sortable, resizable, etc.)
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
                    // ==================== ADVANCED FEATURES (jQuery doesn't have!) ====================

                    // NEW! Debounced event
                    debounce: function (event, handler, delay = 300) {
                        return this.each((i, elem) => {
                            let timeout;
                            elem.addEventListener(event, (e) => {
                                clearTimeout(timeout);
                                timeout = setTimeout(() => handler.call(elem, e), delay);
                            });
                        });
                    },

                    // NEW! Throttled event
                    throttle: function (event, handler, delay = 300) {
                        return this.each((i, elem) => {
                            let lastRun = 0;
                            elem.addEventListener(event, (e) => {
                                const now = Date.now();
                                if (now - lastRun >= delay) {
                                    handler.call(elem, e);
                                    lastRun = now;
                                }
                            });
                        });
                    },

                    // NEW! Observe element visibility
                    onVisible: function (handler, options = {}) {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    handler.call(entry.target, entry);
                                }
                            });
                        }, options);

                        this.each((i, elem) => observer.observe(elem));
                        return this;
                    },

                    // NEW! Lazy load images
                    lazyLoad: function () {
                        return this.onVisible(function () {
                            const img = this;
                            const src = img.dataset.src;
                            if (src) {
                                img.src = src;
                                img.removeAttribute('data-src');
                            }
                        });
                    },

                    // NEW! Copy to clipboard
                    copy: function () {
                        const text = this.text();
                        // Handle promise internally to maintain chaining API
                        navigator.clipboard.writeText(text)
                            .catch(err => console.warn('Yaka copy: clipboard write failed', err));
                        return this;
                    },

                    // NEW! Serialize form data
                    serialize: function () {
                        const form = this.elements[0];
                        if (!form || form.tagName !== 'FORM') return {};

                        const formData = new FormData(form);
                        const data = {};
                        for (let [key, value] of formData.entries()) {
                            data[key] = value;
                        }
                        return data;
                    },

                    // NEW! Auto-save form
                    autoSave: function (key, delay = 1000) {
                        return this.debounce('input', function () {
                            try {
                                const data = new Yaka(this).serialize();
                                localStorage.setItem(key, JSON.stringify(data));
                            } catch (e) {
                                console.warn('Yaka autoSave: localStorage unavailable', e);
                            }
                        }, delay);
                    },

                    // NEW! Restore form data
                    restore: function (key) {
                        try {
                            const data = JSON.parse(localStorage.getItem(key) || '{}');
                            return this.each((i, elem) => {
                                if (elem.tagName === 'FORM') {
                                    Object.keys(data).forEach(name => {
                                        const input = elem.querySelector(`[name="${name}"]`);
                                        if (input) input.value = data[name];
                                    });
                                }
                            });
                        } catch (e) {
                            console.warn('Yaka restore: localStorage unavailable', e);
                            return this;
                        }
                    },

                    // NEW! Validate form
                    validate: function (rules) {
                        const form = this.elements[0];
                        if (!form) return { valid: true, errors: {} };

                        const errors = {};
                        let valid = true;

                        Object.keys(rules).forEach(name => {
                            const input = form.querySelector(`[name="${name}"]`);
                            if (!input) return;

                            const rule = rules[name];
                            const value = input.value;
                            const fieldErrors = [];

                            // Check all rules independently
                            // Support both old 'message' and new specific message properties for backward compatibility
                            if (rule.required && !value) {
                                fieldErrors.push(rule.requiredMessage || rule.message || 'This field is required');
                            }
                            if (value && rule.pattern && !rule.pattern.test(value)) {
                                fieldErrors.push(rule.patternMessage || rule.message || 'Invalid format');
                            }
                            if (value && rule.min && value.length < rule.min) {
                                fieldErrors.push(rule.minMessage || rule.message || `Minimum ${rule.min} characters`);
                            }
                            if (value && rule.max && value.length > rule.max) {
                                fieldErrors.push(rule.maxMessage || rule.message || `Maximum ${rule.max} characters`);
                            }

                            if (fieldErrors.length > 0) {
                                // Backward compatibility: Return format depends on usage pattern
                                // - Old API (single 'message' property): returns string
                                // - New API (specific message properties): returns array
                                // This ensures existing code continues to work while new code can collect multiple errors
                                if (fieldErrors.length === 1 && rule.message && 
                                    !rule.requiredMessage && !rule.patternMessage && !rule.minMessage && !rule.maxMessage) {
                                    errors[name] = fieldErrors[0]; // Single string for old API
                                } else {
                                    errors[name] = fieldErrors; // Array for new API
                                }
                                valid = false;
                            }
                        });

                        return { valid, errors };
                    },

                    // NEW! Smooth scroll to element
                    scrollTo: function (duration = 500) {
                        if (this.elements[0]) {
                            this.elements[0].scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                        return this;
                    },

                    // NEW! Count up animation
                    countUp: function (target, duration = 2000) {
                        return this.each((i, elem) => {
                            // Validate target is a number
                            if (typeof target !== 'number' || isNaN(target)) {
                                console.error('countUp target must be a valid number');
                                return;
                            }
                            
                            const start = parseInt(elem.textContent) || 0;
                            const range = target - start;
                            const startTime = performance.now();

                            const tick = (now) => {
                                const elapsed = now - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                elem.textContent = Math.round(start + range * progress);
                                if (progress < 1) {
                                    requestAnimationFrame(tick);
                                }
                            };

                            requestAnimationFrame(tick);
                        });
                    },

                    // NEW! Type writer effect
                    typeWriter: function (text, speed = 50) {
                        return this.each((i, elem) => {
                            // Validate text is provided
                            if (typeof text !== 'string') {
                                console.error('typeWriter requires a string');
                                return;
                            }
                            
                            elem.textContent = '';
                            let index = 0;
                            const timer = setInterval(() => {
                                if (index < text.length) {
                                    elem.textContent += text.charAt(index);
                                    index++;
                                } else {
                                    clearInterval(timer);
                                }
                            }, speed);
                        });
                    },

                    // NEW! Confetti effect
                    confetti: function () {
                        return this.each((i, elem) => {
                            if (!elem._yaka_confetti_timeouts) {
                                elem._yaka_confetti_timeouts = [];
                            }
                            
                            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
                            for (let i = 0; i < 50; i++) {
                                const confetti = document.createElement('div');
                                confetti.style.cssText = `
                                    position: absolute;
                                    width: 10px;
                                    height: 10px;
                                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                                    left: ${Math.random() * 100}%;
                                    top: -10px;
                                    animation: fall ${2 + Math.random() * 3}s linear;
                                `;
                                elem.style.position = 'relative';
                                elem.appendChild(confetti);
                                
                                const timeoutId = setTimeout(() => confetti.remove(), 5000);
                                elem._yaka_confetti_timeouts.push(timeoutId);
                            }
                            
                            // Store cleanup method
                            if (!elem._yaka_confetti_cleanup) {
                                elem._yaka_confetti_cleanup = () => {
                                    if (elem._yaka_confetti_timeouts) {
                                        elem._yaka_confetti_timeouts.forEach(id => clearTimeout(id));
                                        elem._yaka_confetti_timeouts = [];
                                    }
                                    delete elem._yaka_confetti_cleanup;
                                };
                            }
                        });
                    }
                };

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
