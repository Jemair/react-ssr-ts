import { applyMiddleware, createStore as _createStore } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';
var hasReduxDevTool = function () {
    return !EASY_ENV_IS_NODE
        && process.env.NODE_ENV !== 'production'
        && window.devToolsExtension;
};
export default function create(initialState) {
    var create = hasReduxDevTool()
        ? window.devToolsExtension()(_createStore)
        : _createStore;
    var createStore = applyMiddleware.apply(void 0, middlewares)(create);
    var store = createStore(reducers, initialState);
    module.hot && module.hot.accept('./reducers', function () {
        store.replaceReducer(require('./reducers'));
    });
    return store;
}
