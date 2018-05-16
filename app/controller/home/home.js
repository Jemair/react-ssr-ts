"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const Model = require("../../mocks/article/list");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('home/home.js', Model.getPage(1, 10));
    }
    async client() {
        const { ctx } = this;
        await ctx.renderClient('home/home.js', Model.getPage(1, 10));
    }
    async element() {
        const { ctx } = this;
        ctx.render('element/element.js', Model.getPage(1, 10));
    }
    async pager() {
        const { ctx } = this;
        const pageIndex = ctx.query.pageIndex;
        const pageSize = ctx.query.pageSize;
        ctx.body = Model.getPage(pageIndex, pageSize);
    }
}
exports.default = HomeController;
