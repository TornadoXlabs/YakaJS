/*!
 * YakaJS - Attribute and data manipulation
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

        // ==================== ATTRIBUTES ====================

        attr: function (name, value) {
            if (typeof name === 'object') {
                // Compute keys once outside the loop for better performance
                const keys = Object.keys(name);
                return this.each((i, elem) => {
                    keys.forEach(key => elem.setAttribute(key, name[key]));
                });
            }
            if (value === undefined) {
                return this.elements[0]?.getAttribute(name);
            }
            return this.each((i, elem) => elem.setAttribute(name, value));
        },

        removeAttr: function (name) {
            return this.each((i, elem) => elem.removeAttribute(name));
        },

        data: function (key, value) {
            if (value === undefined) {
                return this.elements[0]?.dataset[key];
            }
            return this.each((i, elem) => elem.dataset[key] = value);
        },
