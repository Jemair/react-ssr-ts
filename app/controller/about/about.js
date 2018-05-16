"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class AboutController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('about/about.js', { message: 'react server side render!' });
    }
}
exports.default = AboutController;
