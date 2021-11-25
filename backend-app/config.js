const port = process.env.NODE_ENV === 'development' ? 3001 : 80;
const thirdPartyHost = process.env.NODE_ENV === 'development' ? 'localhost' : 'thirdparty-app';
const thirdPartyPort = process.env.NODE_ENV === 'development' ? 3002 : 80;

module.exports = {port, thirdPartyHost, thirdPartyPort};