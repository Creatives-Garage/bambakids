module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',
            publicPath: '/_next/static',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bambaapp.creativesgarage.org',
        port: '',
        pathname: '/**',
      },
    ],
  }
};