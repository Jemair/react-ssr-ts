"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class BookController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('book/book.js', { url: ctx.url });
    }
}
exports.default = BookController;
