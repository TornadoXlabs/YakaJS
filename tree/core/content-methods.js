/*!
 * YakaJS - Text, HTML, and value manipulation
 * Part of the modular YakaJS library
 * https://github.com/Yaka-UI-Labs/YakaJS
 * 
 * This file can be used independently or as part of the full YakaJS bundle
 * Copyright (c) 2026
 * Released under the MIT license
 */

        // ==================== CONTENT METHODS ====================

        text: function (value) {
            if (value === undefined) {
                return this.elements[0]?.textContent || '';
            }
            return this.each((i, elem) => elem.textContent = value);
        },

        html: function (value, sanitize = false) {
            if (value === undefined) {
                return this.elements[0]?.innerHTML || '';
            }
            return this.each((i, elem) => {
                // Use sanitizer if requested and available
                if (sanitize && Yaka.security && typeof Yaka.security.sanitizeHtml === 'function') {
                    elem.innerHTML = Yaka.security.sanitizeHtml(value);
                } else if (sanitize) {
                    // Fallback: render as plain text (no HTML) to prevent XSS
                    elem.textContent = value;
                } else {
                    elem.innerHTML = value;
                }
            });
        },

        val: function (value) {
            if (value === undefined) {
                return this.elements[0]?.value || '';
            }
            return this.each((i, elem) => elem.value = value);
        },
