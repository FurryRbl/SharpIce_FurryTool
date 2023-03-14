const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.status = 404;
  ctx.body = {
    code : ctx.res.statusCode,
    msg: '这里是API端！如需要使用请阅读文档！'
  }
})

router.get('/status', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    code : ctx.res.statusCode
  }
})

module.exports = router
