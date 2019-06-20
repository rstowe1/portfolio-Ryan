const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute:15,
    jwksUri: 'https://portfolio-stowe.auth0.com/.well-known/jwks.json'
  }),

  audience: 'It9itOzefx06xsg2RdrcIIEPCKf64Sot',
  issuer:'https://portfolio-stowe.auth0.com/',
  algorithms: ['RS256']
})