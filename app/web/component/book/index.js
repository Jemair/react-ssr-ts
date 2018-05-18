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
import s from './index.scss';
var mapStateToProps = function (state) {
    return {
        list: state.list,
        url: state.url,
    };
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderList = function () {
            var list = _this.props.list;
            return list.map(function (_a) {
                var id = _a.id, title = _a.title, summary = _a.summary, hits = _a.hits, url = _a.url;
                return (React.createElement("li", { key: id, className: s.item },
                    React.createElement("p", null,
                        "id: ",
                        id),
                    React.createElement("p", null,
                        "title: ",
                        title),
                    React.createElement("p", null,
                        "summary: ",
                        summary),
                    React.createElement("p", null,
                        "hits: ",
                        hits),
                    React.createElement("p", null,
                        "url: ",
                        url)));
            });
        };
        return _this;
    }
    App.fetch = function () {
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
    App.prototype.render = function () {
        var _a = this.props, url = _a.url, list = _a.list;
        return (React.createElement("div", null,
            React.createElement("span", null,
                "url: ",
                url),
            React.createElement("ul", null, this.renderList())));
    };
    App = __decorate([
        connect(mapStateToProps)
    ], App);
    return App;
}(PureComponent));
export default App;
