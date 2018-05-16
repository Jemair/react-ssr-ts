'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HelloController extends egg_1.Controller {
    async element() {
        const { ctx } = this;
        await ctx.render('hello/element.js', {
            title: '--react server side render--',
            keywords: 'react, server side render',
            message: { text: 'react server side render for element!' },
        });
    }
    async component() {
        const { ctx } = this;
        await ctx.render('hello/component.js', {
            title: '--react server side render--',
            keywords: 'react, server side render',
            message: { text: 'react server side render for component!' },
        });
    }
}
exports.default = HelloController;
