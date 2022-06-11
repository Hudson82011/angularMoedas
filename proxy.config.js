const proxy = [
    {
      context: '/api',
      target: 'https://api.hgbrasil.com/finance',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;