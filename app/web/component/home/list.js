'use strict';
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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.componentDidMount = function () {
        console.log('----List componentDidMount-----', this.props);
        window.addEventListener('scroll', function () {
        }, false);
    };
    List.prototype.render = function () {
        return React.createElement("div", { className: "container smart-container" },
            React.createElement("div", { className: "row row-offcanvas row-offcanvas-right" },
                React.createElement("div", { className: "col-xs-12 col-sm-9" },
                    React.createElement("ul", { className: "smart-artiles", id: "articleList" }, this.props.list.map(function (item) {
                        return React.createElement("li", { key: item.id },
                            React.createElement("div", { className: "point" },
                                "+",
                                item.hits),
                            React.createElement("div", { className: "card" },
                                React.createElement("h2", null,
                                    React.createElement("a", { href: item.url, target: "_blank" }, item.title)),
                                React.createElement("div", null,
                                    React.createElement("ul", { className: "actions" },
                                        React.createElement("li", null,
                                            React.createElement("time", { className: "timeago" }, item.moduleName)),
                                        React.createElement("li", { className: "tauthor" },
                                            React.createElement("a", { href: "#", target: "_blank", className: "get" }, "Sky")),
                                        React.createElement("li", null,
                                            React.createElement("a", null, "+\u6536\u85CF")),
                                        React.createElement("li", null,
                                            React.createElement("span", { className: "timeago" }, item.summary)),
                                        React.createElement("li", null,
                                            React.createElement("span", { className: "timeago" }))))));
                    })))));
    };
    return List;
}(Component));
export default List;
