import { createStore } from 'redux'
import reducers from './reducers'

interface Module {
  hot: {
    accept: (path: string, cb: () => void) => void,
  }
}
declare var module: Module

export default function create(initialState) {
  const store = createStore(reducers, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
