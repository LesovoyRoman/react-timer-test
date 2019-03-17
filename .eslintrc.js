module.exports = {
	"env": {
		"browser": true,
		"commonjs": true
	},
	"extends": "airbnb",
	"parserOptions": {
		"ecmaFeatures": {
				"jsx": true
		},
		"ecmaVersion": 2018
	},
	"plugins": [
		"react"
	],
	"rules": {
		"import/no-named-as-default": 0,
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"single"
		],
	}
};