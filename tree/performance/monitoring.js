/*!
 * YakaJS - Performance monitoring utilities
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
            // ==================== 6. PERFORMANCE MONITORING ====================

            Yaka.performance = {
                marks: {},
                measures: {},
                _observers: [],

                // Start performance mark
                mark(name) {
                    this.marks[name] = performance.now();
                    if (performance.mark) {
                        performance.mark(name);
                    }
                },

                // Measure performance between marks
                measure(name, startMark, endMark) {
                    const start = this.marks[startMark];
                    const end = endMark ? this.marks[endMark] : performance.now();
                    
                    if (start === undefined) {
                        Yaka._log('warn', `Start mark not found: ${startMark}`);
                        return null;
                    }

                    const duration = end - start;
                    this.measures[name] = duration;

                    if (performance.measure) {
                        try {
                            performance.measure(name, startMark, endMark);
                        } catch (e) {
                            // Ignore if marks don't exist in Performance API
                        }
                    }

                    Yaka._log('info', `Performance: ${name}`, `${duration.toFixed(2)}ms`);
                    return duration;
                },

                // Get FPS
                getFPS(callback, duration = 1000) {
                    let frames = 0;
                    let lastTime = performance.now();
                    const startTime = lastTime;

                    const countFrame = (currentTime) => {
                        frames++;
                        
                        if (currentTime - startTime < duration) {
                            requestAnimationFrame(countFrame);
                        } else {
                            const fps = Math.round(frames / (duration / 1000));
                            callback(fps);
                        }
                    };

                    requestAnimationFrame(countFrame);
                },

                // Monitor long tasks
                observeLongTasks(callback) {
                    if ('PerformanceObserver' in window) {
                        try {
                            const observer = new PerformanceObserver((list) => {
                                list.getEntries().forEach(entry => {
                                    callback({
                                        name: entry.name,
                                        duration: entry.duration,
                                        startTime: entry.startTime
                                    });
                                });
                            });
                            observer.observe({ entryTypes: ['longtask'] });
                            this._observers.push(observer);
                        } catch (e) {
                            Yaka._log('warn', 'Long task monitoring not supported');
                        }
                    }
                },

                // Get performance report
                getReport() {
                    const report = {
                        marks: this.marks,
                        measures: this.measures,
                        memory: null,
                        navigation: null
                    };

                    if (performance.memory) {
                        report.memory = {
                            usedJSHeapSize: (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
                            totalJSHeapSize: (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
                            limit: (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
                        };
                    }

                    if (performance.getEntriesByType) {
                        const navEntries = performance.getEntriesByType('navigation');
                        if (navEntries.length > 0) {
                            const nav = navEntries[0];
                            report.navigation = {
                                domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
                                loadComplete: nav.loadEventEnd - nav.loadEventStart,
                                domInteractive: nav.domInteractive,
                                totalTime: nav.loadEventEnd - nav.fetchStart
                            };
                        }
                    }

                    return report;
                },

                // Clear all performance data
                clear() {
                    this.marks = {};
                    this.measures = {};
                    if (performance.clearMarks) {
                        performance.clearMarks();
                    }
                    if (performance.clearMeasures) {
                        performance.clearMeasures();
                    }
                }
            };

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
