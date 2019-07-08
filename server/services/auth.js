const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const nameSpace = 'http://localhost:3000/';

//Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://portfolio-stowe.auth0.com/.well-known/jwks.json'
  }),

  audience: 'It9itOzefx06xsg2RdrcIIEPCKf64Sot',
  issuer: 'https://portfolio-stowe.auth0.com/',
  algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;
  if (user && (user[nameSpace + 'role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You do not have authorization to view this data'})
  }
}

