const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {
    instrumentationHook: true,
  },
});
