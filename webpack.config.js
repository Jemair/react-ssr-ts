const path = require('path');
module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  hot: true,
  entry: {
    /*include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' },
      { 'spa/redux': 'app/web/page/spa/redux.jsx?loader=false' },
      { 'spa/client': 'app/web/page/spa/client.jsx?loader=false' },
      { 'spa/ssr': 'app/web/page/spa/ssr.tsx?loader=false' }
    ],*/
    include: [
      {'spa/ssr': 'app/web/page/spa/ssr.tsx?loader=false'},
      {'book/book': 'app/web/page/book/book.tsx?loader=false'},
    ],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.ts',
      server: 'app/web/framework/entry/server-loader.ts'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  dll: ['react', 'react-dom'],
  loaders: {
    tslint: {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('tslint-loader'),
      enforce: 'pre',
    },
    typescript: {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('ts-loader'),
    },
    sass:{
      enable: true,
      type: ['client', 'server'],
      test: /\.scss/,
      use: [{
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          camelCase: true,
          minimize: true,
          localIdentName: "[local]_[hash:base64:5]"
        }
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: ['app/web/page/spa']
        }
      }],
      postcss: true
    }
  },
  plugins: {

  },

  done() {
    console.log('---webpack compile finish---');
  }
};
