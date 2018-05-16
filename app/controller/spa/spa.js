"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class SPAController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        ctx.redirect('/spa/ssr');
    }
    async client() {
        const { ctx } = this;
        await ctx.renderClient('spa/client.js', {});
    }
    async redux() {
        const { ctx } = this;
        await ctx.renderClient('spa/redux.js', {});
    }
    async ssr() {
        const { ctx } = this;
        await ctx.render('spa/ssr.js', { url: ctx.url });
    }
}
exports.default = SPAController;
