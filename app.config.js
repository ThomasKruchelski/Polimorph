const appName = 'Polimorph';
const appSlug = 'Polimorph';
const appFact = 'Bem vindo ao Polimorph!';

module.exports = {
  name: appName,
  slug: appSlug,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  orientation:'portrait',
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    "supportsTablet": true
  },
  android: {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    }
  },
  web: {
    "favicon": "./assets/favicon.png"
  },
  extra: {
    fact: appFact,
  }
};