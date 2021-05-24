export default {
  babelPlugins: [
    ['import', { libraryName: 'antd', style: false }],
    ['lodash', { id: ['lodash'] }],
  ],
  baseUrl: '/',
  proxy: {
    from: ['/api'],
    target: 'http://localhost:9001',
    changeOrigin: true,
    logLevel: 'debug',
    // pathRewrite: {
    //   '^/api': '',
    // },
  },
};
