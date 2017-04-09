var path = require('path');

module.exports = {
	entry: {
		main: './src/main'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
}