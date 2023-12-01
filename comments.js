// create web server
// handle http request
// read file
// send response to client
// listen to port

// load http module
var http = require("http");
var fs = require("fs");

// create web server
var server = http.createServer(function(req, res){
    // console.log(req.url);
    // load html file
    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(body);
        });
    } else if(req.url.match("/node_modules/")){
        var cssPath = "." + req.url;
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    } else if(req.url === "/comments"){
        var comments = [