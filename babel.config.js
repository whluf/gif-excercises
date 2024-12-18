module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    /* keep reanimated plugin at the end of this list */
    plugins: ["nativewind/babel", "react-native-reanimated/plugin"],
  };
};
