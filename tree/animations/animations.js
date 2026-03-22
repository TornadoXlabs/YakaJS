/*!
 * YakaJS - Animation and effects methods
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
                    // ==================== ANIMATIONS (ENHANCED!) ====================

                    fadeIn: function (duration = 300) {
                        return this.each((i, elem) => {
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `opacity ${duration}ms`;
                            setTimeout(() => elem.style.opacity = '1', 10);
                        });
                    },

                    fadeOut: function (duration = 300) {
                        return this.each((i, elem) => {
                            elem.style.transition = `opacity ${duration}ms`;
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    slideDown: function (duration = 300) {
                        return this.each((i, elem) => {
                            elem.style.overflow = 'hidden';
                            elem.style.height = '0';
                            elem.style.display = '';
                            const height = elem.scrollHeight;
                            elem.style.transition = `height ${duration}ms`;
                            setTimeout(() => elem.style.height = height + 'px', 10);
                            setTimeout(() => {
                                elem.style.height = '';
                                elem.style.overflow = '';
                            }, duration);
                        });
                    },

                    slideUp: function (duration = 300) {
                        return this.each((i, elem) => {
                            elem.style.overflow = 'hidden';
                            elem.style.height = elem.scrollHeight + 'px';
                            elem.style.transition = `height ${duration}ms`;
                            setTimeout(() => elem.style.height = '0', 10);
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    // NEW! Animate any CSS property (with color support)
                    animate: function (props, duration = 400, easing = 'ease') {
                        return this.each((i, elem) => {
                            // Helper to parse color (supports hex, rgb, and rgba)
                            const parseColor = (color) => {
                                if (!color) return null;
                                if (color.startsWith('#')) {
                                    const hex = color.substring(1);
                                    if (hex.length === 3) {
                                        return {
                                            r: parseInt(hex[0] + hex[0], 16),
                                            g: parseInt(hex[1] + hex[1], 16),
                                            b: parseInt(hex[2] + hex[2], 16),
                                            a: 1
                                        };
                                    }
                                    return {
                                        r: parseInt(hex.substring(0, 2), 16),
                                        g: parseInt(hex.substring(2, 4), 16),
                                        b: parseInt(hex.substring(4, 6), 16),
                                        a: 1
                                    };
                                }
                                if (color.startsWith('rgb')) {
                                    // Parse rgb() or rgba() format - RGB values must be integers, alpha can be decimal
                                    const match = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+(?:\.\d+)?))?\s*\)/);
                                    if (!match) return null;
                                    return {
                                        r: +match[1],
                                        g: +match[2],
                                        b: +match[3],
                                        a: match[4] !== undefined ? +match[4] : 1
                                    };
                                }
                                return null;
                            };

                            // Check for color properties
                            const colorProps = ['color', 'backgroundColor', 'borderColor'];
                            const hasColorAnimation = Object.keys(props).some(key => colorProps.includes(key));
                            
                            if (hasColorAnimation) {
                                // Animate colors using keyframes
                                const startColors = {};
                                const endColors = {};
                                
                                Object.keys(props).forEach(key => {
                                    if (colorProps.includes(key)) {
                                        const currentColor = getComputedStyle(elem)[key];
                                        startColors[key] = parseColor(currentColor);
                                        endColors[key] = parseColor(props[key]);
                                    }
                                });
                                
                                const startTime = Date.now();
                                const animateColors = () => {
                                    const elapsed = Date.now() - startTime;
                                    const progress = Math.min(elapsed / duration, 1);
                                    
                                    Object.keys(startColors).forEach(key => {
                                        if (startColors[key] && endColors[key]) {
                                            const r = Math.round(startColors[key].r + (endColors[key].r - startColors[key].r) * progress);
                                            const g = Math.round(startColors[key].g + (endColors[key].g - startColors[key].g) * progress);
                                            const b = Math.round(startColors[key].b + (endColors[key].b - startColors[key].b) * progress);
                                            const a = startColors[key].a + (endColors[key].a - startColors[key].a) * progress;
                                            elem.style[key] = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
                                        }
                                    });
                                    
                                    if (progress < 1) {
                                        requestAnimationFrame(animateColors);
                                    }
                                };
                                
                                animateColors();
                                
                                // Animate non-color properties normally
                                const nonColorProps = {};
                                Object.keys(props).forEach(key => {
                                    if (!colorProps.includes(key)) {
                                        nonColorProps[key] = props[key];
                                    }
                                });
                                
                                if (Object.keys(nonColorProps).length > 0) {
                                    const transitions = Object.keys(nonColorProps).map(key => `${key} ${duration}ms ${easing}`).join(', ');
                                    elem.style.transition = transitions;
                                    Object.assign(elem.style, nonColorProps);
                                    setTimeout(() => elem.style.transition = '', duration);
                                }
                            } else {
                                // No color animation, proceed normally
                                const transitions = Object.keys(props).map(key => `${key} ${duration}ms ${easing}`).join(', ');
                                elem.style.transition = transitions;
                                Object.assign(elem.style, props);
                                setTimeout(() => elem.style.transition = '', duration);
                            }
                        });
                    },

                    // NEW! Pulse animation
                    pulse: function (times = 3) {
                        return this.each((i, elem) => {
                            let count = 0;
                            const interval = setInterval(() => {
                                elem.style.transform = count % 2 === 0 ? 'scale(1.1)' : 'scale(1)';
                                elem.style.transition = 'transform 150ms';
                                count++;
                                if (count >= times * 2) {
                                    clearInterval(interval);
                                    elem.style.transform = '';
                                }
                            }, 150);
                        });
                    },

                    // NEW! Shake animation
                    shake: function () {
                        return this.each((i, elem) => {
                            elem.style.animation = 'shake 0.5s';
                            setTimeout(() => elem.style.animation = '', 500);
                        });
                    },

                    // NEW! Bounce animation
                    bounce: function (times = 3) {
                        return this.each((i, elem) => {
                            elem.style.animation = `bounce 0.5s ${times}`;
                            setTimeout(() => elem.style.animation = '', 500 * times);
                        });
                    },

                    // NEW! Flip 3D animation
                    flip: function (axis = 'Y', duration = 600) {
                        return this.each((i, elem) => {
                            elem.style.transition = `transform ${duration}ms`;
                            elem.style.transformStyle = 'preserve-3d';
                            const rotation = axis.toUpperCase() === 'Y' ? 'rotateY(180deg)' : 'rotateX(180deg)';
                            elem.style.transform = rotation;
                            setTimeout(() => elem.style.transform = '', duration);
                        });
                    },

                    // NEW! Zoom in animation
                    zoomIn: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transform = 'scale(0)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.transform = 'scale(1)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    // NEW! Zoom out animation
                    zoomOut: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            elem.style.transform = 'scale(0)';
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    // NEW! Swing animation
                    swing: function () {
                        return this.each((i, elem) => {
                            elem.style.animation = 'swing 0.8s';
                            elem.style.transformOrigin = 'top center';
                            setTimeout(() => elem.style.animation = '', 800);
                        });
                    },

                    // NEW! Rotate in animation
                    rotateIn: function (duration = 600) {
                        return this.each((i, elem) => {
                            elem.style.transform = 'rotate(-360deg) scale(0)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.transform = 'rotate(0deg) scale(1)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    // NEW! Rotate out animation
                    rotateOut: function (duration = 600) {
                        return this.each((i, elem) => {
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            elem.style.transform = 'rotate(360deg) scale(0)';
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    // NEW! Blur transition animation
                    blurIn: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.filter = 'blur(20px)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `filter ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.filter = 'blur(0px)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    // NEW! Blur out animation
                    blurOut: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transition = `filter ${duration}ms, opacity ${duration}ms`;
                            elem.style.filter = 'blur(20px)';
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    // NEW! Slide in from directions
                    slideInLeft: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transform = 'translateX(-100%)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.transform = 'translateX(0)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    slideInRight: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transform = 'translateX(100%)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.transform = 'translateX(0)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    slideInUp: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transform = 'translateY(100%)';
                            elem.style.opacity = '0';
                            elem.style.display = '';
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            setTimeout(() => {
                                elem.style.transform = 'translateY(0)';
                                elem.style.opacity = '1';
                            }, 10);
                        });
                    },

                    slideOutLeft: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            elem.style.transform = 'translateX(-100%)';
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    slideOutRight: function (duration = 400) {
                        return this.each((i, elem) => {
                            elem.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
                            elem.style.transform = 'translateX(100%)';
                            elem.style.opacity = '0';
                            setTimeout(() => elem.style.display = 'none', duration);
                        });
                    },

                    // NEW! Rubber band animation
                    rubberBand: function () {
                        return this.each((i, elem) => {
                            elem.style.animation = 'rubberBand 0.8s';
                            setTimeout(() => elem.style.animation = '', 800);
                        });
                    },

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
