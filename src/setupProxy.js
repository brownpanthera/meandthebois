const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.chess.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/pub/player'
      }
    })
  );
};
