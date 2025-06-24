/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Configuration Webpack pour résoudre les fichiers .tsx
Config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      alias: {
        ...currentConfiguration.resolve?.alias,
      },
    },
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules || []),
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                compilerOptions: {
                  jsx: 'react-jsx',
                },
              },
            },
          ],
        },
      ],
    },
  };
});

// Configuration additionnelle pour GitHub Actions
Config.setConcurrency(1); // Limite la concurrence pour éviter les problèmes de mémoire
Config.setChromiumDisableWebSecurity(true);
Config.setChromiumHeadlessMode(true);

// Pour le debugging
Config.setLogLevel('verbose');
