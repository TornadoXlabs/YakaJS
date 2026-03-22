/*!
 * YakaJS - CSS styling methods
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

        // ==================== STYLES ====================

        css: function (prop, value) {
            if (typeof prop === 'object') {
                // Fast path: use Object.assign for batch updates
                return this.each((i, elem) => {
                    Object.assign(elem.style, prop);
                });
            }
            if (value === undefined) {
                // Fast path for read
                const elem = this.elements[0];
                return elem ? getComputedStyle(elem)[prop] : '';
            }
            // Fast path for single property write
            return this.each((i, elem) => elem.style[prop] = value);
        },

        show: function () {
            return this.each((i, elem) => elem.style.display = '');
        },

        hide: function () {
            return this.each((i, elem) => elem.style.display = 'none');
        },
