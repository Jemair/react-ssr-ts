"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const Model = require("../../mocks/article/list");
class AppController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('app/app.js', { url: this.ctx.url.replace(/\/app/, '') });
    }
    async list() {
        const { ctx } = this;
        const pageIndex = ctx.query.pageIndex;
        const pageSize = ctx.query.pageSize;
        ctx.body = Model.getPage(pageIndex, pageSize);
    }
    async detail() {
        const { ctx } = this;
        const id = ctx.query.id;
        ctx.body = Model.getDetail(id);
    }
}
exports.default = AppController;
