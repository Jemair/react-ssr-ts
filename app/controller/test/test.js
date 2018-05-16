"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return class TestController extends app.Controller {
        async index() {
            const { ctx } = this;
            await ctx.render('test/test.js', { title: 'error test', message: 'react server side render!' });
        }
    };
}
exports.default = default_1;
