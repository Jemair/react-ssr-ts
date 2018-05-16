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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { add, del } from '../actions';
import s from './home.scss';
var mapStateToProps = function (state) {
    return {
        list: state.list,
    };
};
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderList = function () {
            var _a = _this.props, list = _a.list, del = _a.del;
            return list.map(function (item) {
                return (React.createElement("li", { key: item.id },
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
                                    React.createElement("a", { href: "#", target: "_blank", className: "get" }, "wangky")),
                                React.createElement("li", null,
                                    React.createElement("a", null, "+\u6536\u85CFabd")),
                                React.createElement("li", null,
                                    React.createElement("span", { className: "timeago" }, item.summary)),
                                React.createElement("li", null,
                                    React.createElement("span", { className: "redux-btn-del", onClick: function () { return del(item.id); } }, "Delete")))))));
            });
        };
        return _this;
    }
    Home.fetch = function () {
        return Promise.resolve({
            list: [{
                    id: 0,
                    title: 'Egg+ 渲染骨架',
                    summary: '基于Egg + React +ddd Webpack3/Webpack2 服务端渲染同构工程骨架项目',
                    hits: 550,
                    url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate',
                }, {
                    id: 1,
                    title: 'easywebpack',
                    summary: 'programming instead of configuration, webpack is so easy',
                    hits: 550,
                    url: 'https://github.com/hubcarl/easywebpack',
                }, {
                    id: 2,
                    title: '前端工程化解决方案脚手架easywebpack-cli',
                    summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
                    hits: 278,
                    url: 'https://github.com/hubcarl/easywebpack-cli',
                }],
        }).then(function (data) {
            return data;
        });
    };
    Home.prototype.render = function () {
        var _a = this.props, add = _a.add, list = _a.list;
        var id = list.length + 1;
        var item = {
            id: id,
            title: "Egg+Redddact \u670D\u52A1\u7AEF\u6E32\u67D3\u9AA8\u67B6-" + id,
            summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染骨架项目',
            hits: 550 + id,
            url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate',
        };
        return (React.createElement("div", { className: "redux-nav-item" },
            React.createElement("h3", null, "SPA Server Side"),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row row-offcanvas row-offcanvas-right" },
                    React.createElement("div", { className: "col-xs-12 col-sm-9" },
                        React.createElement("ul", { className: "smart-artiles", id: "articleList" }, this.renderList())))),
            React.createElement("div", { className: "redux-btn-add " + s.add, onClick: function () { return add(item); } }, "Add")));
    };
    Home = __decorate([
        connect(mapStateToProps, { add: add, del: del })
    ], Home);
    return Home;
}(PureComponent));
export default Home;
