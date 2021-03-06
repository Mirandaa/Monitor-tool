const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  applyProxys(app, [
    {
      path: '/all',
      target: 'http://101.132.128.77:8080'
    },
    {
      path: '/node',
      target: 'http://101.132.128.77:8080'
    },
    {
      path: '/create',
      target: 'http://101.132.128.77:8080'
    },
    {
      path: '/createTrace',
      target: 'http://101.132.128.77:8080'
    },
    {
      path: '/commonMetrics',
      target: 'http://chance2018.imwork.net'
    }
  ])
}

function applyProxys(app, proxyConfigs) {
  proxyConfigs.forEach((c) => {
    proxyWrapper(app, c)
  })
}

function proxyWrapper(app, { path, target, pathRewrite }) {
  let p = {
    target,
    changeOrigin: true,
    secure: false
  }
  if (pathRewrite) {
    p.pathRewrite = pathRewrite
  }
  return app.use(proxy(path, p))
}