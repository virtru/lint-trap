'use strict';

module.exports = {
  extends: 'airbnb-base/legacy',
  env: {                           
    browser: true, // Browser global variables
    node: true, // Node.js global variables and Node.js-specific rules
    es6: true
  },
  plugins: [
    'virtru-lint'
  ],

/*@TODO: Decide upon these later
  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': false,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralDuplicateProperties': false,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    'jsx': true
  },
*/

  rules: { // See http://eslint.org/docs/rules/
    /**
     * Values (see http://eslint.org/docs/user-guide/configuring):
     *  0 = Rule turned off
     *  1 = Warn
     *  2 = Error
     *
     * Docs for a rule, %s, are found at http://eslint.org/docs/rules/%s
     *  Example: http://eslint.org/docs/rules/no-shadow
     */

    /**
     * Node
     */
    'global-require': 0,

    /**
     * Strict mode
     */
    //@TODO: We aren't using babel at the moment.
    //babel inserts 'use strict'; for us
    //'strict': [2, 'never'],          

    /**
     * Virtru Specific Rules
     */
    'virtru-lint/virtru-func-names': 1,

    /**
     * ES6
     */
/*
    'no-var': 2,                     
    'prefer-const': 2,               
*/
    /**
     * Variables
     */
    'no-shadow': [2, {               
      allow: ['res', 'req', 'err', 'next', 'resolve', 'reject', 'done', 'cb']
    }],
    'no-unused-vars': [2, {          
      'vars': 'all',
      'args': 'none'
    }],
    'no-use-before-define': [2, 'nofunc'],       

    /**
     * Possible errors
     */
    'comma-dangle': [2, 'only-multiline'],    
    'no-cond-assign': [2, 'except-parens'], 
    //'no-console': 1,                 
    'no-debugger': 1,                
    'no-alert': 2,                   
    //'no-constant-condition': 1,      
    //'no-dupe-keys': 2,               
    //'no-duplicate-case': 2,          
    //'no-empty': 2,                   
    //'no-ex-assign': 2,               
    'no-extra-boolean-cast': 2,      
    'no-extra-parens': [2, 'functions'], 
    //'no-extra-semi': 2,              
    //'no-func-assign': 2,             
    //'no-inner-declarations': 2,      
    //'no-invalid-regexp': 2,          
    //'no-irregular-whitespace': 2,    
    //'no-obj-calls': 2,               
    //'no-sparse-arrays': 2,           
    //'no-unreachable': 2,             
    //'use-isnan': 2,                  
    'valid-jsdoc': [1, {requireReturn: false}],

    /**
     * Best practices
     */
    'consistent-return': [1, { treatUndefinedAsUnspecified: true}],          
    //'curly': [2, 'multi-line'],      
    //'default-case': 2,               
    /*'dot-notation': [2, {            
      'allowKeywords': true
    }],*/
    'eqeqeq': 2,                     
    //'guard-for-in': 2,               
    //'no-caller': 2,                  
    //'no-else-return': 2,             
    'no-eq-null': 2,                 
    //'no-eval': 2,                    
    //'no-extend-native': 2,           
    //'no-extra-bind': 2,              
    //'no-fallthrough': 2,             
    //'no-floating-decimal': 2,        
    //'no-implied-eval': 2,            
    //'no-lone-blocks': 2,             
    //'no-loop-func': 2,               
    //'no-multi-str': 2,               
    //'no-native-reassign': 2,         
    //'no-new': 2,                     
    //'no-new-func': 2,                
    //'no-new-wrappers': 2,            
    //'no-octal': 2,                   
    //'no-octal-escape': 2,            
    'no-param-reassign': 0,          
    //'no-proto': 2,                   
    //'no-redeclare': 2,               
    //'no-return-assign': 2,           
    //'no-script-url': 2,              
    //'no-self-compare': 2,            
    //'no-sequences': 2,               
    //'no-throw-literal': 2,           
    //'no-with': 2,                    
    //'radix': 2,                      
    'vars-on-top': 0,                
    'wrap-iife': [2, 'any'],         
    //'yoda': 2,                       

    /**
     * Style
     */
    /*'brace-style': [                 
      2,
      '1tbs',
      { 'allowSingleLine': true }
    ],*/
    'camelcase': [2, {               
      'properties': 'always'
    }],
    /*'comma-spacing': [2, {           
      'before': false,
      'after': true
    }],*/
    //'comma-style': [2, 'last'],      
    'eol-last': 0,                   
    'func-names': 0,                 
    /*'indent': [                      
      2,
      2,
      { 'SwitchCase': 1 }
    ],*/
    /*'key-spacing': [2, {             
        'beforeColon': false,
        'afterColon': true
     }],*/
    'max-len': [2, 200, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'max-statements': [1, 30],
    /*'new-cap': [2, {                 
      'newIsCap': true
    }],*/
    'no-multiple-empty-lines': [1, { 
      'max': 2
    }],
    //'no-nested-ternary': 2,          
    //'no-new-object': 2,              
    'no-underscore-dangle': 0,       
    'object-curly-spacing': [1, 'always'],
    //'one-var': [2, 'never'],         
    'padded-blocks': [0, 'never'],   
    /*'quotes': [
      2, 'single', {avoidEscape: true}    
    ],*/
    //'semi': [2, 'always'],           
    /*'semi-spacing': [2, {            
      'before': false,
      'after': true
    }],*/
    'space-before-function-paren': [2, 'never'], 
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 2,            
    'spaced-comment': [1, 'always',  {
      'exceptions': ['*'],
      'markers': ['@TODO:', '@NOTE:', '@FIXME:', '@HACK:']
    }],

  }
};

let version = require('eslint/package.json').version;
let semver = require('semver');

if (semver.satisfies(version, '>=2.0.0')) {
  module.exports.rules['keyword-spacing'] = 2;            
} else {
  module.exports.rules['no-spaced-func'] = 2;             
  module.exports.rules['no-trailing-spaces'] = 2;         
  module.exports.rules['space-return-throw-case'] = 2;    
}
