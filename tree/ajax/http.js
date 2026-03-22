/*!
 * YakaJS - Enhanced HTTP and AJAX methods
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
                // ==================== 1. ENHANCED HTTP WITH ERROR HANDLING ====================

                // Override existing HTTP methods with comprehensive error handling
                const originalGet = Yaka.get;
                const originalPost = Yaka.post;
                const originalPut = Yaka.put;
                const originalDelete = Yaka.delete;
                const originalAjax = Yaka.ajax;

                // HTTP Error class
                class YakaHttpError extends Error {
                    constructor(message, status, response) {
                        super(message);
                        this.name = 'YakaHttpError';
                        this.status = status;
                        this.response = response;
                    }
                }

                // Enhanced HTTP with error handling, timeout, retry
                const enhancedHttp = async function(method, url, data, options = {}) {
                    const {
                        timeout = 30000,
                        retries = 0,
                        retryDelay = 1000,
                        onError = null,
                        validateStatus = (status) => status >= 200 && status < 300,
                        parseResponse = true
                    } = options;

                    let lastError;
                    const maxAttempts = retries + 1;

                    for (let attempt = 0; attempt < maxAttempts; attempt++) {
                        try {
                            // Create abort controller for timeout
                            const controller = new AbortController();
                            const timeoutId = setTimeout(() => controller.abort(), timeout);

                            const config = {
                                method,
                                headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
                                signal: controller.signal
                            };

                            if (method !== 'GET' && method !== 'DELETE' && data) {
                                config.body = JSON.stringify(data);
                            }

                            const fullUrl = method === 'GET' && data
                                ? url + '?' + new URLSearchParams(data)
                                : url;

                            const response = await fetch(fullUrl, config);
                            clearTimeout(timeoutId);

                            // Validate response status
                            if (!validateStatus(response.status)) {
                                const errorText = await response.text();
                                throw new YakaHttpError(
                                    `HTTP ${response.status}: ${response.statusText}`,
                                    response.status,
                                    errorText
                                );
                            }

                            // Parse response based on content type
                            let result;
                            if (parseResponse) {
                                const contentType = response.headers.get('content-type');
                                if (contentType && contentType.includes('application/json')) {
                                    result = await response.json();
                                } else {
                                    result = await response.text();
                                }
                            } else {
                                result = response;
                            }

                            Yaka._log('info', `HTTP ${method} ${url} succeeded`, { attempt: attempt + 1 });
                            return result;

                        } catch (error) {
                            lastError = error;
                            
                            if (error.name === 'AbortError') {
                                lastError = new YakaHttpError(`Request timeout after ${timeout}ms`, 0, null);
                            }

                            Yaka._log('warn', `HTTP ${method} ${url} failed (attempt ${attempt + 1}/${maxAttempts})`, error.message);

                            // Don't retry on last attempt
                            if (attempt < maxAttempts - 1) {
                                // Exponential backoff
                                const delay = retryDelay * Math.pow(2, attempt);
                                await new Promise(resolve => setTimeout(resolve, delay));
                            } else {
                                // Last attempt failed, call error handler if provided
                                if (onError) {
                                    onError(lastError);
                                }
                            }
                        }
                    }

                    // All attempts failed
                    throw lastError;
                };

                // Replace HTTP methods with enhanced versions
                Yaka.get = async function(url, data, options) {
                    return enhancedHttp('GET', url, data, options);
                };

                Yaka.post = async function(url, data, options) {
                    return enhancedHttp('POST', url, data, options);
                };

                Yaka.put = async function(url, data, options) {
                    return enhancedHttp('PUT', url, data, options);
                };

                Yaka.delete = async function(url, data, options) {
                    return enhancedHttp('DELETE', url, data, options);
                };

                Yaka.ajax = async function(options) {
                    const { url, method = 'GET', data, ...rest } = options;
                    return enhancedHttp(method, url, data, rest);
                };

                // HTTP Cache
                Yaka.cache = {
                    _store: new Map(),
                    _ttl: new Map(),

                    set: function(key, value, ttl = 300000) { // 5 minutes default
                        this._store.set(key, value);
                        this._ttl.set(key, Date.now() + ttl);
                        Yaka._log('info', `Cache set: ${key}`, { ttl: `${ttl}ms` });
                    },

                    get: function(key) {
                        if (this.has(key)) {
                            return this._store.get(key);
                        }
                        return null;
                    },

                    has: function(key) {
                        if (!this._store.has(key)) return false;
                        
                        const expiry = this._ttl.get(key);
                        if (Date.now() > expiry) {
                            this.delete(key);
                            return false;
                        }
                        return true;
                    },

                    delete: function(key) {
                        this._store.delete(key);
                        this._ttl.delete(key);
                        Yaka._log('info', `Cache deleted: ${key}`);
                    },

                    clear: function() {
                        this._store.clear();
                        this._ttl.clear();
                        Yaka._log('info', 'Cache cleared');
                    },

                    // Cached HTTP request
                    request: async function(url, options = {}) {
                        const cacheKey = `${options.method || 'GET'}:${url}:${JSON.stringify(options.data || {})}`;
                        
                        if (options.cache !== false && this.has(cacheKey)) {
                            Yaka._log('info', `Cache hit: ${url}`);
                            return this.get(cacheKey);
                        }

                        const result = await Yaka.ajax({ url, ...options });
                        
                        if (options.cache !== false) {
                            this.set(cacheKey, result, options.cacheTTL);
                        }

                        return result;
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
