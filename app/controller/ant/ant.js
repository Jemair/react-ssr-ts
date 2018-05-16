'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class TabController extends egg_1.Controller {
    async tab() {
        const { ctx } = this;
        await ctx.render('ant/tab/tab.js', {
            title: '--ant design server side render--',
            keywords: 'react, server side render, ant design',
            message: { text: 'react ant design server side render demo!' },
        });
    }
}
exports.default = TabController;
