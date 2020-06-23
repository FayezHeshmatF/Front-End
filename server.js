var staticserver =require('static-server');
var server=new staticserver({
    rootPath: './dist/',
    port: 6655
});

server.start(function (){
    console.log('server started', server.port);
});