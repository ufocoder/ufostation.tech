module.exports = {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	tabWidth: 2,
	useTabs: true,
	printWidth: 80,
	semi: true,
	trailingComma: 'es5',
	singleQuote: true,
	endOfLine: 'lf',
};
