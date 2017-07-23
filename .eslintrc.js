module.exports = {
    "env": {
        "browser": true,
        "es6" : true,  //启动es6的全局变量
        "commonjs" : true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions" : {
        "ecmaVersion" : 6,
        "sourceType" : "module",
        "ecmaFeatures" : {
            "jsx" : true
        }
    },
    "plugins" :[
        "react"
    ]
};