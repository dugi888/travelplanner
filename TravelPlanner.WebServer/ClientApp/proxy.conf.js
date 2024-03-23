const Agent = require('agentkeepalive')

module.exports = {
  '/api':{
    target: 'https://localhost:5000',
    secure: true,
    logLevel: 'debug',
    agent: new Agent({
      freeSocketTimeout: 30000,
      socketActiveTTL: 30000,
      keepAlive: true,
      maxFreeSockets: 20,
      keepAliveMsecs: 1000
    }),
  }
}
