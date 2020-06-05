const path = require('path');

const appConfig = {
   env: process.env.NODE_ENV || 'development',
   port: process.env.PORT || 8080,
   ip: process.env.IP || undefined,
   root: path.join(__dirname, '..'),
   apiRoot: '/api'
};

module.exports = appConfig;