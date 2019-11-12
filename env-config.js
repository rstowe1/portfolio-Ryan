const prod = process.env.NODE_ENV === 'production';

module.exports = {
<<<<<<< HEAD
  'process.env.BASE_URL': prod ? 'https://ryanw.tech' : 'http://localhost:3000',
=======
  'process.env.BASE_URL': prod ? 'https://www.ryanw.tech' : 'http://localhost:3000',
>>>>>>> 9e0e3f80503f8fbe4ce7c4c1f3d1a827bdeb58fe
  'process.env.NAMESPACE':  'https://portfolio-stowe.herokuapp.com',
  'process.env.CLIENT_ID': 'It9itOzefx06xsg2RdrcIIEPCKf64Sot'
};
