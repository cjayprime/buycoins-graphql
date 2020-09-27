const schema = require('./src/schema');

module.exports = {
	env: {
		node: true,
		browser: false,
		jest: true,
		es6: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		allowImportExportEverywhere: true,
		codeFrame: true
	},
	extends: 'eslint:recommended',
	plugins: [
		'graphql',
	],
	rules: {
		'graphql/template-strings': ['error', {
			env: 'apollo',
			schemaString: schema,
		}],
		indent: [
			'error',
			2
		],
		"no-tabs": [0],
		"no-mixed-spaces-and-tabs": [0],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		]
	},
};
