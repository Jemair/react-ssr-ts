import { createStore } from 'redux';
import reducers from './reducers';
export default function create(initialState) {
    var store = createStore(reducers, initialState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', function () {
            var nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
