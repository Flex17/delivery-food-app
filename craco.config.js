const path = require("path");

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
	webpack: {
		alias: {
			"@api": resolvePath("src/api"),
			"@assets": resolvePath("src/assets"),
			"@hooks": resolvePath("src/hooks"),
			"@models": resolvePath("src/models"),
			"@pages": resolvePath("src/pages"),
			"@redux": resolvePath("src/redux"),
			"@ui": resolvePath("src/ui"),
		}
	},
};
