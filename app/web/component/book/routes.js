import React from 'react';
import { Route } from 'react-router-dom';
import Home from './index';
var NotFound = function () {
    var render = function (_a) {
        var staticContext = _a.staticContext;
        if (staticContext) {
            staticContext.status = 404;
        }
        return (React.createElement("div", null,
            React.createElement("h1", null, "404 : Not Found")));
    };
    return (React.createElement(Route, { render: render }));
};
var routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '*',
        component: NotFound,
    },
];
export default routes;
