/*!
 * YakaJS - Advanced routing system
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
            // ==================== 2. ADVANCED ROUTING ====================

            // Enhanced router with nested routes, params, guards
            Yaka.Router = class {
                constructor(options = {}) {
                    this.routes = [];
                    this.guards = {
                        before: [],
                        after: []
                    };
                    this.current = null;
                    this.params = {};
                    this.query = {};
                    this.notFoundHandler = options.notFoundHandler || (() => console.warn('404: Route not found'));
                    this.baseUrl = options.baseUrl || '';
                }

                // Add route with pattern matching
                addRoute(path, config) {
                    const { component, handler, children, beforeEnter, name, redirect } = config;
                    
                    // Convert path to regex pattern (path is developer-defined route pattern, not user input)
                    // Extract parameter names and build regex
                    const paramNames = [];
                    const pattern = path
                        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')  // Escape regex special chars except / * :
                        .replace(/:(\w+)/g, (match, name) => {
                            paramNames.push(name);
                            return '([^\\/]+)';  // Match param value (not /)
                        })
                        .replace(/\*/g, '.*')  // Wildcard becomes .* in regex
                        .replace(/\//g, '\\/');  // Escape forward slashes for regex

                    this.routes.push({
                        path,
                        pattern: new RegExp(`^${pattern}$`),
                        paramNames,
                        component,
                        handler,
                        children: children || [],
                        beforeEnter,
                        name,
                        redirect
                    });

                    return this;
                }

                // Batch add routes
                addRoutes(routes) {
                    Object.entries(routes).forEach(([path, config]) => {
                        this.addRoute(path, config);
                    });
                    return this;
                }

                // Add global guards
                beforeEach(fn) {
                    this.guards.before.push(fn);
                    return this;
                }

                afterEach(fn) {
                    this.guards.after.push(fn);
                    return this;
                }

                // Match route
                match(pathname) {
                    for (const route of this.routes) {
                        const match = pathname.match(route.pattern);
                        if (match) {
                            const params = {};
                            route.paramNames.forEach((name, i) => {
                                params[name] = match[i + 1];
                            });
                            return { route, params };
                        }
                    }
                    return null;
                }

                // Parse query string
                parseQuery(search) {
                    const query = {};
                    const params = new URLSearchParams(search);
                    params.forEach((value, key) => {
                        query[key] = value;
                    });
                    return query;
                }

                // Navigate to path
                async navigate(path, options = {}) {
                    const { replace = false, state = {} } = options;
                    const url = new URL(path, window.location.origin);
                    const pathname = url.pathname.replace(this.baseUrl, '');
                    
                    // Parse query
                    this.query = this.parseQuery(url.search);

                    // Match route
                    const matched = this.match(pathname);
                    
                    if (!matched) {
                        Yaka._log('warn', `Route not found: ${pathname}`);
                        this.notFoundHandler(pathname);
                        return false;
                    }

                    const { route, params } = matched;
                    this.params = params;

                    // Handle redirect
                    if (route.redirect) {
                        const redirectPath = typeof route.redirect === 'function'
                            ? route.redirect(params)
                            : route.redirect;
                        return this.navigate(redirectPath, options);
                    }

                    // Run global before guards
                    for (const guard of this.guards.before) {
                        const result = await guard(route, this.current);
                        if (result === false) {
                            Yaka._log('info', 'Navigation cancelled by guard');
                            return false;
                        }
                    }

                    // Run route-specific guard
                    if (route.beforeEnter) {
                        const result = await route.beforeEnter(route, this.current);
                        if (result === false) {
                            Yaka._log('info', 'Navigation cancelled by route guard');
                            return false;
                        }
                    }

                    // Update history
                    const fullPath = this.baseUrl + path;
                    if (replace) {
                        history.replaceState({ ...state, path: fullPath }, '', fullPath);
                    } else {
                        history.pushState({ ...state, path: fullPath }, '', fullPath);
                    }

                    // Render component
                    if (route.component) {
                        const target = route.target || '#app';
                        const html = typeof route.component === 'function'
                            ? route.component(params, this.query)
                            : route.component;
                        _(target).html(html);
                    }

                    // Call handler
                    if (route.handler) {
                        route.handler(params, this.query);
                    }

                    const previousRoute = this.current;
                    this.current = route;

                    // Run after guards
                    for (const guard of this.guards.after) {
                        guard(route, previousRoute);
                    }

                    Yaka._log('info', `Navigated to: ${pathname}`, { params, query: this.query });
                    return true;
                }

                // Navigate by route name
                navigateTo(name, params = {}, query = {}) {
                    const route = this.routes.find(r => r.name === name);
                    if (!route) {
                        Yaka._log('error', `Route name not found: ${name}`);
                        return false;
                    }

                    let path = route.path;
                    Object.entries(params).forEach(([key, value]) => {
                        path = path.replace(`:${key}`, value);
                    });

                    const queryString = new URLSearchParams(query).toString();
                    const fullPath = queryString ? `${path}?${queryString}` : path;

                    return this.navigate(fullPath);
                }

                // Go back
                back() {
                    history.back();
                }

                // Go forward
                forward() {
                    history.forward();
                }

                // Initialize router
                init() {
                    // Handle popstate (back/forward buttons)
                    window.addEventListener('popstate', (e) => {
                        if (e.state?.path) {
                            this.navigate(e.state.path, { replace: true });
                        } else {
                            this.navigate(window.location.pathname + window.location.search, { replace: true });
                        }
                    });

                    // Handle initial load
                    this.navigate(window.location.pathname + window.location.search, { replace: true });

                    return this;
                }
            };

            // Shorthand for creating router
            Yaka.createRouter = (options) => new Yaka.Router(options);

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
