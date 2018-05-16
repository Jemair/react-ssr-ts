'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class CssModuleController extends egg_1.Controller {
    async cssModule() {
        const { ctx } = this;
        await ctx.render('css/module/module.js', {
            title: '--react server side render--',
            keywords: 'react, server side render',
            message: { text: 'react server side render! support css module test!' },
        });
    }
}
exports.default = CssModuleController;
