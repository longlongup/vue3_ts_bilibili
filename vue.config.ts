import { VantResolver } from 'unplugin-vue-components/resolvers';
import ComponentsPlugin from 'unplugin-vue-components/webpack';

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
