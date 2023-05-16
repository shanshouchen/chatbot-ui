const { createProxyMiddleware } = require('http-proxy-middleware');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://gpt.mshutech.com/api/:path*'
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'gpt.mshutech.com'
          }
        ]
      }
    ];
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
  // 代理设置
  async serverMiddleware() {
    this.server.use('/', createProxyMiddleware({
      target: 'https://gpt.mshutech.com',
      changeOrigin: true,
      pathRewrite: {
        '^/': '/'
      }
    }));
  },
};

module.exports = nextConfig;
