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
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("title", null, this.props.title),
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" }),
                React.createElement("meta", { name: "keywords", content: this.props.keywords }),
                React.createElement("meta", { name: "description", content: this.props.description }),
                React.createElement("link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" })),
            React.createElement("body", null,
                React.createElement("div", { id: "app" }, this.props.children)));
    };
    return Layout;
}(Component));
export default Layout;
