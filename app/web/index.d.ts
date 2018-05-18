declare var EASY_ENV_IS_NODE: boolean
declare var EASY_ENV_IS_BROWSER: boolean
declare var process: {
  env: {
    NODE_ENV: string,
  },
}

interface Window {
  __INITIAL_STATE__: {
    url: string,
  },
  __REDUX_DEVTOOLS_EXTENSION__: () => void,
  devToolsExtension: any,
}

declare var window: Window

interface Module {
  hot: {
    accept: (path?: string, cb?: () => void) => void,
  },
  exports: any
}
declare var module: Module
