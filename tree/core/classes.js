/*!
 * YakaJS - CSS class manipulation
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

        // ==================== CLASSES ====================

        addClass: function (className, duration) {
            // Fast path: no animation
            if (!duration) {
                return this.each((i, elem) => {
                    className.split(' ').forEach(cls => elem.classList.add(cls));
                });
            }
            
            // jQuery UI compatible: addClass with animation
            // Batch all reads first, then all writes to avoid layout thrashing
            const elementsData = [];
            
            this.elements.forEach((elem) => {
                const classes = className.split(' ');
                const before = {};
                const computed = getComputedStyle(elem);
                ['opacity', 'height', 'width', 'margin', 'padding'].forEach(prop => {
                    before[prop] = computed[prop];
                });
                elementsData.push({ elem, classes, before });
            });
            
            // Now perform all writes (adding classes)
            elementsData.forEach(({ elem, classes }) => {
                classes.forEach(cls => elem.classList.add(cls));
            });
            
            // Force a single reflow for all elements instead of one per element
            // This significantly improves performance when animating multiple elements
            if (elementsData.length > 0) {
                void elementsData[0].elem.offsetHeight;
            }
            
            // Read new styles and apply transitions
            elementsData.forEach(({ elem, before }) => {
                const after = getComputedStyle(elem);
                const transitions = [];
                
                Object.keys(before).forEach(prop => {
                    if (before[prop] !== after[prop]) {
                        transitions.push(`${prop} ${duration}ms ease`);
                    }
                });
                
                if (transitions.length > 0) {
                    elem.style.transition = transitions.join(', ');
                    setTimeout(() => elem.style.transition = '', duration);
                }
            });
            
            return this;
        },

        removeClass: function (className, duration) {
            if (!className) {
                // When called with no arguments, this is now a deprecated behavior
                // Use detach() instead
                console.warn('removeClass() with no arguments is deprecated. Use detach() to remove element from DOM.');
                return this.each((i, elem) => elem.remove());
            }
            
            // Fast path: no animation
            if (!duration) {
                return this.each((i, elem) => {
                    className.split(' ').forEach(cls => elem.classList.remove(cls));
                });
            }
            
            // jQuery UI compatible: removeClass with animation
            // Batch all reads first, then all writes to avoid layout thrashing
            const elementsData = [];
            
            this.elements.forEach((elem) => {
                const classes = className.split(' ');
                const before = {};
                const computed = getComputedStyle(elem);
                ['opacity', 'height', 'width', 'margin', 'padding'].forEach(prop => {
                    before[prop] = computed[prop];
                });
                elementsData.push({ elem, classes, before });
            });
            
            // Now perform all writes (removing classes)
            elementsData.forEach(({ elem, classes }) => {
                classes.forEach(cls => elem.classList.remove(cls));
            });
            
            // Force a single reflow for all elements instead of one per element
            // This significantly improves performance when animating multiple elements
            if (elementsData.length > 0) {
                void elementsData[0].elem.offsetHeight;
            }
            
            // Read new styles and apply transitions
            elementsData.forEach(({ elem, before }) => {
                const after = getComputedStyle(elem);
                const transitions = [];
                
                Object.keys(before).forEach(prop => {
                    if (before[prop] !== after[prop]) {
                        transitions.push(`${prop} ${duration}ms ease`);
                    }
                });
                
                if (transitions.length > 0) {
                    elem.style.transition = transitions.join(', ');
                    setTimeout(() => elem.style.transition = '', duration);
                }
            });
            
            return this;
        },

        toggleClass: function (className, duration) {
            // jQuery UI compatible: toggleClass with animation
            if (duration) {
                return this.each((index, elem) => {
                    const hasClass = elem.classList.contains(className);
                    const yakaElem = new Yaka(elem);
                    if (hasClass) {
                        yakaElem.removeClass(className, duration);
                    } else {
                        yakaElem.addClass(className, duration);
                    }
                });
            }
            
            return this.each((index, elem) => {
                className.split(' ').forEach(cls => elem.classList.toggle(cls));
            });
        },

        hasClass: function (className) {
            return this.elements[0]?.classList.contains(className) || false;
        },

        // New separate method for removing elements from DOM
        detach: function () {
            return this.each((i, elem) => elem.remove());
        },
