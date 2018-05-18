import { applyMiddleware, createStore as _createStore } from 'redux'
import reducers from './reducers'
import middlewares from './middlewares'

const hasReduxDevTool = () => {
  return !EASY_ENV_IS_NODE
    && process.env.NODE_ENV !== 'production'
    && window.devToolsExtension
}

export default function create(initialState) {
  const create = hasReduxDevTool()
    ? window.devToolsExtension()(_createStore)
    : _createStore

  const createStore = applyMiddleware(...middlewares)(create)
  const store = createStore(reducers, initialState)

  module.hot && module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'))
  })

  return store
}
