"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class RouterController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('router/router.js', { message: 'react server side render!' });
    }
}
exports.default = RouterController;
