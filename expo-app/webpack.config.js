const createExpoWebpackConfig = require("@expo/webpack-config");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfig({
    ...env,
    ...argv,
  });

  config.entry = path.resolve(__dirname, "./index.js");
  config.output = {
    ...config.output,
    uniqueName: "expo_app",
    publicPath: "auto",
    scriptType: "text/javascript",
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: "expo_app",
      filename: "remoteEntry.js",
      remotes: {
        react_component: "react_component@http://localhost:3001/remoteEntry.js",
        ionicAngularApp: "ionicAngularApp@http://localhost:4200/remoteEntry.js",
      },
      exposes: {
        "./Button": "./components/Button",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true,
        },
        expo: {
          singleton: true,
          requiredVersion: deps.expo,
          eager: true,
        },
        "react-native": {
          singleton: true,
          requiredVersion: deps["react-native"],
          eager: true,
        },
        "react-native-web": {
          singleton: true,
          requiredVersion: deps["react-native-web"],
          eager: true,
        },
      },
    })
  );
  console.log(312, JSON.stringify(config));
  return config;
};
