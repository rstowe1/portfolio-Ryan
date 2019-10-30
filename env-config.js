const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-stowe.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-stowe.herokuapp.com',
  'process.env.CLIENT_ID': 'It9itOzefx06xsg2RdrcIIEPCKf64Sot'
}