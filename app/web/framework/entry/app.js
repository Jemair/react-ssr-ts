var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { render } from 'react-dom';
import Hello from './hello.jsx';
if (typeof window === 'object') {
    var state = window.__INITIAL_STATE__;
    render(React.createElement(Hello, __assign({}, state)), document.getElementById('app'));
}
else {
    module.exports = Hello;
}
