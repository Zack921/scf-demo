const Koa = require('koa');
const Router = require('koa-router');

const { getEventAndContext } = require('serverlessplus/middleware');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/', async (ctx) => {
  ctx.body = 'hello zack';
});

router.get('/showEnv', async (ctx) => {
  ctx.body = process.env.ENV_NAME || 'no set env';
});

router.get('/testVersion', async (ctx) => {
  ctx.body = 'testVersion';
});

router.get('*', async (ctx) => {
  ctx.body = 'get 404';
});

router.post('*', async (ctx) => {
  ctx.body = 'post 404';
});

app.use(router.routes());

app.use(getEventAndContext);

module.exports = app;

// app.listen(3000, () => {
//   console.log('[demo] starting at port 3000');
// })