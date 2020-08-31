module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', {
        modules: false,
      }],
      '@babel/preset-react',
    ],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread', {
        loose: true,
      }],
    ],
    env: {
      test: {
        presets: [
          ['@babel/preset-env', { modules: 'cjs' }],
        ],
      },
    },
  };
};
