var http = require('http');
var PORT = process.env.PORT || 8080;
function onRequest(request, response){
   // response.WriteHead(200, {'Content-Type':'text/plain'});
    response.write('Hello Worlds');
    response.end();
}

http.createServer(onRequest).listen(PORT);