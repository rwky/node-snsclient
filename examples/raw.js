var http = require('http')
  , SNSClient = require('../');

var auth = {
    TopicArn: 'xxx'
}
var client = SNSClient(auth, function(err, message) {
    if (err) {
        throw err;
    }
    console.log(message);
});

http.createServer(function(req, res) {
    if(req.method === 'POST' && req.url === '/receive') {
        return client(req, res);
    }
    res.writeHead(404);
    res.end('Not found.');
}).listen(~~process.argv[2] || 9000);
