const path = require('path');
module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/Base')],
	},
};
