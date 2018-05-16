var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'antd';
import Home from './components/home';
import About from './components/about';
var tabKey = { '/spa/ssr': 'home', '/spa/ssr/about': 'about' };
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            console.log('click ', e, _this.state);
            _this.setState({
                current: e.key,
            });
        };
        var url = props.url;
        _this.state = { current: tabKey[url] };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Menu, { onClick: this.handleClick, selectedKeys: [this.state.current], mode: "horizontal" },
                React.createElement(Menu.Item, { key: "home" },
                    React.createElement(Link, { to: "/spa/ssr" }, "SPA-Redux-Server-Side-Render")),
                React.createElement(Menu.Item, { key: "about" },
                    React.createElement(Link, { to: "/spa/ssr/about" }, "About"))),
            React.createElement(Switch, null,
                React.createElement(Route, { path: "/spa/ssr/about", component: About }),
                React.createElement(Route, { path: "/spa/ssr", component: Home }))));
    };
    return App;
}(Component));
export default App;
