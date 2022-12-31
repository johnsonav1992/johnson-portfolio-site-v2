/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [ '@remix-run/eslint-config', '@remix-run/eslint-config/node' ]
    , 'rules': {
        'indent': [
            'error'
            , 4
            , {
                'SwitchCase': 1
            }
        ]
        , 'max-len': [
            'warn'
            , {
                'code': 80
                , 'ignorePattern': '\\s'
                , 'ignoreTemplateLiterals': true
            }
        ]
        , 'comma-style': [
            'warn'
            , 'first'
            , {
                'exceptions': {
                    'ObjectPattern': false
                    , 'ArrayPattern': false
                }
            }
        ]
        , 'comma-spacing': [
            'error'
            , {
                'before': false
                , 'after': true
            }
        ]
        , 'comma-dangle': [
            'error'
            , 'never'
        ]
        , 'quotes': [
            'error'
            , 'single'
            , {
                'allowTemplateLiterals': true
            }
        ]
        , 'linebreak-style': [
            'warn'
            , 'unix'
        ]
        , 'space-in-parens': [
            'error'
            , 'always'
        ]
        , 'array-bracket-spacing': [
            'error'
            , 'always'
        ]
        , 'computed-property-spacing': [
            'error'
            , 'always'
        ]
        , 'object-curly-spacing': [
            'error'
            , 'always'
        ]
        , 'template-curly-spacing': [
            'error'
            , 'always'
        ]
        , 'brace-style': [
            'warn'
            , '1tbs'
            , {
                'allowSingleLine': true
            }
        ]
        , 'strict': [
            'warn'
            , 'global'
        ]
        , 'space-before-function-paren': [
            'error'
            , 'always'
        ]
        , 'no-unused-vars': [
            'warn'
            , {
                'args': 'none'
            }
        ]
        , 'semi': [
            'error'
            , 'always'
        ]
        , 'no-case-declarations': 'off'
        , 'no-unsafe-finally': 'off'
        , 'no-unreachable': 'warn'
        , 'no-undef': 'warn'
        , 'no-empty-pattern': 'warn'
    }
};

