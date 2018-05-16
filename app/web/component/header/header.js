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
import './header.css';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.componentDidMount = function () {
        console.log('----Header componentDidMount-----');
    };
    Header.prototype.render = function () {
        return React.createElement("header", { className: "header" },
            React.createElement("div", { className: "container" },
                React.createElement("h1", null,
                    React.createElement("a", { href: "/", className: "router-link-active" }, "Egg+React")),
                React.createElement("ul", { className: "nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { href: "/" }, "Server-Render")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { href: "/client" }, "Client-Render")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { href: "/css/module" }, "Css-Module")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { href: "/spa/redux" }, "SPA-CSR")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { href: "/spa/ssr" }, "SPA-SSR")))));
    };
    return Header;
}(Component));
export default Header;
