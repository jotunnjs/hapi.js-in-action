var WEB_BASE_URL = 'http://localhost:4000/';
var API_BASE_URL = 'http://localhost:4000/api';

module.exports = [{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply.file('./index.html');
    }
}];