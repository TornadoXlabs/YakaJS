/*!
 * YakaJS - Basic DOM selection and iteration methods
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

        // ==================== BASIC METHODS ====================

        each: function (callback) {
            this.elements.forEach((elem, i) => {
                callback.call(elem, i, elem);
            });
            return this;
        },

        get: function (index) {
            return index === undefined ? this.elements : this.elements[index];
        },

        first: function () {
            return new Yaka(this.elements[0] ?? []);
        },

        last: function () {
            const lastElem = this.elements[this.elements.length - 1];
            return new Yaka(lastElem ?? []);
        },

        eq: function (index) {
            const elem = this.elements[index];
            return new Yaka(elem !== undefined ? elem : []);
        },
