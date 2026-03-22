/*!
 * YakaJS - Security utilities (XSS, CSRF protection)
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
            // ==================== 4. SECURITY UTILITIES ====================

            Yaka.security = {
                // XSS sanitization
                sanitizeHtml(html) {
                    const div = document.createElement('div');
                    div.textContent = html;
                    return div.innerHTML;
                },

                // Escape HTML entities
                escapeHtml(text) {
                    const map = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#x27;',
                        '/': '&#x2F;',
                        '\\': '&#x5C;'
                    };
                    return String(text).replace(/[&<>"'/\\]/g, (char) => map[char]);
                },

                // CSRF token management
                csrf: {
                    _token: null,
                    _headerName: 'X-CSRF-Token',

                    setToken(token) {
                        this._token = token;
                        // Store in meta tag
                        let meta = document.querySelector('meta[name="csrf-token"]');
                        if (!meta) {
                            meta = document.createElement('meta');
                            meta.name = 'csrf-token';
                            document.head.appendChild(meta);
                        }
                        meta.content = token;
                        Yaka._log('info', 'CSRF token set');
                    },

                    getToken() {
                        if (this._token) return this._token;
                        
                        // Try to get from meta tag
                        const meta = document.querySelector('meta[name="csrf-token"]');
                        if (meta) {
                            this._token = meta.content;
                        }
                        return this._token;
                    },

                    // Add CSRF token to request
                    addToRequest(config) {
                        const token = this.getToken();
                        if (token) {
                            config.headers = config.headers || {};
                            config.headers[this._headerName] = token;
                        }
                        return config;
                    }
                },

                // Content Security Policy helper
                csp: {
                    nonce: null,

                    setNonce(nonce) {
                        this.nonce = nonce;
                    },

                    getNonce() {
                        if (this.nonce) return this.nonce;
                        
                        // Try to get from script tag
                        const script = document.querySelector('script[nonce]');
                        if (script) {
                            this.nonce = script.getAttribute('nonce');
                        }
                        return this.nonce;
                    }
                },

                // Sanitize input for SQL-like operations
                sanitizeInput(input) {
                    return String(input)
                        .replace(/['";\\]/g, '')
                        .trim();
                },

                // Validate and sanitize URL
                sanitizeUrl(url) {
                    try {
                        const parsed = new URL(url, window.location.origin);
                        // Only allow http and https
                        if (!['http:', 'https:'].includes(parsed.protocol)) {
                            return '';
                        }
                        return parsed.href;
                    } catch {
                        return '';
                    }
                }
            };

            // Auto-add CSRF token to all HTTP requests
            Yaka.http.addRequestInterceptor((config) => {
                return Yaka.security.csrf.addToRequest(config);
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
