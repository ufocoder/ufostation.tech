module.exports = {
	plugins: ["./node_modules/prettier-plugin-astro"],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	tabWidth: 2,
	useTabs: false,
	semi: true,
	trailingComma: 'es5',
	singleQuote: true,
	endOfLine: 'lf',
};
