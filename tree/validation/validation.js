/*!
 * YakaJS - Form validation framework
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
            // ==================== 3. ADVANCED VALIDATION FRAMEWORK ====================

            Yaka.validator = {
                rules: {
                    required: (value) => value !== null && value !== undefined && value !== '',
                    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                    url: (value) => {
                        try {
                            new URL(value);
                            return true;
                        } catch {
                            return false;
                        }
                    },
                    number: (value) => !isNaN(parseFloat(value)) && isFinite(value),
                    integer: (value) => Number.isInteger(Number(value)),
                    min: (value, min) => Number(value) >= min,
                    max: (value, max) => Number(value) <= max,
                    minLength: (value, length) => String(value).length >= length,
                    maxLength: (value, length) => String(value).length <= length,
                    pattern: (value, regex) => regex.test(value),
                    match: (value, field, formData) => value === formData[field],
                    alpha: (value) => /^[a-zA-Z]+$/.test(value),
                    alphanumeric: (value) => /^[a-zA-Z0-9]+$/.test(value),
                    phone: (value) => /^[\d\s\-\+\(\)]+$/.test(value),
                    creditCard: (value) => {
                        // Luhn algorithm
                        const cleaned = value.replace(/\D/g, '');
                        if (cleaned.length < 13 || cleaned.length > 19) return false;
                        
                        let sum = 0;
                        let isEven = false;
                        for (let i = cleaned.length - 1; i >= 0; i--) {
                            let digit = parseInt(cleaned[i]);
                            if (isEven) {
                                digit *= 2;
                                if (digit > 9) digit -= 9;
                            }
                            sum += digit;
                            isEven = !isEven;
                        }
                        return sum % 10 === 0;
                    }
                },

                messages: {
                    required: 'This field is required',
                    email: 'Please enter a valid email address',
                    url: 'Please enter a valid URL',
                    number: 'Please enter a valid number',
                    integer: 'Please enter a valid integer',
                    min: 'Value must be at least {min}',
                    max: 'Value must be at most {max}',
                    minLength: 'Minimum length is {minLength} characters',
                    maxLength: 'Maximum length is {maxLength} characters',
                    pattern: 'Invalid format',
                    match: 'Fields do not match',
                    alpha: 'Only letters are allowed',
                    alphanumeric: 'Only letters and numbers are allowed',
                    phone: 'Please enter a valid phone number',
                    creditCard: 'Please enter a valid credit card number'
                },

                // Add custom rule
                addRule(name, validator, message) {
                    this.rules[name] = validator;
                    this.messages[name] = message;
                },

                // Validate single value
                validate(value, rules, formData = {}) {
                    const errors = [];

                    for (const [ruleName, ruleValue] of Object.entries(rules)) {
                        const validator = this.rules[ruleName];
                        
                        if (!validator) {
                            Yaka._log('warn', `Unknown validation rule: ${ruleName}`);
                            continue;
                        }

                        let isValid;
                        if (typeof ruleValue === 'boolean' && ruleValue) {
                            isValid = validator(value);
                        } else if (ruleName === 'match') {
                            isValid = validator(value, ruleValue, formData);
                        } else {
                            isValid = validator(value, ruleValue);
                        }

                        if (!isValid) {
                            let message = rules.message || this.messages[ruleName] || 'Invalid value';
                            // Replace placeholders
                            message = message.replace(`{${ruleName}}`, ruleValue);
                            errors.push(message);
                        }
                    }

                    return errors;
                },

                // Async validation
                async validateAsync(value, asyncValidator) {
                    try {
                        const result = await asyncValidator(value);
                        return result === true ? [] : [result || 'Validation failed'];
                    } catch (error) {
                        return [error.message || 'Validation error'];
                    }
                }
            };

            // Enhanced form validation
            Yaka.prototype.validateForm = function(schema, options = {}) {
                const { realTime = false, showErrors = true } = options;
                const form = this.elements[0];
                if (!form) return { valid: true, errors: {} };

                const errors = {};
                let valid = true;

                // Get all form data
                const formData = {};
                form.querySelectorAll('[name]').forEach(input => {
                    formData[input.name] = input.value;
                });

                // Validate each field
                Object.entries(schema).forEach(([fieldName, fieldRules]) => {
                    const input = form.querySelector(`[name="${fieldName}"]`);
                    if (!input) return;

                    const value = input.value;
                    const fieldErrors = Yaka.validator.validate(value, fieldRules, formData);

                    if (fieldErrors.length > 0) {
                        errors[fieldName] = fieldErrors;
                        valid = false;

                        if (showErrors) {
                            // Add error class
                            input.classList.add('yaka-error');
                            
                            // Show error message
                            let errorElement = input.parentElement.querySelector('.yaka-error-message');
                            if (!errorElement) {
                                errorElement = document.createElement('div');
                                errorElement.className = 'yaka-error-message';
                                input.parentElement.appendChild(errorElement);
                            }
                            errorElement.textContent = fieldErrors[0];
                        }
                    } else if (showErrors) {
                        // Remove error state
                        input.classList.remove('yaka-error');
                        const errorElement = input.parentElement.querySelector('.yaka-error-message');
                        if (errorElement) {
                            errorElement.remove();
                        }
                    }

                    // Real-time validation
                    if (realTime && !input._yakaValidationBound) {
                        input.addEventListener('blur', () => {
                            const currentValue = input.value;
                            const currentErrors = Yaka.validator.validate(currentValue, fieldRules, formData);
                            
                            if (currentErrors.length > 0 && showErrors) {
                                input.classList.add('yaka-error');
                                let errorElement = input.parentElement.querySelector('.yaka-error-message');
                                if (!errorElement) {
                                    errorElement = document.createElement('div');
                                    errorElement.className = 'yaka-error-message';
                                    input.parentElement.appendChild(errorElement);
                                }
                                errorElement.textContent = currentErrors[0];
                            } else if (showErrors) {
                                input.classList.remove('yaka-error');
                                const errorElement = input.parentElement.querySelector('.yaka-error-message');
                                if (errorElement) {
                                    errorElement.remove();
                                }
                            }
                        });
                        input._yakaValidationBound = true;
                    }
                });

                return { valid, errors };
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
