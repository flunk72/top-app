module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ 
            params: {
            overrides: {
              // disable plugins
              removeViewBox: false,
            },
          }, name: "preset-default" }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};