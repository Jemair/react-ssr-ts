import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
export function configureStore(history, initialState) {
    var reducer = combineReducers({
        routing: routerReducer
    });
    var store = createStore(reducer, initialState, compose(applyMiddleware(routerMiddleware(history))));
    return store;
}
