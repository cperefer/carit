module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
