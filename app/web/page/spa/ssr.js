import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { matchRoutes } from 'react-router-config';
import Layout from 'framework/layout/layout';
import SSR from 'component/spa/ssr/ssr';
import { create } from 'component/spa/ssr/store';
import routes from 'component/spa/ssr/routes';
import 'asset/css/global.css';
import './spa.css';
var clientRender = function () {
    var store = create(window.__INITIAL_STATE__);
    var url = store.getState().url;
    var render = function (App) {
        ReactDOM.render(React.createElement(AppContainer, null,
            React.createElement(Provider, { store: store },
                React.createElement(BrowserRouter, null,
                    React.createElement(App, { url: url })))), document.getElementById('app'));
    };
    render(SSR);
    if (module.hot) {
        module.hot.accept();
    }
};
var serverRender = function (context, options) {
    var url = context.state.url;
    var branch = matchRoutes(routes, url);
    var promises = branch.map(function (_a) {
        var route = _a.route;
        var fetch = route.component.fetch;
        return fetch instanceof Function ? fetch() : Promise.resolve(null);
    });
    return Promise.all(promises).then(function (data) {
        var initState = context.state;
        data.forEach(function (item) {
            Object.assign(initState, item);
        });
        context.state = Object.assign({}, context.state, initState);
        var store = create(initState);
        return function () { return (React.createElement(Layout, null,
            React.createElement(AppContainer, null,
                React.createElement(Provider, { store: store },
                    React.createElement(StaticRouter, { location: url, context: {} },
                        React.createElement(SSR, { url: url })))))); };
    });
};
export default EASY_ENV_IS_NODE ? serverRender : clientRender();
