const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  // ... other config
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ['next-intl'],
  },
});
