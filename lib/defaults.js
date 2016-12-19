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

  rules: {
    /**
     * See http://eslint.org/docs/rules/
     *
     * Values (see http://eslint.org/docs/user-guide/configuring):
     *  0 = Rule turned off
     *  1 = Warn
     *  2 = Error (causes non-zero exit code)
     *
     * Docs for a rule, %s, are found at http://eslint.org/docs/rules/%s
     *  Example: http://eslint.org/docs/rules/no-shadow
     */

    /**
     * Node
     */
    'global-require': 0,

    /**
     * Virtru Specific Rules
     */
    'virtru-lint/virtru-func-names': 1,

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
    'no-debugger': 1,                
    'no-alert': 2,                   
    'no-extra-boolean-cast': 2,      
    'no-extra-parens': [2, 'functions'], 
    'valid-jsdoc': [1, {requireReturn: false}],

    /**
     * Best practices
     */
    'consistent-return': [1, { treatUndefinedAsUnspecified: true}],          
    'eqeqeq': 2,                     
    'no-eq-null': 2,                 
    'no-param-reassign': 0,          
    'vars-on-top': 0,                
    'wrap-iife': [2, 'any'],         

    /**
     * Style
     */
    'camelcase': [2, {               
      'properties': 'always'
    }],
    'eol-last': 0,                   
    'func-names': 0,                 
    'max-len': [2, 200, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'max-statements': [1, 30],
    'no-multiple-empty-lines': [1, { 
      'max': 2
    }],
    'no-nested-ternary': 2,
    'no-underscore-dangle': 0,       
    'object-curly-spacing': [1, 'always'],
    'padded-blocks': [0, 'never'],   
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
