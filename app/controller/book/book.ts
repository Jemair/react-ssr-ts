import { Controller } from 'egg'
export default class BookController extends Controller {
  public async index() {
    const { ctx } = this
    await ctx.render('book/book.js', { url: ctx.url })
  }
}
